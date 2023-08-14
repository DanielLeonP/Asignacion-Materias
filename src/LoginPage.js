import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/GlobalStyles.css'
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';

export const LoginPage = () => {

  const { login } = useContext(AuthContext);

  const navigate = useNavigate();
  const [validando, setValidando] = useState(false);
  const [clave, setClave] = useState("");
  const [contrasena, setContrasena] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); // Evita que la página se recargue al enviar el formulario
    setValidando(true);
    
    const lastPath = localStorage.getItem('lastPath') || '/';
    login('Daniel');
    navigate(lastPath, { replace: true });

    setValidando(false);

    // Redirigir a ruta previa guardada

  }

  const handleClaveChange = (event) => {
    setClave(event.target.value);
  };

  const handleContrasenaChange = (event) => {
    setContrasena(event.target.value);
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
      <form className="container" onSubmit={handleSubmit}>
        <h1 className='title'>¡Bienvenido!</h1>
        <label className='input-title' for="clave">Usuario</label>
        <input className='input-login' type='text' placeholder='Usuario' required value={clave} onChange={handleClaveChange} id="clave"></input>
        <label className='input-title' for="password">Contraseña</label>
        <input className='input-login' type='password' placeholder='Contraseña' required value={contrasena} onChange={handleContrasenaChange} id="password"></input>
        <input type="submit" value="Ingresar"></input>
      </form>
    </div>
  )
}
