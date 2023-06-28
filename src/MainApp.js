import React from 'react'
import { Navigate, Route, Routes, Link } from 'react-router-dom'
import { ListPage } from './ListPage/ListPage'
import { FormPage } from './FormPage'
import { LoginPage } from './LoginPage'

export const MainApp = () => {
    return (
        <>
            <h1>Main App</h1>
            <hr />

            <Link to="/login">LoginPage</Link>
            <br/>
            <Link to="/form">FormPage</Link>
            <br/>
            <Link to="/list">ListPage</Link>

            <hr />

            <Routes>
                <Route path="/login" element={<LoginPage />} />            
                <Route path="/form" element={<FormPage />} />
                <Route path="/list" element={<ListPage />} />
                <Route path="/*" element={<Navigate to="/login" />} />
            </Routes>

        </>
    )
}