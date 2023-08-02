import React, { useState } from 'react'
export const RowTable = ({ color, columns, user, counter, onDeleteTodo, onEditTodo, columnsInitialState, columnsBeforeToEdit }) => {
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
            userDataEdit.clave,
            userDataEdit.profesor,
            userDataEdit.tipo,
            userDataEdit.nivel,
            userDataEdit.materias,
            userDataEdit.asignadas,
            userDataEdit.faltantes,
            userDataEdit.practicas,
            userDataEdit.observaciones
        ]);
        setUserData(userDataEdit)
        seteditable(!editable);
        columnsBeforeToEdit();
    }
    // console.log(userDataEdit)
    const editCancel = () => {
        seteditable(!editable);
        columnsBeforeToEdit();
    }
    if (!editable) {
        return (
            <tr>
                {columns.number ? <th className='editRowTable'>{counter + 1}</th> : ''}
                {columns.grado ? <th className='editRowTable'><input name={'grado'} className='editRow' onChange={onInputChange} defaultValue={userData.grado} ></input></th> : ''}
                {columns.clave ? <th className='editRowTable'><input type='number' name={'clave'} className='editRow' onChange={onInputChange} defaultValue={userData.clave} ></input></th> : ''}
                {columns.profesor ? <th className='editRowTable'><input name={'profesor'} className='editRow' onChange={onInputChange} defaultValue={userData.profesor} ></input></th> : ''}
                {columns.tipo ? <th clasFsName='editRowTable'><input name={'tipo'} className='editRow' onChange={onInputChange} defaultValue={userData.tipo} ></input></th> : ''}
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
        <tr>
            {columns.number ? <th>{counter + 1}</th> : ''}
            {columns.grado ? <th>{userData.grado}</th> : ''}
            {columns.clave ? <th>{userData.clave}</th> : ''}
            {columns.profesor ? <th>{userData.profesor}</th> : ''}
            {columns.tipo ? <th>{userData.tipo}</th> : ''}
            {columns.nivel ? <th>{userData.nivel}</th> : ''}
            {columns.materias ? <th>{userData.materias}</th> : ''}
            {columns.asignadas ? <th>{userData.asignadas}</th> : ''}
            {columns.faltantes ? <th>{userData.faltantes}</th> : ''}
            {columns.practicas ? <th>{userData.practicas}</th> : ''}
            {columns.observaciones ? <th>{userData.observaciones}</th> : ''}
            < th className='noBackgroundColor' >
                <a className='selectIcon'
                    onClick={() => {
                        seteditable(!editable);
                        columnsInitialState();//Poner todas las columnas visibles para poder editar
                    }}
                >
                    <img src='../images/icons/editar.png' className='icon' />
                </a>
                <a className='selectIcon'
                    onClick={() => onDeleteTodo(userData.clave)}
                >
                    <img src='../images/icons/borrar.png' className='icon' />
                </a>
            </th >
        </tr >
    )
}
