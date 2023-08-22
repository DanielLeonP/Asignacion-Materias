import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';
import { findUser, getAllUsers } from './database/UserDB';
import { FloatingNotification } from './components/FloatingNotification';
import './styles/GlobalStyles.css'

export const LoginPage = () => {
  const [notificacion, setNotificacion] = useState(false);
  // const [estado, setEstado] = useState(false);

  const [usuarios, setUsuarios] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getAllUsers();
      setUsuarios(users);
    };
    fetchUsers();
  }, []);

  const { login } = useContext(AuthContext);

  const navigate = useNavigate();
  const [validando, setValidando] = useState(false);
  const [clave, setClave] = useState("");
  const [contrasena, setContrasena] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); // Evita que la página se recargue al enviar el formulario
    const user = findUser(usuarios, clave, contrasena)
    if (user !== null) {
      setValidando(true);

      const lastPath = localStorage.getItem('lastPath') || '/';
      login(user.username);
      // console.log(lastPath)
      if (lastPath === '/users') {
        navigate('/list', { replace: true });
        return;
      }
      navigate(lastPath, { replace: true });
      setValidando(false);
      return;
    }
    setNotificacion(true);
  }

  const handleClaveChange = (event) => {
    setClave(event.target.value);
  };

  const handleContrasenaChange = (event) => {
    setContrasena(event.target.value);
  };

  const handleNotificacionChange = (activacion) => {
    setNotificacion(activacion)
  };

  return (
    <>
      <FloatingNotification customTitle="Datos de Acceso Invalidos" customText="La contraseña, el usuario o el correo son incorrectos, ingresa nuevamente" customButtons={false} notificacion={notificacion} changeNotificacion={handleNotificacionChange} />

      <div>
        <div className='carga' style={validando ? { display: "grid" } : { display: "none" }}>
          <div className="three-body">
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
          </div>
          <label className="carga-texto">Ingresando...</label>
        </div>
        <form className="container" onSubmit={handleSubmit}>
          <h1 className='title'>¡Bienvenido!</h1>
          <label className='input-title' for="clave">Usuario</label>
          <input className='input-login' type='text' placeholder='Usuario' required value={clave} onChange={handleClaveChange} id="clave"></input>
          <label className='input-title' for="password">Contraseña</label>
          <input className='input-login' type='password' placeholder='Contraseña' required value={contrasena} onChange={handleContrasenaChange} id="password"></input>
          <input type="submit" value="Ingresar"></input>
        </form>
      </div>
    </>
  )
}
