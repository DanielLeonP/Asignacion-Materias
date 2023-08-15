import React, { useState } from 'react'
import './Form.css'

// Components
import { ExcelReader } from './components/ExcelReader.js'
import { FloatingNotification } from '../components/FloatingNotification.js'
import { LogoutButton } from '../components/LogoutButton.js'

export const FormPage = () => {
  const [notificacion, setNotificacion] = useState(false);
  const [estado, setEstado] = useState(false);
  const [validando, setValidando] = useState(false);

  const handleValidando = () => {
    setValidando(true);
  }

  const handleNotificacionChange = (activacion) => {
    setNotificacion(activacion)
  }

  const handleEstadoChange = (state) => {
    setEstado(state)
  }

  return (
    <div>
      <LogoutButton />
      <FloatingNotification customTitle="Archivo Faltante" customText="¿Deseas no subir ningun archivo (.xlsx), para la extracción de datos y por el contrario empezar un nuevo set de datos?" customButtons={true} notificacion={notificacion} changeNotificacion={handleNotificacionChange} changeEstado={handleEstadoChange} />
      <div className='carga' style={validando ? { display: "grid" } : { display: "none" }}>
        <div className="three-body">
          <div className="three-body__dot"></div>
          <div className="three-body__dot"></div>
          <div className="three-body__dot"></div>
        </div>
        <label className="carga-texto">Cargando Datos...</label>
      </div>
      <form className="container menor">
        <h1 className='title'>Asignación de Materias</h1>
        <ExcelReader handleValidando={handleValidando} estado={estado} changeEstado={handleEstadoChange} changeNotificacion={handleNotificacionChange} />
      </form>
    </div>
  )
}
