import { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { useState } from 'react';

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
  const returnToMain = () => {
    if (
      localStorage.getItem('materias') === null &&
      localStorage.getItem('DataTC') === null &&
      localStorage.getItem('DataTL') === null &&
      localStorage.getItem('DataH') === null
    ) {
      navigate('/form', { replace: true });
    } else {
      navigate('/list', { replace: true });
    }
  }
  const { pathname } = useLocation();
  console.log(pathname)

  return (
    <div className="dropdown">
      <button className="dropdown-button" >Bienvenido {user.name}</button>
      <ul className="dropdown-content">
        {
          pathname !== '/form' && pathname !== '/list'
            ? <li onClick={returnToMain}>Página Principal</li>
            : ''
        }
        {
          pathname !== '/users'
            ? <li onClick={adminUsers}>Administrar Usuarios</li>
            : ''
        }

        <li className='liLogout' onClick={onLogout}>Cerrar Sesión</li>
      </ul>
    </div>
  )
}
