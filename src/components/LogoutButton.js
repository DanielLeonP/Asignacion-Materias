import React from 'react'
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export const LogoutButton = () => {

  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);

  const onLogout = () => {
    logout();
    navigate('/login', { replace: true });
  }
  const adminUsers = () => {
    navigate('/users', { replace: true });
  }

  return (
    <div className="dropdown">
      <button className="dropdown-button">Bienvenido {user.name}</button>
      <ul className="dropdown-content">
        <li onClick={adminUsers}>Administrar Usuarios</li>
        <li className='liLogout' onClick={onLogout}>Cerrar Sesión</li>
      </ul>
    </div>
  )
}
