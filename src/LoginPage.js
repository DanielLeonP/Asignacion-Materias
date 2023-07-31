import React, { useState, useEffect } from 'react';
import './styles/GlobalStyles.css'

export const LoginPage = () => {
  const [validando, setValidando] = useState(false);
  const [clave, setClave] = useState("");
  const [contrasena, setContrasena] = useState("");
  
  const handleSubmit = (event) => {
    event.preventDefault(); // Evita que la página se recargue al enviar el formulario
    setValidando(true);
  }

  const handleClaveChange = (event) => {
    setClave(event.target.value);
  };

  const handleContrasenaChange = (event) => {
    setContrasena(event.target.value);
  };

  return (
    <div>
      <div className='carga' style={ validando ? { display: "grid"} : {display: "none"}}>
        <div className="three-body">
          <div className="three-body__dot"></div>
          <div className="three-body__dot"></div>
          <div className="three-body__dot"></div>
        </div>
        <label className="carga-texto">Ingresando...</label>
      </div>
      <form className="container" onSubmit={handleSubmit}>
        <h1 className='title'>¡Bienvenido!</h1>
        <label className='input-title'>Clave</label>
        <input type='text' placeholder='Clave' required value={clave} onChange={handleClaveChange}></input>
        <label className='input-title'>Contraseña</label>
        <input type='password' placeholder='Contraseña' required value={contrasena} onChange={handleContrasenaChange}></input>
        <input type="submit" value="Ingresar"></input>
      </form>
    </div>
  )
}
