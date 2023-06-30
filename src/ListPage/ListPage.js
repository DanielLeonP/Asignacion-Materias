import React, { useState } from 'react'
import './List.css'
import { ItemColumn } from './ItemColumn'
import { FieldProfessor } from './FieldProfessor';
import { FieldColumn } from './FieldColumn';

export const ListPage = () => {
  const data = [['DR.', 4658, 'ACUÑA GARCIA JOSE ALFREDO', 'PTC', 'LICENCIATURA', 7, 0, 0, 0, 'Prueba de observación'],
  ['DR.', 12115, 'AGUIRRE CARACHEO EDUARDO', 'PTC', 'LICENCIATURA', 4, 0, 0, 0, ''],
  ['MSI.', 6746, 'ARREGUIN RICO SANDRA PATRICIA', 'PTC', 'LICENCIATURA', 3, 0, 3, 1, ''],
  ['DRA.', 10267, 'CANCHOLA MAGDALENO SANDRA LUZ', 'PTC', 'LICENCIATURA', 4, 0, 4, 0, ''],
  ['DR.', 4824, 'CHAPARRO SANCHEZ RICARDO', 'PTC', 'LICENCIATURA', 3, 0, 3, 0, ''],
  ['DR.', 3604, 'CHAVEZ MORALES UBALDO', 'PTC', 'LICENCIATURA', 4, 0, 4, 0, ''],
  ['DR.', 4658, 'ACUÑA GARCIA JOSE ALFREDO', 'PTC', 'LICENCIATURA', 7, 0, 0, 0, ''],
  ['DR.', 12115, 'AGUIRRE CARACHEO EDUARDO', 'PTC', 'LICENCIATURA', 4, 0, 0, 0, ''],
  ['MSI.', 6746, 'ARREGUIN RICO SANDRA PATRICIA', 'PTC', 'LICENCIATURA', 3, 0, 3, 1, ''],
  ['DRA.', 10267, 'CANCHOLA MAGDALENO SANDRA LUZ', 'PTC', 'LICENCIATURA', 4, 0, 4, 0, ''],
  ['DR.', 4824, 'CHAPARRO SANCHEZ RICARDO', 'PTC', 'LICENCIATURA', 3, 0, 3, 0, ''],
  ['DR.', 3604, 'CHAVEZ MORALES UBALDO', 'PTC', 'LICENCIATURA', 4, 0, 4, 0, ''],
  ['DR.', 4658, 'ACUÑA GARCIA JOSE ALFREDO', 'PTC', 'LICENCIATURA', 7, 0, 0, 0, ''],
  ['DR.', 12115, 'AGUIRRE CARACHEO EDUARDO', 'PTC', 'LICENCIATURA', 4, 0, 0, 0, ''],
  ['MSI.', 6746, 'ARREGUIN RICO SANDRA PATRICIA', 'PTC', 'LICENCIATURA', 3, 0, 3, 1, ''],
  ['DRA.', 10267, 'CANCHOLA MAGDALENO SANDRA LUZ', 'PTC', 'LICENCIATURA', 4, 0, 4, 0, ''],
  ['DR.', 4824, 'CHAPARRO SANCHEZ RICARDO', 'PTC', 'LICENCIATURA', 3, 0, 3, 0, ''],
  ['DR.', 3604, 'CHAVEZ MORALES UBALDO', 'PTC', 'LICENCIATURA', 4, 0, 4, 0, ''],
  ['DR.', 4658, 'ACUÑA GARCIA JOSE ALFREDO', 'PTC', 'LICENCIATURA', 7, 0, 0, 0, ''],
  ['DR.', 12115, 'AGUIRRE CARACHEO EDUARDO', 'PTC', 'LICENCIATURA', 4, 0, 0, 0, ''],
  ['MSI.', 6746, 'ARREGUIN RICO SANDRA PATRICIA', 'PTC', 'LICENCIATURA', 3, 0, 3, 1, ''],
  ['DRA.', 10267, 'CANCHOLA MAGDALENO SANDRA LUZ', 'PTC', 'LICENCIATURA', 4, 0, 4, 0, ''],
  ['DR.', 4824, 'CHAPARRO SANCHEZ RICARDO', 'PTC', 'LICENCIATURA', 3, 0, 3, 0, ''],
  ['DR.', 3604, 'CHAVEZ MORALES UBALDO', 'PTC', 'LICENCIATURA', 4, 0, 4, 0, '']];

  const [isOpenAddRow, setIsOpenAddRow] = useState(false);

  const toggleMenuAddRow = () => {
    setIsOpenAddRow(!isOpenAddRow);
  };

  const [isOpenColumns, setIsOpenColumns] = useState(false);

  const toggleMenuColumns = () => {
    setIsOpenColumns(!isOpenColumns);
  };


  return (
    <div className='container'>
      <div className='title'>Materias Asignadas</div>

      <div className='column3'>
        <ItemColumn item={{ title: '# Materias', value: '5' }} />
        <ItemColumn item={{ title: 'Restantes', value: '3' }} />
        <ItemColumn item={{ title: 'Otro', value: '2' }} />
      </div>

      <div className='AddRow' >
        <a onClick={toggleMenuAddRow}>
          Agregar Fila
          {/* <img className='icon' src='/public/images/icons/navegar.png' /> */}
        </a>
        {/* {isOpenAddRow && ( */}
        <div className={`collapse ${isOpenAddRow ? 'fieldsAddRow' : ''}`}>
          <FieldProfessor field={{ label: 'Nombre de profesor', type: 'text' }} />
          <FieldProfessor field={{ label: 'Grado', type: 'text' }} />
          <FieldProfessor field={{ label: 'Clave', type: 'number' }} />
          <FieldProfessor field={{ label: 'Tipo', type: 'text' }} />
          <FieldProfessor field={{ label: 'Nivel', type: 'text' }} />
          <FieldProfessor field={{ label: 'Materias que tiene', type: 'text' }} />
          <FieldProfessor field={{ label: 'Asignadas', type: 'text' }} />
          <FieldProfessor field={{ label: 'Faltantes', type: 'text' }} />
          <FieldProfessor field={{ label: 'Prácticas', type: 'text' }} />
          <FieldProfessor field={{ label: 'Observaciones', type: 'text' }} />
          <div type='submit' className='submit'>Agregar</div>
        </div>

        {/* )} */}
      </div>

      <div className='AddRow'>
        <a onClick={toggleMenuColumns}> Columnas</a>
        {/* {isOpenColumns && ( */}
        <div className={`collapse ${isOpenColumns ? 'fieldsAddRow' : ''}`}>
          <FieldColumn field={{ label: 'Grado', checked: true }} />
          <FieldColumn field={{ label: 'Clave', checked: false }} />
          <FieldColumn field={{ label: 'Profesor', checked: false }} />
          <FieldColumn field={{ label: 'Tipo', checked: false }} />
          <FieldColumn field={{ label: 'Nivel', checked: false }} />
          <FieldColumn field={{ label: 'Materias que tiene', checked: false }} />
          <FieldColumn field={{ label: 'Asignadas', checked: false }} />
          <FieldColumn field={{ label: 'Faltantes', checked: false }} />
          <FieldColumn field={{ label: 'Prácticas', checked: false }} />
          <FieldColumn field={{ label: 'Observaciones', checked: false }} />
          <div type='submit' className='submit'>Continuar</div>
        </div>
        {/* )} */}
      </div>

      <table>
        <tr className='headerTable'>
          <th>#</th>
          <th>Grado</th>
          <th>Clave</th>
          <th>Profesor</th>
          <th>Tipo</th>
          <th>Nivel</th>
          <th>Materias</th>
          <th>Asignadas</th>
          <th>Faltantes</th>
          <th>Prácticas</th>
          <th>Observaciones</th>
        </tr>
        {data.map((user, counter) => {
          return (
            <tr>
              <th>{counter + 1}</th>
              <th>{user[0]}</th>
              <th>{user[1]}</th>
              <th>{user[2]}</th>
              <th>{user[3]}</th>
              <th>{user[4]}</th>
              <th>{user[5]}</th>
              <th>{user[6]}</th>
              <th>{user[7]}</th>
              <th>{user[8]}</th>
              <th>{user[9]}</th>
            </tr>
          )
        })}
      </table>

    </div>
  )
}
