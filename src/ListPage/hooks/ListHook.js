import { useReducer, useState, useEffect } from 'react'
import { todoReducer } from '../helpers/todoReducer';

const init = (dataName = 'dataTC') => {
    return JSON.parse(localStorage.getItem(dataName)) || [];
}

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
    observaciones: true,
}
const setLocalStorage = (dataName, data) => {
    localStorage.setItem(dataName, JSON.stringify(data));
}

const createHandleToData = (dispatch) => {
    const handleDeleteTodo = (clave) => {
        dispatch({
            type: '[DATA] Delete Row',
            payload: clave
        });
    }

    const handleAddTodo = (newRow) => {
        dispatch({
            type: '[DATA] Add Row',
            payload: newRow
        });
    }

    const handleEditTodo = (index, newRow) => {
        dispatch({
            type: '[DATA] Edit Row',
            payload: { index, newRow }
        });
    }
    return [handleDeleteTodo, handleAddTodo, handleEditTodo]
}
export const ListHook = () => {
    const materiasForm = 200;// CAMBIAR A POR LO QUE VIENE DEL FORM

    const [columns, setColumns] = useState(initialStateColumns);
    const [columnsBefore, setColumnsBefore] = useState(columns);
    const [data, dispatch] = useReducer(todoReducer, [], () => init('dataTC'));
    const [data2, dispatch2] = useReducer(todoReducer, [], () => init('dataTL'));
    const [data3, dispatch3] = useReducer(todoReducer, [], () => init('dataH'));

    // Data 1
    const [handleDeleteTodo, handleAddTodo, handleEditTodo] = createHandleToData(dispatch);

    // Data 2
    const [handleDeleteTodo2, handleAddTodo2, handleEditTodo2] = createHandleToData(dispatch2);

    // Data 3
    const [handleDeleteTodo3, handleAddTodo3, handleEditTodo3] = createHandleToData(dispatch3);

    const [info, setInfo] = useState({
        materias: 0,
        mRestantes: 0,
        mAsignadas: 0,
        practicas: 0,
        observaciones: 0,
        faltantes: 0
    });

    useEffect(() => {
        updateInfo();
        setLocalStorage('dataTC', data);
        setLocalStorage('dataTL', data2);
        setLocalStorage('dataH', data3);
    }, [data, data2, data3])

    const isNumber = (value) => {
        if (!isNaN(value)) {
            return value;
        }
        return 0;
    }
    const updateInfo = () => {

        const values1 = data.map(item => {
            return { materias: isNumber(item[5]), asignadas: isNumber(item[6]), faltantes: isNumber(item[7]), practicas: isNumber(item[8]), observaciones: item[9] === "" ? 0 : 1 }
        });
        const values2 = data2.map(item => {
            return { materias: isNumber(item[5]), asignadas: isNumber(item[6]), faltantes: isNumber(item[7]), practicas: isNumber(item[8]), observaciones: item[9] === "" ? 0 : 1 }
        });
        const values3 = data3.map(item => {
            return { materias: isNumber(item[5]), asignadas: isNumber(item[6]), faltantes: isNumber(item[7]), practicas: isNumber(item[8]), observaciones: item[9] === "" ? 0 : 1 }
        });

        const values = values1.concat(values2).concat(values3);

        const materias = values.map(value => value.materias).reduce((prev, curr) => prev + curr, 0);
        const asignadas = values.map(value => value.asignadas).reduce((prev, curr) => prev + curr, 0);
        const faltantes = values.map(value => value.faltantes).reduce((prev, curr) => prev + curr, 0);
        const practicas = values.map(value => value.practicas).reduce((prev, curr) => prev + curr, 0);
        const observaciones = values.map(value => value.observaciones).reduce((prev, curr) => prev + curr, 0);

        setInfo({
            materias: materiasForm,
            mRestantes: materiasForm - materias,
            mAsignadas: asignadas,
            practicas: practicas,
            faltantes: faltantes,
            observaciones: observaciones
        });
    }


    const columnsInitialState = () => {
        setColumns(initialStateColumns);
        setColumnsBefore(columns)
    }
    const columnsBeforeToEdit = () => {
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
