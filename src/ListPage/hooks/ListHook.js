import { useReducer, useState, useEffect } from 'react'
import { todoReducer } from '../helpers/todoReducer';

// TEMPORAL PARA PROBAR FUNCIONES
const dataTest = [['DR.', 4658, 'ACUÑA GARCIA JOSE ALFREDO', 'PTC', 'LICENCIATURA', 7, 0, 0, 0, 'Prueba de observación'],
['DR.', 12115, 'AGUIRRE CARACHEO EDUARDO', 'PTC', 'LICENCIATURA', 4, 0, 0, 0, ''],
['MSI.', 6746, 'ARREGUIN RICO SANDRA PATRICIA', 'PTC', 'LICENCIATURA', 3, 0, 3, 1, ''],
['DRA.', 10267, 'CANCHOLA MAGDALENO SANDRA LUZ', 'PTC', 'LICENCIATURA', 4, 0, 4, 0, ''],
['DR.', 4824, 'CHAPARRO SANCHEZ RICARDO', 'PTC', 'LICENCIATURA', 3, 0, 3, 0, ''],
['DR.', 3604, 'CHAVEZ MORALES UBALDO', 'PTC', 'LICENCIATURA', 4, 0, 4, 0, ''],
];
const init = () => {
    localStorage.setItem('data', JSON.stringify(dataTest));
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

    // Datos 

    const [info, setInfo] = useState({
        materias: 0,
        mRestantes: 0,
        mProfesores: 0,
        practicas: 0,
        observaciones: 0
    });

    useEffect(() => {
        // console.log('ENTRA ----------------s--')
        // console.log(data)
        updateInfo();
        localStorage.setItem('data', JSON.stringify(data));
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
        columnsBeforeToEdit,
        info
    }
}
