import React, { useState } from 'react'
import './List.css'
import { ItemColumn } from './ItemColumn'

export const ListPage = () => {

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className='container'>
      <div className='title'>Materias Asignadas</div>

      <div className='column3'>
        <ItemColumn item={{ title: '# Materias', value: '5' }} />
        <ItemColumn item={{ title: 'Restantes', value: '3' }} />
        <ItemColumn item={{ title: 'Otro', value: '2' }} />
      </div>

      <div className='AdRow' >
        <a onClick={toggleMenu}> Agregar Fila</a>
        {isOpen && (
          <div>
            Profesor: 
            <input className='inputRow'></input>
          </div>
        )}
      </div>

      <div className='AdRow'>Columnas</div>

    </div>
  )
}
