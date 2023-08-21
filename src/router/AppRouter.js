import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'

import { LoginPage } from '../LoginPage'
import { FormPage } from '../FormPage/FormPage'
import { ListPage } from '../ListPage/ListPage'

import { Register } from '../Register.js'
import { UserPage } from '../UserPage/UserPage'

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path='login'
                    element={
                        <PublicRoute>
                            <LoginPage />
                        </PublicRoute>
                    }
                />
                <Route path='/*'
                    element={
                        <PrivateRoute>
                            <Routes>
                                <Route path="/form" element={<FormPage />} />
                                <Route path="/list" element={<ListPage />} />
                                {/* <Route path="/Register" element={<Register />} /> */}

                                <Route path="/users" element={<UserPage />} />

                                <Route path='/' element={<Navigate to='/form' />} />

                            </Routes>
                        </PrivateRoute>
                    }
                />
            </Routes>
            <footer>
                <div className='circulo circulo1'></div>
                <div className='circulo circulo2'></div>
                <div className='circulo circulo3'></div>
                <div className='circulo circulo4'></div>
                <div className='circulo circulo5'></div>
                <div className='circulo circulo6'></div>
                <div className='circulo circulo7'></div>
                <div className='circulo circulo8'></div>
                <div className='circulo circulo9'></div>
            </footer>
        </>
    )
}
