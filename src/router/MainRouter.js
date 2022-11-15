import React, { useContext } from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { Login } from './../components/seguridad/Login'
import { Registro } from './../components/seguridad/Registro'
import { Error } from './../components/common/Error'
import { TokenContext } from '../hooks/useContextUser'
import { Nav } from '../components/common/Nav'
import { Aside } from '../components/common/Aside'
import { Footer } from '../components/common/Footer'
import { useFetch } from '../hooks/useFetch'
import { objetoToArray } from '../helpers/objectoToArray'
import { rutas } from './rutas'
import { Dashboard } from '../components/mantenimientos/Dashboard'
import { Cuotas } from '../components/mantenimientos/cuotas/Cuotas'
import { NuevoPrestamo } from '../components/mantenimientos/prestamos/NuevoPrestamo'
import { Caja } from '../components/mantenimientos/caja/Caja'
import { Logs } from '../components/mantenimientos/logs/Logs'

export const MainRouter = () => {
    const { context } = useContext(TokenContext)
    let data = []
    if (context) {
        const [res] = useFetch('/opcionesMenu/obtenerOpciones')
        data = res
    }
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
                            <Route exact path="/" element={<Dashboard />}></Route>
                            {rutasAccesibles.map(({ Componente, endpoint }, i) => {
                                return <Route path={endpoint} element={<Componente />} key={i} />
                            })}
                            <Route path="/logsPrueba" element={<Logs />}></Route>
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
