import React from 'react'

import { RowTable } from './RowTable'

export const UserTable = ({ data, columns, onDeleteTodo, onEditTodo, columnsInitialState, columnsBeforeToEdit, colorTitle, color, changeNotificacion, changeEstado, estado}) => {
    return (
        <div className='divTable'>
            <table>
                <tbody>
                    <tr className='headerTable' style={{ backgroundColor: color }}>
                        {columns.number ? <th>#</th> : ''}
                        {columns.grado ? <th>Grado</th> : ''}
                        {columns.clave ? <th>Clave</th> : ''}
                        {columns.profesor ? <th>Profesor</th> : ''}
                        {columns.tipo ? <th>Tipo</th> : ''}
                        {columns.nivel ? <th>Nivel</th> : ''}
                        {columns.materias ? <th>Materias</th> : ''}
                        {columns.asignadas ? <th>Asignadas</th> : ''}
                        {columns.faltantes ? <th>Faltantes</th> : ''}
                        {columns.practicas ? <th>Prácticas</th> : ''}
                        {columns.observaciones ? <th>Observaciones</th> : ''}
                    </tr>

                    {data.map((user, counter) => {
                        return (
                            <RowTable
                                color={color}
                                key={`row-${counter}-${user[1]}`}
                                columns={columns}
                                user={user}
                                counter={counter}
                                onDeleteTodo={onDeleteTodo}
                                onEditTodo={onEditTodo}
                                columnsInitialState={columnsInitialState}
                                columnsBeforeToEdit={columnsBeforeToEdit}
                                changeNotificacion={changeNotificacion}
                                changeEstado={changeEstado}
                                estado={estado}
                            />
                        )
                    })}
                </tbody>
            </table >
        </div>

    )
}
