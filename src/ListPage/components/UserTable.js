import React from 'react'

import { RowTable } from './RowTable'

export const UserTable = ({ data, columns, onDeleteTodo, onEditTodo, columnsInitialState, columnsBeforeToEdit, colorTitle, color, changeNotificacion2, changeEstado2, estado2, changeNotificacion3, changeEstado3, estado3, changeNotificacion4, changeEstado4, estado4 }) => {
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

                                changeNotificacion2={changeNotificacion2}
                                changeEstado2={changeEstado2}
                                estado2={estado2}

                                changeNotificacion3={changeNotificacion3}
                                changeEstado3={changeEstado3}
                                estado3={estado3}

                                changeNotificacion4={changeNotificacion4}
                                changeEstado4={changeEstado4}
                                estado4={estado4}
                            />
                        )
                    })}
                </tbody>
            </table >
        </div>

    )
}
