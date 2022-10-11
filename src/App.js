import React, { createContext } from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { Login } from './components/seguridad/Login'
import { Registro } from './components/seguridad/Registro'
import { Error } from './components/common/Error'
import { TokenContext } from './hooks/useContextUser'

// Styles
import './css/styles.css'

export const App = () => {
    return (
        <TokenContext.Provider value={null}>
            <BrowserRouter>
                <Routes>
                    {}
                    <Route exact path="/login" element={<Login />} />
                    <Route path="/registro" element={<Registro />} />
                    <Route exact path="/">
                        Esto es el inicio, neni
                    </Route>
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
                <Error />
            </BrowserRouter>
        </TokenContext.Provider>
    )
}
