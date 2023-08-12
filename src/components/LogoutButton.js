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

  return (
    <div className='logoutDiv'>
      <div className='welcome'>
        Bienvenido {user.name}
      </div>
      <button className='logout' onClick={onLogout}>Cerrar sesión</button>
    </div>
  )
}
