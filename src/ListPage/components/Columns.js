import React, { useState } from 'react'

export const Columns = ({ columns, setColumns }) => {
    const [isOpenColumns, setIsOpenColumns] = useState(false); // Estado para desglozar o contraer la opción de columnas
    
    const toggleMenuColumns = () => { // Cambiar el estado para desglozar o contraer la opción de columnas
        setIsOpenColumns(!isOpenColumns);
    };

    return (
        <div className='AddRow'>
            <a className='AddRowTitle' onClick={toggleMenuColumns}>
                <label className="AddRowLabel">Columnas</label>
                {
                    isOpenColumns
                        ? <img src='../images/icons/navegarArriba.png' className='browseIcon' />
                        : <img src='../images/icons/navegar.png' className='browseIcon' />
                }
            </a>
            <div className={` collapse ${isOpenColumns ? 'fieldsAddRow' : ''}`}>
                <div className='fieldsColumn'>
                    <div className='fieldColumn'>
                        <input type='checkbox' checked={columns.number} onChange={() => { setColumns({ ...columns, number: !columns.number }) }} />
                        <label className="fieldLabel">#</label>
                    </div>
                    <div className='fieldColumn'>
                        <input type='checkbox' checked={columns.grado} onChange={() => { setColumns({ ...columns, grado: !columns.grado }) }} />
                        <label className="fieldLabel">Grado</label>
                    </div>
                    <div className='fieldColumn'>
                        <input type='checkbox' checked={columns.clave} onChange={() => { setColumns({ ...columns, clave: !columns.clave }) }} />
                        <label className="fieldLabel">Clave</label>
                    </div>
                    <div className='fieldColumn'>
                        <input type='checkbox' checked={columns.profesor} onChange={() => { setColumns({ ...columns, profesor: !columns.profesor }) }} />
                        <label className="fieldLabel">Profesor</label>
                    </div>
                    <div className='fieldColumn'>
                        <input type='checkbox' checked={columns.tipo} onChange={() => { setColumns({ ...columns, tipo: !columns.tipo }) }} />
                        <label className="fieldLabel">Tipo</label>
                    </div>
                    <div className='fieldColumn'>
                        <input type='checkbox' checked={columns.nivel} onChange={() => { setColumns({ ...columns, nivel: !columns.nivel }) }} />
                        <label className="fieldLabel">Nivel</label>
                    </div>
                    <div className='fieldColumn'>
                        <input type='checkbox' checked={columns.materias} onChange={() => { setColumns({ ...columns, materias: !columns.materias }) }} />
                        <label className="fieldLabel">Materias</label>
                    </div>
                    <div className='fieldColumn'>
                        <input type='checkbox' checked={columns.asignadas} onChange={() => { setColumns({ ...columns, asignadas: !columns.asignadas }) }} />
                        <label className="fieldLabel">Asignadas</label>
                    </div>
                    <div className='fieldColumn'>
                        <input type='checkbox' checked={columns.faltantes} onChange={() => { setColumns({ ...columns, faltantes: !columns.faltantes }) }} />
                        <label className="fieldLabel">Faltantes</label>
                    </div>
                    <div className='fieldColumn'>
                        <input type='checkbox' checked={columns.practicas} onChange={() => { setColumns({ ...columns, practicas: !columns.practicas }) }} />
                        <label className="fieldLabel">Prácticas</label>
                    </div>
                    <div className='fieldColumn'>
                        <input type='checkbox' checked={columns.observaciones} onChange={() => { setColumns({ ...columns, observaciones: !columns.observaciones }) }} />
                        <label className="fieldLabel">Observaciones</label>
                    </div>
                </div>
            </div>
        </div>
    )
}
