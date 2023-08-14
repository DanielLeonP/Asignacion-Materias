import React, { useState, useEffect } from 'react'

const allColumnsFalse = (obj) => {
    for (const key in obj) {
        if (obj.hasOwnProperty(key) && obj[key]) {
            // console.log('tiene un verdadero')
            return false; // Si se encuentra una propiedad con valor verdadero, retorna falso
        }
    }
    // console.log('todo es falso')
    return true; // Si no se encuentra ninguna propiedad con valor verdadero, retorna verdadero
}

export const RowTable = ({ color, columns, user, counter, onDeleteTodo, onEditTodo, columnsInitialState, columnsBeforeToEdit, changeNotificacion, changeEstado, estado }) => {
    const [editable, seteditable] = useState(true);

    const [userData, setUserData] = useState({
        grado: user[0],
        clave: user[1],
        profesor: user[2],
        tipo: user[3],
        nivel: user[4],
        materias: user[5],
        asignadas: user[6],
        faltantes: user[7],
        practicas: user[8],
        observaciones: user[9]
    });

    const [userDelete, setUserDelete] = useState(0);
    const [userDataEdit, setUserDataEdit] = useState(userData);

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setUserDataEdit({
            ...userDataEdit,
            [name]: value
        })
    }

    const listoButton = () => {
        onEditTodo(counter, [
            userDataEdit.grado,
            parseInt(userDataEdit.clave),
            userDataEdit.profesor,
            userDataEdit.tipo,
            userDataEdit.nivel,
            parseInt(userDataEdit.materias),
            parseInt(userDataEdit.asignadas),
            parseInt(userDataEdit.faltantes),
            parseInt(userDataEdit.practicas),
            userDataEdit.observaciones
        ]);
        setUserData(userDataEdit)
        seteditable(!editable);
        columnsBeforeToEdit();
    }

    const editCancel = () => {
        seteditable(!editable);
        columnsBeforeToEdit();
    }

    const activarNotificacion = (clave) => {
        changeNotificacion(true);
        setUserDelete(clave)
    }

    useEffect(() => {
        function verEstado() {
            if (estado) {
                changeEstado(false)
                changeNotificacion(false)
                onDeleteTodo(userDelete)
                setUserDelete(0)
            } else {
                changeNotificacion(false)
            }
        }
        verEstado()
    }, [estado])

    if (!editable) {
        return (
            <tr>
                {columns.number ? <th className='editRowTable'>{counter + 1}</th> : ''}
                {columns.grado ? <th className='editRowTable'><input name={'grado'} className='editRow' onChange={onInputChange} defaultValue={userData.grado} ></input></th> : ''}
                {columns.clave ? <th className='editRowTable'><input type='number' name={'clave'} className='editRow' onChange={onInputChange} defaultValue={userData.clave} ></input></th> : ''}
                {columns.profesor ? <th className='editRowTable'><input name={'profesor'} className='editRow' onChange={onInputChange} defaultValue={userData.profesor} ></input></th> : ''}
                {columns.tipo ? <th className='editRowTable'><input name={'tipo'} className='editRow' onChange={onInputChange} defaultValue={userData.tipo} ></input></th> : ''}
                {columns.nivel ? <th className='editRowTable'><input name={'nivel'} className='editRow' onChange={onInputChange} defaultValue={userData.nivel} ></input></th> : ''}
                {columns.materias ? <th className='editRowTable'><input type='number' name={'materias'} className='editRow' onChange={onInputChange} defaultValue={userData.materias} ></input></th> : ''}
                {columns.asignadas ? <th className='editRowTable'><input type='number' name={'asignadas'} className='editRow' onChange={onInputChange} defaultValue={userData.asignadas} ></input></th> : ''}
                {columns.faltantes ? <th className='editRowTable'><input type='number' name={'faltantes'} className='editRow' onChange={onInputChange} defaultValue={userData.faltantes} ></input></th> : ''}
                {columns.practicas ? <th className='editRowTable'><input type='number' name={'practicas'} className='editRow' onChange={onInputChange} defaultValue={userData.practicas} ></input></th> : ''}
                {columns.observaciones ? <th className='editRowTable'><input name={'observaciones'} className='editRow' onChange={onInputChange} defaultValue={userData.observaciones} ></input></th> : ''}

                <th className='editRowTable'>
                    <a className='selectIcon'
                        onClick={listoButton}
                    >
                        <img src='../images/icons/listo.png' className='icon' />
                    </a>
                    <a className='selectIcon'
                        onClick={editCancel}
                    >
                        <img src='../images/icons/cancelar.png' className='icon' />
                    </a>
                </th>
            </tr >
        );
    }

    return (
        <tr className={color === 'blue' ? 'blue' : color === 'red' ? 'red' : color === "green" ? "green" : ''}>
            {columns.number ? <th>{counter + 1}</th> : ''}
            {columns.grado ? <th>{userData.grado}</th> : ''}
            {columns.clave ? <th>{userData.clave}</th> : ''}
            {columns.profesor ? <th>{userData.profesor}</th> : ''}
            {columns.tipo ? <th>{userData.tipo}</th> : ''}
            {columns.nivel ? <th>{userData.nivel}</th> : ''}
            {columns.materias ? <th>{userData.materias !== 0 ? userData.materias : ''}</th> : ''}
            {columns.asignadas ? <th>{userData.asignadas !== 0 ? userData.asignadas : ''}</th> : ''}
            {columns.faltantes ? <th>{userData.faltantes !== 0 ? userData.faltantes : ''}</th> : ''}
            {columns.practicas ? <th>{userData.practicas !== 0 ? userData.practicas : ''}</th> : ''}
            {columns.observaciones ? <th>{userData.observaciones !== 0 ? userData.observaciones : ''}</th> : ''}

            {allColumnsFalse(columns)
                ? ''
                : < th className='noBackgroundColor' >
                    <a className='selectIcon'
                        onClick={() => {
                            seteditable(!editable);
                            columnsInitialState(); // Poner todas las columnas visibles para poder editar
                        }}
                    >
                        <img src='../images/icons/editar.png' className='icon' />
                    </a>
                    <a className='selectIcon'
                        onClick={() => activarNotificacion(userData.clave)}
                    >
                        <img src='../images/icons/borrar.png' className='icon' />
                    </a>
                </th >
            }
        </tr >

    )
}
