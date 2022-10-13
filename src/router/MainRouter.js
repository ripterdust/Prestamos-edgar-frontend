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
import { Clientes } from '../components/mantenimientos/clientes/Clientes'
import { Roles } from '../components/mantenimientos/roles/Roles'
import { OpcionesMenu } from '../components/mantenimientos/opcionesMenu/OpcionesMenu'

export const MainRouter = () => {
    const { context } = useContext(TokenContext)

    return (
        <BrowserRouter>
            {context && <Nav />}
            {context && <Aside />}
            <div className={context ? 'content-wrapper' : 'login-page'}>
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
                            <Route path="/clientes" element={<Clientes />} />
                            <Route path="/roles" element={<Roles />} />
                            <Route path="/opcionesMenu" element={<OpcionesMenu />} />
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
