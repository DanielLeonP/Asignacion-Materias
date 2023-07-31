import React, { useState } from 'react'
export const Columns = ({ columns, setColumns }) => {
    const [isOpenColumns, setIsOpenColumns] = useState(false);

    const toggleMenuColumns = () => {
        setIsOpenColumns(!isOpenColumns);
    };

    return (
        <div className='AddRow'>
            <a onClick={toggleMenuColumns} className='AddRowTitle'> Columnas</a>
            {/* {isOpenColumns && ( */}
            <div className={` collapse ${isOpenColumns ? 'fieldsAddRow' : ''}`}>
                <div className='fieldsColumn'>
                    <div type='fieldColumn'>
                        <input type='checkbox' checked={columns.number} onChange={() => { setColumns({ ...columns, number: !columns.number }) }} />
                        <label>#</label>
                    </div>
                    <div type='fieldColumn'>
                        <input type='checkbox' checked={columns.grado} onChange={() => { setColumns({ ...columns, grado: !columns.grado }) }} />
                        <label>Grado</label>
                    </div>
                    <div type='fieldColumn'>
                        <input type='checkbox' checked={columns.clave} onChange={() => { setColumns({ ...columns, clave: !columns.clave }) }} />
                        <label>Clave</label>
                    </div>
                    <div type='fieldColumn'>
                        <input type='checkbox' checked={columns.profesor} onChange={() => { setColumns({ ...columns, profesor: !columns.profesor }) }} />
                        <label>Profesor</label>
                    </div>
                    <div type='fieldColumn'>
                        <input type='checkbox' checked={columns.tipo} onChange={() => { setColumns({ ...columns, tipo: !columns.tipo }) }} />
                        <label>Tipo</label>
                    </div>
                    <div type='fieldColumn'>
                        <input type='checkbox' checked={columns.nivel} onChange={() => { setColumns({ ...columns, nivel: !columns.nivel }) }} />
                        <label>Nivel</label>
                    </div>
                    <div type='fieldColumn'>
                        <input type='checkbox' checked={columns.materias} onChange={() => { setColumns({ ...columns, materias: !columns.materias }) }} />
                        <label>Materias</label>
                    </div>
                    <div type='fieldColumn'>
                        <input type='checkbox' checked={columns.asignadas} onChange={() => { setColumns({ ...columns, asignadas: !columns.asignadas }) }} />
                        <label>Asignadas</label>
                    </div>
                    <div type='fieldColumn'>
                        <input type='checkbox' checked={columns.faltantes} onChange={() => { setColumns({ ...columns, faltantes: !columns.faltantes }) }} />
                        <label>Faltantes</label>
                    </div>
                    <div type='fieldColumn'>
                        <input type='checkbox' checked={columns.practicas} onChange={() => { setColumns({ ...columns, practicas: !columns.practicas }) }} />
                        <label>Prácticas</label>
                    </div>
                    <div type='fieldColumn'>
                        <input type='checkbox' checked={columns.observaciones} onChange={() => { setColumns({ ...columns, observaciones: !columns.observaciones }) }} />
                        <label>Observaciones</label>
                    </div>
                </div>
            </div>
        </div>
    )
}
