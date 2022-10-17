import React, { useContext } from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { Login } from './../components/seguridad/Login'
import { Registro } from './../components/seguridad/Registro'
import { Error } from './../components/common/Error'
import { TokenContext } from '../hooks/useContextUser'
import { Index } from '../components/mantenimientos/Index'
import { Nav } from '../components/common/Nav'
import { Aside } from '../components/common/Aside'
import { Footer } from '../components/common/Footer'
import { useFetch } from '../hooks/useFetch'
import { objetoToArray } from '../helpers/objectoToArray'
import { rutas } from './rutas'

export const MainRouter = () => {
    const { context } = useContext(TokenContext)
    const [data] = useFetch('/opcionesMenu/obtenerOpciones')
    let listaOpciones = []
    if (data.data) {
        listaOpciones = objetoToArray(data.data, 'nombre')
    }
    const rutasAccesibles = rutas.filter(({ nombre }) => listaOpciones.includes(nombre.toLocaleLowerCase()))
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
                            {rutasAccesibles.map(({ Componente, endpoint }, i) => {
                                return <Route path={endpoint} element={<Componente />} key={i} />
                            })}
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
