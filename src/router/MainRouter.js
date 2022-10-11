import React, { useContext } from 'react'
import { BrowserRouter, Route, Routes, Navigate, Router } from 'react-router-dom'
import { Login } from './../components/seguridad/Login'
import { Registro } from './../components/seguridad/Registro'
import { Error } from './../components/common/Error'
import { TokenContext } from '../hooks/useContextUser'
import { Index } from '../components/mantenimientos/Index'

export const MainRouter = () => {
    const { context, setContext } = useContext(TokenContext)

    return (
        <BrowserRouter>
            <Routes>
                {!context ? (
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
