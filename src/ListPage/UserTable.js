import React from 'react'
// import { UserRow } from './UserRow';

export const UserTable = ({ data, columns }) => {
    return (
        <table>
            <tbody>
                <tr className='headerTable'>
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
                        <tr key={user[1]}>
                            {columns.number ? <th>{counter + 1}</th> : ''}
                            {columns.grado ? <th>{user[0]}</th> : ''}
                            {columns.clave ? <th>{user[1]}</th> : ''}
                            {columns.profesor ? <th>{user[2]}</th> : ''}
                            {columns.tipo ? <th>{user[3]}</th> : ''}
                            {columns.nivel ? <th>{user[4]}</th> : ''}
                            {columns.materias ? <th>{user[5]}</th> : ''}
                            {columns.asignadas ? <th>{user[6]}</th> : ''}
                            {columns.faltantes ? <th>{user[7]}</th> : ''}
                            {columns.practicas ? <th>{user[8]}</th> : ''}
                            {columns.observaciones ? <th>{user[9]}</th> : ''}
                        </tr>
                        // <UserRow
                        //     user={{
                        //         number: (counter + 1),
                        //         grado: user[0],
                        //         clave: user[1],
                        //         profesor: user[2],
                        //         tipo: user[3],
                        //         nivel: user[4],
                        //         materias: user[5],
                        //         asignadas: user[6],
                        //         faltantes: user[7],
                        //         practicas: user[8],
                        //         observaciones: user[9]
                        //     }}
                        //     key={user[1]}
                        // />
                    )
                })}
            </tbody>
        </table>
    )
}
