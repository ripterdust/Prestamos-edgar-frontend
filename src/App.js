import React, { useContext } from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { Login } from './components/seguridad/Login'
import { Registro } from './components/seguridad/Registro'
import { Error } from './components/common/Error'
import { TokenContext } from './hooks/useContextUser'

// Styles
import './css/styles.css'
import { Index } from './components/mantenimientos/Index'

export const App = () => {
    const token = useContext(TokenContext)

    return (
        <BrowserRouter>
            <Routes>
                {!token ? (
                    <React.Fragment>
                        <Route exact path="/" element={<Login />} />
                        <Route path="/registro" element={<Registro />} />
                    </React.Fragment>
                ) : (
                    <>
                        <Route path="/" element={<Index />}></Route>
                    </>
                )}
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>

            <Error />
        </BrowserRouter>
    )
}
