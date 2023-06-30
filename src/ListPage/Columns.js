import React, { useState } from 'react'
export const Columns = ({ columns, setColumns }) => {
    const [isOpenColumns, setIsOpenColumns] = useState(false);

    const toggleMenuColumns = () => {
        setIsOpenColumns(!isOpenColumns);
    };

    return (
        <div className='AddRow'>
            <a onClick={toggleMenuColumns}> Columnas</a>
            {/* {isOpenColumns && ( */}
            <div className={` collapse ${isOpenColumns ? 'fieldsAddRow' : ''}`}>
                <div className='fieldsColumn'>
                    <div type='fieldColumn'>
                        <input type='checkbox' checked={columns.number} onClick={() => { setColumns({ ...columns, number: !columns.number }) }} />
                        <label>#</label>
                    </div>
                    <div type='fieldColumn'>
                        <input type='checkbox' checked={columns.grado} onClick={() => { setColumns({ ...columns, grado: !columns.grado }) }} />
                        <label>Grado</label>
                    </div>
                    <div type='fieldColumn'>
                        <input type='checkbox' checked={columns.clave} onClick={() => { setColumns({ ...columns, clave: !columns.clave }) }} />
                        <label>Clave</label>
                    </div>
                    <div type='fieldColumn'>
                        <input type='checkbox' checked={columns.profesor} onClick={() => { setColumns({ ...columns, profesor: !columns.profesor }) }} />
                        <label>Profesor</label>
                    </div>
                    <div type='fieldColumn'>
                        <input type='checkbox' checked={columns.tipo} onClick={() => { setColumns({ ...columns, tipo: !columns.tipo }) }} />
                        <label>Tipo</label>
                    </div>
                    <div type='fieldColumn'>
                        <input type='checkbox' checked={columns.nivel} onClick={() => { setColumns({ ...columns, nivel: !columns.nivel }) }} />
                        <label>Nivel</label>
                    </div>
                    <div type='fieldColumn'>
                        <input type='checkbox' checked={columns.materias} onClick={() => { setColumns({ ...columns, materias: !columns.materias }) }} />
                        <label>Materias</label>
                    </div>
                    <div type='fieldColumn'>
                        <input type='checkbox' checked={columns.asignadas} onClick={() => { setColumns({ ...columns, asignadas: !columns.asignadas }) }} />
                        <label>Asignadas</label>
                    </div>
                    <div type='fieldColumn'>
                        <input type='checkbox' checked={columns.faltantes} onClick={() => { setColumns({ ...columns, faltantes: !columns.faltantes }) }} />
                        <label>Faltantes</label>
                    </div>
                    <div type='fieldColumn'>
                        <input type='checkbox' checked={columns.practicas} onClick={() => { setColumns({ ...columns, practicas: !columns.practicas }) }} />
                        <label>Prácticas</label>
                    </div>
                    <div type='fieldColumn'>
                        <input type='checkbox' checked={columns.observaciones} onClick={() => { setColumns({ ...columns, observaciones: !columns.observaciones }) }} />
                        <label>Observaciones</label>
                    </div>
                </div>
            </div>
        </div>
    )
}
