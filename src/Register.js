import React, { useState, useEffect } from 'react';
import './styles/GlobalStyles.css'
import {
  getAllUsers,
  getUsersByName,
  addUser,
  deleteUser,
  updateUser
} from "./database/UserDB";


export const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");




  const [validando, setValidando] = useState(false);

  // -------------------------------------------------------------


  // SON PRUEBAS, FALTA BIEN LA INTERFAZ PARA DEFINIR COMO ES EL FLUJO QUE SEGUIRIA EL PROFE PARA HACER EL CRUD

  
  const [usuarios, setUsuarios] = useState([]);


  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getAllUsers();
      setUsuarios(users);
    };
    fetchUsers();
  }, []);

  const handleAddUser = async () => {
    if (!username || !email || !password) return;
    const nuevoUsuario = {
      username: username,
      email: email,
      password: password,
    };

    await addUser(nuevoUsuario);
    setUsuarios([...usuarios, nuevoUsuario]);
    setEmail("");
    setUsername("");
    setPassword("");
  };

  const handleDeleteUser = async (userId) => {
    await deleteUser(userId);
    const updatedUsers = usuarios.filter((user) => user.id !== userId);
    setUsuarios(updatedUsers);
  };

  const handleUpdateUser = async (updatedUser) => {
    await updateUser(updatedUser);
    const updatedUsers = usuarios.map((user) =>
      user.id === updatedUser.id ? updatedUser : user
    );
    setUsuarios(updatedUsers);
  };

  const handleSearchByName = async (name) => {
    if (!name) { return };
    const matchingUsers = await getUsersByName(name);
    setUsuarios(matchingUsers);
  };





  // -------------------------------------------------------------

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  return (
    <div>
      <div className='carga' style={validando ? { display: "grid" } : { display: "none" }}>
        <div className="three-body">
          <div className="three-body__dot"></div>
          <div className="three-body__dot"></div>
          <div className="three-body__dot"></div>
        </div>
        <label className="carga-texto">Ingresando...</label>
      </div>
      <form className="container" onSubmit={handleAddUser}>
        {usuarios.map((user) => (
          <li key={user.id}>
            <span>{user.username}</span>
            <span>{user.email}</span>
            <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
          </li>
        ))}
        <h1 className='title'>¡Bienvenido!</h1>
        <label className='input-title' for="Username">Username</label>
        <input className='input-login' type='text' placeholder='Username' required value={username} onChange={handleUsernameChange} id="Username"></input>
        <label className='input-title' for="Email">Email</label>
        <input className='input-login' type='text' placeholder='Email' required value={email} onChange={handleEmailChange} id="Email"></input>
        <label className='input-title' for="password">Contraseña</label>
        <input className='input-login' type='password' placeholder='Contraseña' required value={password} onChange={handlePasswordChange} id="password"></input>
        <input type="submit" value="Ingresar"></input>
      </form>
    </div>
  )
}
