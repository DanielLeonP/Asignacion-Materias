import React, { useState } from 'react'
import './List.css'
import { ItemColumn } from './ItemColumn'

import { UserTable } from './UserTable';
import { Columns } from './Columns';
import { AddRow } from './AddRow';

const data = [['DR.', 4658, 'ACUÑA GARCIA JOSE ALFREDO', 'PTC', 'LICENCIATURA', 7, 0, 0, 0, 'Prueba de observación'],
['DR.', 12115, 'AGUIRRE CARACHEO EDUARDO', 'PTC', 'LICENCIATURA', 4, 0, 0, 0, ''],
['MSI.', 6746, 'ARREGUIN RICO SANDRA PATRICIA', 'PTC', 'LICENCIATURA', 3, 0, 3, 1, ''],
['DRA.', 10267, 'CANCHOLA MAGDALENO SANDRA LUZ', 'PTC', 'LICENCIATURA', 4, 0, 4, 0, ''],
['DR.', 4824, 'CHAPARRO SANCHEZ RICARDO', 'PTC', 'LICENCIATURA', 3, 0, 3, 0, ''],
['DR.', 3604, 'CHAVEZ MORALES UBALDO', 'PTC', 'LICENCIATURA', 4, 0, 4, 0, ''],
];

const initialStateColumns = {
  number: true,
  grado: true,
  clave: true,
  profesor: true,
  tipo: true,
  nivel: true,
  materias: true,
  asignadas: true,
  faltantes: true,
  practicas: true,
  observaciones: true
}
export const ListPage = () => {
  const [columns, setColumns] = useState(initialStateColumns);

  return (
    <div className='container'>
      <div className='title'>Materias Asignadas</div>

      <div className='column3'>
        <ItemColumn item={{ title: '# Materias', value: '5' }} />
        <ItemColumn item={{ title: 'Restantes', value: '3' }} />
        <ItemColumn item={{ title: 'Otro', value: '2' }} />
      </div>

      <AddRow />

      <Columns columns={columns} setColumns={setColumns} />

      <UserTable data={data} columns={columns} />

    </div>
  )
}
