import React, { useState } from 'react'
import './Form.css'

// Components
import { ExcelReader } from './components/ExcelReader'

export const FormPage = () => {
  const [validando, setValidando] = useState(false);

  const handleValidando = (validacion) => {
    setValidando(true);
  }

  return (
    <div>
      <div className='carga' style={ validando ? { display: "grid"} : {display: "none"}}>
        <div className="three-body">
          <div className="three-body__dot"></div>
          <div className="three-body__dot"></div>
          <div className="three-body__dot"></div>
        </div>
        <label className="carga-texto">Cargando Datos...</label>
      </div>
      <form className="container">
        <h1 className='title'>Asignación de Materias</h1>
        <ExcelReader handleValidando={handleValidando} />
      </form>
    </div>
  )
}
