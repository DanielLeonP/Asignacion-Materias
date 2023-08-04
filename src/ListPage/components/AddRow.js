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
export const AddRow = ({ handleAddTodo, handleAddTodo2, handleAddTodo3 }) => {
    const [isOpenAddRow, setIsOpenAddRow] = useState(false);
    const [profesorType, setProfesorType] = useState('tiempo_completo');

    const toggleMenuAddRow = () => {
        setIsOpenAddRow(!isOpenAddRow);
    };
    const addRow = () => {
        const dataToSend = [
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
        ];
        switch (profesorType) {
            case 'tiempo_completo':
                // console.log('Insertado a tiempo_completo')
                handleAddTodo(dataToSend);
                setUserData(initialValues);
                return;
            case 'tiempo_libre':
                // console.log('Insertado a tiempo_libre')
                handleAddTodo2(dataToSend);
                setUserData(initialValues);
                return;
            case 'honorarios':
                // console.log('Insertado a honorarios')
                handleAddTodo3(dataToSend);
                setUserData(initialValues);
                return;
            default:
                break;
        }
    }

    const [userData, setUserData] = useState(initialValues);

    const onRadioChange = (e) => {
        setProfesorType(e.target.value)
    }
    return (
        <div className='AddRow'>
            <a className='AddRowTitle' onClick={toggleMenuAddRow}>
                <label className="AddRowLabel">Agregar Fila</label>
                <img src='../images/icons/navegar.png' className='browseIcon' />
            </a>
            <form className={`collapse ${isOpenAddRow ? 'fieldsAddRow' : ''}`}>
                <FieldProfessor name={'profesor'} field={{ value: userData.profesor, label: 'Nombre de profesor', type: 'text', placeholder: 'Nombre de profesor' }} setUserData={setUserData} userData={userData} />
                <FieldProfessor name={'grado'} field={{ value: userData.grado, label: 'Grado', type: 'text', placeholder: 'Grado' }} setUserData={setUserData} userData={userData} />
                <FieldProfessor name={'clave'} field={{ value: userData.clave, label: 'Clave', type: 'number', placeholder: 'Clave' }} setUserData={setUserData} userData={userData} />
                <FieldProfessor name={'tipo'} field={{ value: userData.tipo, label: 'Tipo', type: 'text', placeholder: 'Tipo' }} setUserData={setUserData} userData={userData} />
                <FieldProfessor name={'nivel'} field={{ value: userData.nivel, label: 'Nivel', type: 'text', placeholder: 'Nivel' }} setUserData={setUserData} userData={userData} />
                <FieldProfessor name={'materias'} field={{ value: userData.materias, label: 'Materias que tiene', type: 'number', placeholder: 'Materias que tiene' }} setUserData={setUserData} userData={userData} />
                <FieldProfessor name={'asignadas'} field={{ value: userData.asignadas, label: 'Asignadas', type: 'number', placeholder: 'Asignadas' }} setUserData={setUserData} userData={userData} />
                <FieldProfessor name={'faltantes'} field={{ value: userData.faltantes, label: 'Faltantes', type: 'number', placeholder: 'Faltantes' }} setUserData={setUserData} userData={userData} />
                <FieldProfessor name={'practicas'} field={{ value: userData.practicas, label: 'Prácticas', type: 'number', placeholder: 'Prácticas' }} setUserData={setUserData} userData={userData} />
                <FieldProfessor name={'observaciones'} field={{ value: userData.observaciones, label: 'Observaciones', type: 'text', placeholder: 'Observaciones' }} setUserData={setUserData} userData={userData} />
                <div className="RadioGroup">
                    <label className='professorLabel'>Tiempo Completo:</label>
                    <input
                        type="radio"
                        name="profesor"
                        value="tiempo_completo"
                        onChange={onRadioChange}
                        checked={profesorType === "tiempo_completo"}
                    ></input>
                    <label className='professorLabel'>Tiempo Libre:</label>
                    <input
                        type="radio"
                        name="profesor"
                        value="tiempo_libre"
                        onChange={onRadioChange}
                        checked={profesorType === "tiempo_libre"}
                    ></input>
                    <label className='professorLabel'>Honorarios:</label>
                    <input
                        type="radio"
                        name="profesor"
                        value="honorarios"
                        onChange={onRadioChange}
                        checked={profesorType === "honorarios"}
                    ></input>
                </div>
                <div type='submit' className='submit' onClick={addRow}>Agregar</div>
            </form>
        </div>
    )
}
