import React, { useContext } from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { Login } from './../components/seguridad/Login'
import { Registro } from './../components/seguridad/Registro'
import { Error } from './../components/common/Error'
import { TokenContext } from '../hooks/useContextUser'
import { Index } from '../components/mantenimientos/Index'
import { Nav } from '../components/common/Nav'
import { Aside } from '../components/common/Aside'
import { Usuarios } from '../components/mantenimientos/usuarios/Usuarios'
import { Footer } from '../components/common/Footer'

export const MainRouter = () => {
    const { context } = useContext(TokenContext)

    return (
        <BrowserRouter>
            {context && <Nav />}
            {context && <Aside />}
            <div className={context && 'content-wrapper'}>
                <Routes>
                    {!context ? (
                        <React.Fragment>
                            <Route exact path="/" element={<Login />} />
                            <Route path="/registro" element={<Registro />} />
                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                            <Route exact path="/" element={<Index />}></Route>
                            <Route path="/usuarios" element={<Usuarios />} />
                        </React.Fragment>
                    )}
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </div>
            {context && <Footer />}
            <Error />
        </BrowserRouter>
    )
}
