import React, { useState } from 'react'

// Components
import { FloatingNotification } from '../components/FloatingNotification.js'
import { LogoutButton } from '../components/LogoutButton.js'
import { UserTable } from './components/UserTable.js'

export const UserPage = () => {
  const [isOpenAddRow, setIsOpenAddRow] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [insertar, setInsertar] = useState(false);

  const [notificacion, setNotificacion] = useState(false);
  const [notificacion2, setNotificacion2] = useState(false);
  const [notificacion3, setNotificacion3] = useState(false);
  const [notificacion4, setNotificacion4] = useState(false);
  const [notificacion5, setNotificacion5] = useState(false);
  
  const handleNotificacionChange = (activacion) => {
    setNotificacion(activacion)
  }

  const handleNotificacionChange2 = (activacion) => {
    setNotificacion2(activacion)
  }

  const handleNotificacionChange3 = (activacion) => {
    setNotificacion3(activacion)
  }

  const handleNotificacionChange4 = (activacion) => {
    setNotificacion4(activacion)
  }

  const handleNotificacionChange5 = (activacion) => {
    setNotificacion5(activacion)
  }

  const toggleMenuAddRow = () => {
      setIsOpenAddRow(!isOpenAddRow);
  };

  const addRow = () => {
    setInsertar(true);
  }

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRepeatPasswordChange = (event) => {
    setRepeatPassword(event.target.value);
  };

  return (
    <div>
      <LogoutButton />

      <FloatingNotification customTitle="Campos Faltantes" customText="Te faltan campos por rellenar, revisa el formulario." customButtons={false} notificacion={notificacion} changeNotificacion={handleNotificacionChange} />

      <FloatingNotification customTitle="Usuario ya Existente" customText="El usuario que intentas agregar ya existe." customButtons={false} notificacion={notificacion2} changeNotificacion={handleNotificacionChange2} />

      <FloatingNotification customTitle="Correo ya Existente" customText="El correo que intentas agregar ya existe." customButtons={false} notificacion={notificacion3} changeNotificacion={handleNotificacionChange3} />

      <FloatingNotification customTitle="La información no es un Correo" customText="El dato que intentas agregar no es un correo." customButtons={false} notificacion={notificacion4} changeNotificacion={handleNotificacionChange4} />

      <FloatingNotification customTitle="Contraseñas no Coincidentes" customText="Las contraseñas no coinciden." customButtons={false} notificacion={notificacion5} changeNotificacion={handleNotificacionChange5} />

      <form className="container menor">
        <h1 className='title'>Administrar Usuarios</h1>

        <div className='AddRow'>
            <a className='AddRowTitle' onClick={toggleMenuAddRow}>
                <label className="AddRowLabel">Agregar Usuario</label>
                {
                    isOpenAddRow
                        ? <img src='../images/icons/navegarArriba.png' className='browseIcon' />
                        : <img src='../images/icons/navegar.png' className='browseIcon' />
                }

            </a>
            <form className={`collapse ${isOpenAddRow ? 'fieldsAddRow' : ''}`}>
                <div className='fieldProfessor'>
                    <label className='professorLabel'>Nombre de Usuario:</label>
                    <input className='inputRow' value={username} onChange={handleUsernameChange} name="username" id="username" type="text" placeholder="Usuario" required></input>
                </div>
                <div className='fieldProfessor'>
                    <label className='professorLabel'>Correo Electrónico:</label>
                    <input className='inputRow' value={email} onChange={handleEmailChange} name="email" id="email" type="email" placeholder="Correo Electrónico" required></input>
                </div>
                <div className='fieldProfessor'>
                    <label className='professorLabel'>Contraseña:</label>
                    <input className='inputRow' value={password} onChange={handlePasswordChange} name="password" id="password" type="text" placeholder="Contraseña" required></input>
                </div>
                <div className='fieldProfessor'>
                    <label className='professorLabel'>Repetir Contraseña:</label>
                    <input className='inputRow' value={repeatPassword} onChange={handleRepeatPasswordChange} name="password2" id="password2" type="text" placeholder="Repetir Contraseña" required></input>
                </div>
                <div type='submit' className='submit' onClick={addRow}>Agregar</div>
            </form>
        </div>

        <div className='tablas margen'>
          <UserTable username={username} email={email} password={password} repeatPassword={repeatPassword} insertar={insertar} setUsername={setUsername} setEmail={setEmail} setPassword={setPassword} setRepeatPassword={setRepeatPassword} setInsertar={setInsertar} handleNotificacionChange={handleNotificacionChange} handleNotificacionChange2={handleNotificacionChange2} handleNotificacionChange3={handleNotificacionChange3} handleNotificacionChange4={handleNotificacionChange4} handleNotificacionChange5={handleNotificacionChange5} ></UserTable>
        </div>
        
      </form>
    </div>
  )
}
