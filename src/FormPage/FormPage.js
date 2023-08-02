import React, { useState } from 'react'
import './Form.css'

// Components
import { ItemColumn } from '../ListPage/components/ItemColumn'
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
      <form className="container menor">
        <h1 className='title'>Asignación de Materias</h1>

        <div className='column3'>
          <ItemColumn item={{ title: '# Materias', value: '5' }} />
          <ItemColumn item={{ title: 'Restantes', value: '3' }} />
          <ItemColumn item={{ title: 'Materias de profesores total', value: '2' }} />
          <ItemColumn item={{ title: 'Prácticas total', value: '3' }} />
          <ItemColumn item={{ title: 'Restantes asignadas', value: '3' }} />
          <ItemColumn item={{ title: 'Observaciones total', value: '3' }} />
        </div>

        <label className='input-title margen'>Sube tus Materias</label>
        <ExcelReader handleValidando={handleValidando} />
      </form>
    </div>
  )
}
