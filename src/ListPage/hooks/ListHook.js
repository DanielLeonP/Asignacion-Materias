import { useReducer, useState, useEffect } from 'react'
import { todoReducer } from '../helpers/todoReducer';

const init = (dataName = 'dataTC') => { //Función para inicializar los datos de las tablas desde localStorage
    return JSON.parse(localStorage.getItem(dataName)) || [];
}

const initialStateColumns = { //Estado inicial de las columnas de las tablas
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
    observaciones: true,
}
const setLocalStorage = (dataName, data) => { //Función para guardar cambios en localStorage de datos
    localStorage.setItem(dataName, JSON.stringify(data));
}

const createHandleToData = (dispatch) => { //Métodos para funciones relacionadas con los datos
    const handleDeleteTodo = (clave) => { //Eliminar fila
        dispatch({
            type: '[DATA] Delete Row',
            payload: clave
        });
    }

    const handleAddTodo = (newRow) => { //Agregar fila
        dispatch({
            type: '[DATA] Add Row',
            payload: newRow
        });
    }

    const handleEditTodo = (index, newRow) => { //Editar fila
        dispatch({
            type: '[DATA] Edit Row',
            payload: { index, newRow }
        });
    }
    return [handleDeleteTodo, handleAddTodo, handleEditTodo]
}
export const ListHook = () => {
    const materiasForm = 200;// CAMBIAR A POR LO QUE VIENE DEL FORM

    const [columns, setColumns] = useState(initialStateColumns); //Estado de columnas que se muestran de la tabla
    const [columnsBefore, setColumnsBefore] = useState(columns); //Estado anterior al actual de las columnas en las tablas


    // Data 1
    const [data, dispatch] = useReducer(todoReducer, [], () => init('dataTC')); //Reducer para los datos de Profesores de Tiempo completo
    const [handleDeleteTodo, handleAddTodo, handleEditTodo] = createHandleToData(dispatch); // Metodos para Profesores de Tiempo completo

    // Data 2
    const [data2, dispatch2] = useReducer(todoReducer, [], () => init('dataTL')); //Reducer para los datos de Profesores de Tiempo libre
    const [handleDeleteTodo2, handleAddTodo2, handleEditTodo2] = createHandleToData(dispatch2); // Metodos para Profesores de Tiempo libre

    // Data 3
    const [data3, dispatch3] = useReducer(todoReducer, [], () => init('dataH')); //Reducer para los datos de Profesores por Honorarios
    const [handleDeleteTodo3, handleAddTodo3, handleEditTodo3] = createHandleToData(dispatch3); // Metodos para Profesores por Honorarios

    const [info, setInfo] = useState({ //Estado de la información sobre las materias asignadas
        materias: 0,
        mRestantes: 0,
        mAsignadas: 0,
        practicas: 0,
        observaciones: 0,
        faltantes: 0
    });

    useEffect(() => { //UseEffect para cada que cambie data, data2, data3 se guarden los cambios en localStorage y para actualizar la información de materias asignadas
        updateInfo();
        setLocalStorage('dataTC', data);
        setLocalStorage('dataTL', data2);
        setLocalStorage('dataH', data3);
    }, [data, data2, data3])

    const isNumber = (value) => { //Función para saber si un valor es NaN
        if (!isNaN(value)) {
            return value;
        }
        return 0;
    }
    const updateInfo = () => { //Actualizar la información de materias asignadas

        // Obtener los datos de las tablas para generar información de materias asignadas
        const values1 = data.map(item => {
            return { materias: isNumber(item[5]), asignadas: isNumber(item[6]), faltantes: isNumber(item[7]), practicas: isNumber(item[8]), observaciones: item[9] === "" ? 0 : 1 }
        });
        const values2 = data2.map(item => {
            return { materias: isNumber(item[5]), asignadas: isNumber(item[6]), faltantes: isNumber(item[7]), practicas: isNumber(item[8]), observaciones: item[9] === "" ? 0 : 1 }
        });
        const values3 = data3.map(item => {
            return { materias: isNumber(item[5]), asignadas: isNumber(item[6]), faltantes: isNumber(item[7]), practicas: isNumber(item[8]), observaciones: item[9] === "" ? 0 : 1 }
        });

        //Concatenar multiples datos de tablas
        const values = values1.concat(values2).concat(values3);

        //Obtener suma de materias, asignadas, faltantes, practicas y observaciones
        const materias = values.map(value => value.materias).reduce((prev, curr) => prev + curr, 0);
        const asignadas = values.map(value => value.asignadas).reduce((prev, curr) => prev + curr, 0);
        const faltantes = values.map(value => value.faltantes).reduce((prev, curr) => prev + curr, 0);
        const practicas = values.map(value => value.practicas).reduce((prev, curr) => prev + curr, 0);
        const observaciones = values.map(value => value.observaciones).reduce((prev, curr) => prev + curr, 0);

        setInfo({ //Enviar estado de la información
            materias: materiasForm,
            mRestantes: materiasForm - materias,
            mAsignadas: asignadas,
            practicas: practicas,
            faltantes: faltantes,
            observaciones: observaciones
        });
    }


    const columnsInitialState = () => { //Función para enviar el estado ininial de las columnas
        setColumns(initialStateColumns);
        setColumnsBefore(columns)
    }
    const columnsBeforeToEdit = () => { //Función para enviar el estado de las columnas antes de editar
        setColumns(columnsBefore)
    }

    return {
        columns, setColumns,

        data, dispatch,
        data2, dispatch2,
        data3, dispatch3,

        handleDeleteTodo, handleAddTodo, handleEditTodo,
        handleDeleteTodo2, handleAddTodo2, handleEditTodo2,
        handleDeleteTodo3, handleAddTodo3, handleEditTodo3,

        columnsInitialState,
        columnsBeforeToEdit,
        info
    }
}
