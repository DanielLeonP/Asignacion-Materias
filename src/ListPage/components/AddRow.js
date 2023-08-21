import React, { useState } from 'react'
import { FieldProfessor } from './FieldProfessor';

const initialValues = { // Valores para estado inicial de los inputs
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
    const [isOpenAddRow, setIsOpenAddRow] = useState(false); // Estado para desglosar el formulario
    const [profesorType, setProfesorType] = useState('tiempo_completo'); // Estado para saber  en que tabla insertar datos

    const toggleMenuAddRow = () => { // Función para cambiar de estado de desglosar formulario
        setIsOpenAddRow(!isOpenAddRow);
    };

    const addRow = () => { // Función para agregar datos a la tabla seleccionada
        const dataToSend = [ // Preparación de datos para ser agregados
            userData.grado,
            parseInt(userData.clave ? userData.clave : 0),
            userData.profesor,
            userData.tipo,
            userData.nivel,
            parseInt(userData.materias ? userData.materias : 0),
            parseInt(userData.asignadas ? userData.asignadas : 0),
            parseInt(userData.faltantes ? userData.faltantes : 0),
            parseInt(userData.practicas ? userData.practicas : 0),
            userData.observaciones
        ];
        switch (profesorType) { // Switch para saber a que tabla agregar los datos
            case 'tiempo_completo':
                handleAddTodo(dataToSend);
                setUserData(initialValues);
                return;
            case 'tiempo_libre':
                handleAddTodo2(dataToSend);
                setUserData(initialValues);
                return;
            case 'honorarios':
                handleAddTodo3(dataToSend);
                setUserData(initialValues);
                return;
            default:
                break;
        }
    }

    const [userData, setUserData] = useState(initialValues); // Estado de los datos del profesor

    const onRadioChange = (e) => { // Cambiar el estado de la tabla a la que se debe agregar los datos del profesor
        setProfesorType(e.target.value)
    }

    return (
        <div className='AddRow'>
            <a className='AddRowTitle' onClick={toggleMenuAddRow}>
                <label className="AddRowLabel">Agregar Fila</label>
                {
                    isOpenAddRow
                        ? <img src='../images/icons/navegarArriba.png' className='browseIcon' />
                        : <img src='../images/icons/navegar.png' className='browseIcon' />
                }

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
