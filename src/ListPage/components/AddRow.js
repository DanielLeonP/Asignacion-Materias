import React, { useState } from 'react'
import { FieldProfessor } from './FieldProfessor';

const initialValues = {
    grado: '',
    clave: '',
    profesor: '',
    tipo: '',
    nivel: '',
    materias: '',
    asignadas: '',
    faltantes: '',
    practicas: '',
    observaciones: ''
}
export const AddRow = ({ onAddTodo }) => {
    const [isOpenAddRow, setIsOpenAddRow] = useState(false);

    const toggleMenuAddRow = () => {
        setIsOpenAddRow(!isOpenAddRow);
    };
    const addRow = () => {
        onAddTodo([
            userData.grado,
            userData.clave,
            userData.profesor,
            userData.tipo,
            userData.nivel,
            userData.materias,
            userData.asignadas,
            userData.faltantes,
            userData.practicas,
            userData.observaciones
        ]);
        setUserData(initialValues);
    }

    const [userData, setUserData] = useState(initialValues);
    return (
        <div className='AddRow' >
            <a className='AddRowTitle' onClick={toggleMenuAddRow}>
                Agregar Fila
                <img src='../images/icons/navegar.png' className='browseIcon' />
            </a>
            <form className={`collapse ${isOpenAddRow ? 'fieldsAddRow' : ''}`}>
                <FieldProfessor name={'profesor'} field={{ value: userData.profesor, label: 'Nombre de profesor', type: 'text' }} setUserData={setUserData} userData={userData} />
                <FieldProfessor name={'grado'} field={{ value: userData.grado, label: 'Grado', type: 'text' }} setUserData={setUserData} userData={userData} />
                <FieldProfessor name={'clave'} field={{ value: userData.clave, label: 'Clave', type: 'number' }} setUserData={setUserData} userData={userData} />
                <FieldProfessor name={'tipo'} field={{ value: userData.tipo, label: 'Tipo', type: 'text' }} setUserData={setUserData} userData={userData} />
                <FieldProfessor name={'nivel'} field={{ value: userData.nivel, label: 'Nivel', type: 'text' }} setUserData={setUserData} userData={userData} />
                <FieldProfessor name={'materias'} field={{ value: userData.materias, label: 'Materias que tiene', type: 'number' }} setUserData={setUserData} userData={userData} />
                <FieldProfessor name={'asignadas'} field={{ value: userData.asignadas, label: 'Asignadas', type: 'number' }} setUserData={setUserData} userData={userData} />
                <FieldProfessor name={'faltantes'} field={{ value: userData.faltantes, label: 'Faltantes', type: 'number' }} setUserData={setUserData} userData={userData} />
                <FieldProfessor name={'practicas'} field={{ value: userData.practicas, label: 'Prácticas', type: 'number' }} setUserData={setUserData} userData={userData} />
                <FieldProfessor name={'observaciones'} field={{ value: userData.observaciones, label: 'Observaciones', type: 'text' }} setUserData={setUserData} userData={userData} />
                <div type='submit' className='submit' onClick={addRow}>Agregar</div>
            </form>
        </div>
    )
}
