import React, { useState } from 'react'
import { FieldProfessor } from './FieldProfessor';

export const AddRow = () => {
    const [isOpenAddRow, setIsOpenAddRow] = useState(false);

    const toggleMenuAddRow = () => {
        setIsOpenAddRow(!isOpenAddRow);
    };

    return (
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
    )
}
