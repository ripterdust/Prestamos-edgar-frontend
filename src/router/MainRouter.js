import React, { useContext } from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { Login } from './../components/seguridad/Login'
import { Registro } from './../components/seguridad/Registro'
import { Error } from './../components/common/Error'
import { TokenContext } from '../hooks/useContextUser'
import { Index } from '../components/mantenimientos/Index'
import { Nav } from '../components/common/Nav'
import { Aside } from '../components/common/Aside'

export const MainRouter = () => {
    const { context } = useContext(TokenContext)

    return (
        <BrowserRouter>
            <div className={context && 'container-logged'}>
                {context && <Nav />}
                <div className="body">
                    {context && <Aside />}
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
                </div>

                <Error />
            </div>
        </BrowserRouter>
    )
}
