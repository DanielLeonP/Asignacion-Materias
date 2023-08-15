import React, { useState, useEffect } from "react";

export const FloatingNotification = ({ customTitle, customText, customButtons, notificacion, changeNotificacion, changeEstado }) => {
    const [activado, setActivando] = useState(false)

    useEffect(() => {
        notificacion ? setActivando(notificacion) : setActivando(false)
    }, [notificacion])

    const seleccionAceptar = () => {
        setActivando(false);
        changeNotificacion(false);
        changeEstado(true);
    }

    const seleccionCancelar = () => {
        setActivando(false);
        changeNotificacion(false);
        if(customButtons){
            changeEstado(false);
        }
    }

    return(
        <div className="floatingDiv" style={{display: activado ? "grid" : "none"}}>
            <div className="notification">
                <label className="notificationTitle">{customTitle}</label>
                <label className="notificationText">{customText}</label>
                <div className="notificacionBotones">
                    {customButtons ? <><button className="notificacionBtn btnAceptar" onClick={seleccionAceptar}>Aceptar</button><button className="notificacionBtn btnCancelar" onClick={seleccionCancelar}>Cancelar</button></> : <button className="notificacionBtn btnAceptar" onClick={seleccionCancelar}>Okay</button>}
                </div>
            </div>
        </div>
    );
}
