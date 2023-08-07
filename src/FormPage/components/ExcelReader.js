import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as XLSX from 'xlsx'

export const ExcelReader = ({ handleValidando }) => {
  const navigate = useNavigate();
  const [selectedName, setSelectedName] = useState("Sube tu archivo excel");
  const fileInputRef = useRef(null);

  const handleUploadName = (event) => {
    const file = event.target.files[0];
    setSelectedName(file.name);
  }

  const handleFileChange = (event) => {
    event.preventDefault();
    handleValidando(true);
    const file = fileInputRef.current.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      const data = event.target.result;
      const libro = XLSX.read(data, { type: 'binary' });
      const primerHoja = libro.SheetNames[0];
      const celdas = libro.Sheets[primerHoja];
      const excelData = XLSX.utils.sheet_to_json(celdas, { header: 1 });

      const dataTC = [];
      const dataTL = [];
      const dataH = [];
      let tipoProfesor = "";
      for (let i = 0; i < excelData.length; i++) {
        tipoProfesor = (excelData[i][4] === "Tiempos Completos" ? "TC" : (excelData[i][4] === "Tiempos Libres" ? "TL" : (excelData[i][4] === "Honorarios" ? "H" : tipoProfesor)))
        if (excelData[i].length !== 0 && excelData[i][3] !== "CLAVE" && excelData[i][3] != null) {
          switch (tipoProfesor) {
            case "TC":
              dataTC.push([excelData[i][2] || 0, excelData[i][3], excelData[i][4], excelData[i][5], excelData[i][6] || 0, excelData[i][7] || 0, excelData[i][8] || 0, excelData[i][9] || 0, excelData[i][10] || 0, excelData[i][11] || ""]);
              break;
            case "TL":
              dataTL.push([excelData[i][2] || 0, excelData[i][3], excelData[i][4], excelData[i][5], excelData[i][6] || 0, excelData[i][7] || 0, excelData[i][8] || 0, excelData[i][9] || 0, excelData[i][10] || 0, excelData[i][11] || ""]);
              break;
            case "H":
              dataH.push([excelData[i][2] || 0, excelData[i][3], excelData[i][4], excelData[i][5], excelData[i][6] || 0, excelData[i][7] || 0, excelData[i][8] || 0, excelData[i][9] || 0, excelData[i][10] || 0, excelData[i][11] || ""]);
              break;
            default:
              break;
          }
        }
      }

      localStorage.setItem('dataTC', JSON.stringify(dataTC));
      localStorage.setItem('dataTL', JSON.stringify(dataTL));
      localStorage.setItem('dataH', JSON.stringify(dataH));
      handleValidando(false);
      navigate("/list");
    };

    reader.readAsBinaryString(file);
  };

  return (
    <>
      <div className="file-upload">
        <label className="file-title">{selectedName}</label>
        <input type="file" required ref={fileInputRef} onChange={handleUploadName} />
      </div>
      <input type="submit" value="Leer Datos" onClick={handleFileChange}></input>
    </>
  );
};
