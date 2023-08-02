import React from 'react'
import { Navigate, Route, Routes, Link } from 'react-router-dom'
import { ListPage } from './ListPage/ListPage'
import { FormPage } from './FormPage/FormPage'
import { LoginPage } from './LoginPage'

export const MainApp = () => {
    return (
        <>

            {/* <h1>Main App</h1>
            <hr />

            <Link to="/login">LoginPage</Link>
            <br/>
            <Link to="/form">FormPage</Link>
            <br/>
            <Link to="/list">ListPage</Link>

            <hr /> */}

            <Routes>
                <Route path="/login" element={<LoginPage />} />            
                <Route path="/form" element={<FormPage />} />
                <Route path="/list" element={<ListPage />} />
                <Route path="/*" element={<Navigate to="/login" />} />
            </Routes>

            {/* <footer>
                <div className='circulo circulo1'></div>
                <div className='circulo circulo2'></div>
                <div className='circulo circulo3'></div>
                <div className='circulo circulo4'></div>
                <div className='circulo circulo5'></div>
                <div className='circulo circulo6'></div>
                <div className='circulo circulo7'></div>
                <div className='circulo circulo8'></div>
                <div className='circulo circulo9'></div>
            </footer> */}

        </>
    )
}