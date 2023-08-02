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
        mProfesores: 0,
        practicas: 0,
        observaciones: 0
    });

    useEffect(() => {
        updateInfo();
        setLocalStorage('dataTC', data);
        setLocalStorage('dataTL', data2);
        setLocalStorage('dataH', data3);
    }, [data])

    const updateInfo = () => {
        // let materias, mRestantes, mProfesores, practicas, observaciones = 0;

        // data.forEach(user => {
        //     console.log({ user })
        //     materias = materias + parseInt(user[5]);
        // });
        // console.log(materias)
        setInfo({
            materias: 20,
            mRestantes: 20,
            mProfesores: 20,
            practicas: 20,
            observaciones: 20
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
