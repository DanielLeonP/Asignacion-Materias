import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as XLSX from 'xlsx'

export const ExcelReader = ({handleValidando}) => {
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
      excelData.filter(row => {
        tipoProfesor = (row[4] == "Tiempos Completos" ? "TC" : (row[4] == "Tiempos Libres" ? "TL" : (row[4] == "Honorarios" ? "H" : tipoProfesor)))
        if(row.length !== 0 && row[3] !== "CLAVE" && row[3] != null){
          switch(tipoProfesor){
            case "TC":
              dataTC.push([row[2] || "", row[3], row[4], row[5], row[6] || "", row[7] || "", row[8] || "", row[9] || "", row[10] || "", row[11] || ""]);
              break;
            case "TL":
              dataTL.push([row[2] || "", row[3], row[4], row[5], row[6] || "", row[7] || "", row[8] || "", row[9] || "", row[10] || "", row[11] || ""]);
              break;
            case "H":
              dataH.push([row[2] || "", row[3], row[4], row[5], row[6] || "", row[7] || "", row[8] || "", row[9] || "", row[10] || "", row[11] || ""]);
              break;
          }
        }
      })

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
        <label>{selectedName}</label>
        <input type="file" required ref={fileInputRef} onChange={handleUploadName}/><br></br>
      </div>
      <input type="submit" value="Leer Datos" onClick={handleFileChange}></input>
    </>
  );
};
