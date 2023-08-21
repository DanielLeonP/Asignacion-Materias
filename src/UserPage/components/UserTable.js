import React, { useState, useEffect } from 'react'
import {
    getAllUsers,
    getUsersByName,
    addUser,
    deleteUser,
    updateUser
  } from "../../database/UserDB";
import '../../ListPage/List.css'

export const UserTable = ({ username, email, password, repeatPassword, insertar, setUsername, setEmail, setPassword, setRepeatPassword, setInsertar, handleNotificacionChange, handleNotificacionChange2, handleNotificacionChange3, handleNotificacionChange4, handleNotificacionChange5 }) => {
    const [usuarios, setUsuarios] = useState([]);

    const handleDeleteUser = async (userId) => {
        await deleteUser(userId);
        const updatedUsers = usuarios.filter((user) => user.id !== userId);
        setUsuarios(updatedUsers);
      };

    const handleAddUser = async (username2, email2, password2, repeatPassword2) => {
        const patronCorreo = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        const repetidoUsername = usuarios.some( usuario => {
            return usuario.username === username2;
        })
        const repetidoEmail = usuarios.some( usuario => {
            return usuario.email === email2;
        })

        if (!(username2 && email2 && password2 && repeatPassword2)){
            handleNotificacionChange(true)
            return;
        }
        if (!(repeatPassword2 == password2)){
            handleNotificacionChange5(true)
            return;
        }
        if (!(patronCorreo.test(email2))){
            handleNotificacionChange4(true)
            return;
        }
        if (repetidoUsername){
            handleNotificacionChange2(true)
            return;
        }
        if (repetidoEmail){
            handleNotificacionChange3(true)
            return;
        }

        const nuevoUsuario = {
          username: username2,
          email: email2,
          password: password2,
        };
    
        await addUser(nuevoUsuario);
        setUsuarios([...usuarios, nuevoUsuario]);
        setEmail("");
        setUsername("");
        setPassword("");
        setRepeatPassword("");
    };

    useEffect(() => {
        const fetchUsers = async () => {
          const users = await getAllUsers();
          setUsuarios(users);
        };
        fetchUsers();
        if(insertar){
            handleAddUser(username, email, password, repeatPassword)
            setInsertar(false)
        }
    }, [username, email, password, repeatPassword, insertar]);

    const userRows = usuarios.map( usuario => {
        return(
            <tr key={usuario.id} className='blue'>
                <th className='extra'>{usuario.id}</th>
                <th className='extra'>{usuario.username}</th>
                <th className='extra'>{usuario.email}</th>
                <th className='noBackgroundColor' >
                    <a className='selectIcon'
                        onClick={() => handleDeleteUser(usuario.id)}
                    >
                        <img src='../images/icons/borrar.png' className='icon' />
                    </a>
                </th >
            </tr>
        )
    })

    return (
        <div className='divTable'>
            <table>
                <tbody>
                    <tr className='headerTable extra' key={0}>
                        <th className='extra'>ID</th>
                        <th className='extra'>Nombre</th>
                        <th className='extra'>Correo Electronico</th>
                    </tr>
                    {userRows}
                </tbody>
            </table>
        </div>
    )
  }
  