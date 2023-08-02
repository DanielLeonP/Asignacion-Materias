import { useReducer, useState, useEffect } from 'react'
import { todoReducer } from '../helpers/todoReducer';

const init = () => {
    return JSON.parse(localStorage.getItem('data')) || [];
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
    observaciones: true
}

export const ListHook = () => {
    const [columns, setColumns] = useState(initialStateColumns);
    const [columnsBefore, setColumnsBefore] = useState(columns);
    const [data, dispatch] = useReducer(todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem('data', JSON.stringify(data));
    }, [data])


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
        handleAddTodo,
        handleDeleteTodo,
        handleEditTodo,
        columnsInitialState,
        columnsBeforeToEdit
    }
}
