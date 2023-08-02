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

      const clearData = [];
      for (let i = 0; i < excelData.length; i++){
        if(excelData[i].length != 0 && excelData[i][3] != "CLAVE" && excelData[i][3] != null){
          clearData.push([excelData[i][2] || "", excelData[i][3], excelData[i][4], excelData[i][5], excelData[i][6] || "", excelData[i][7] || "", excelData[i][8] || "", excelData[i][9] || "", excelData[i][10] || "", excelData[i][11] || ""])
        }
      }

      localStorage.setItem('data', JSON.stringify(clearData));
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
