import React from 'react'
import { Link } from 'react-router-dom'
import { objetoToArray } from '../../helpers/objectoToArray'
import { useFetch } from '../../hooks/useFetch'
import { categorias, rutas } from '../../router/rutas'
import logo from './../../assets/logoBlanco.jpg'
import { InstalarPWA } from './base/InstalarPWA'

export const Aside = () => {
    const [data] = useFetch('/opcionesMenu/obtenerOpciones')
    let listaOpciones = []
    if (data.data) {
        listaOpciones = objetoToArray(data.data, 'nombre')
    }
    const rutasPersonas = rutas.filter(({ categoria, nombre }) => {
        return categoria === categorias.personas && listaOpciones.includes(nombre.toLowerCase())
    })

    const rutasConfiguracion = rutas.filter(({ categoria, nombre }) => {
        return categoria === categorias.configuracion && listaOpciones.includes(nombre.toLowerCase())
    })

    const rutasPrestamos = rutas.filter(({ categoria, nombre }) => {
        return categoria === categorias.prestamos && listaOpciones.includes(nombre.toLocaleLowerCase())
    })

    const rutasGestion = rutas.filter(({ categoria, nombre }) => {
        return categoria === categorias.gestion && listaOpciones.includes(nombre.toLocaleLowerCase())
    })

    console.log(rutasGestion)
    // const install = (e) => {
    //     e.preventDefault()
    //     notify('Función no implementada.')
    // }

    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            <Link to="/" className="brand-link">
                <img
                    src={logo}
                    alt="AdminLTE Logo"
                    className="brand-image elevation-3"
                    style={{
                        opacity: 0.9,
                    }}
                />
                <span className="brand-text font-weight-light">Corpodine S.A</span>
            </Link>
            <div className="sidebar">
                <nav className="mt-2">
                    <ul
                        className="nav nav-pills nav-sidebar flex-column"
                        data-widget="treeview"
                        role="menu"
                        data-accordion="false"
                    >
                        <li className="nav-header">Inicio</li>
                        <li className="nav-item">
                            <Link className="nav-link" to="Inicio">
                                <i className="nav-icon fas fa-solid fa-house"></i>
                                <p>Inicio</p>
                            </Link>
                        </li>

                        <InstalarPWA />
                        {rutasGestion.length ? <li className="nav-header">{categorias.gestion}</li> : ''}
                        {rutasGestion.map(({ nombre, endpoint, icono }) => (
                            <li className="nav-item" key={nombre}>
                                <Link className="nav-link" to={endpoint}>
                                    <i className={`nav-icon ${icono}`}></i>
                                    <p>{nombre}</p>
                                </Link>
                            </li>
                        ))}

                        {rutasPersonas.length ? <li className="nav-header">Personas</li> : ''}
                        {rutasPersonas.map(({ nombre, endpoint, icono }) => (
                            <li className="nav-item" key={nombre}>
                                <Link className="nav-link" to={endpoint}>
                                    <i className={`nav-icon ${icono}`}></i>
                                    <p>{nombre}</p>
                                </Link>
                            </li>
                        ))}
                        {rutasPrestamos.length ? <li className="nav-header">Préstamos</li> : ''}

                        {rutasPrestamos.map(({ nombre, endpoint, icono }) => (
                            <li className="nav-item" key={nombre}>
                                <Link className="nav-link" to={endpoint}>
                                    <i className={`nav-icon ${icono}`}></i>
                                    <p>{nombre}</p>
                                </Link>
                            </li>
                        ))}
                        {rutasConfiguracion.length ? <li className="nav-header">Configuracion</li> : ''}

                        {rutasConfiguracion.map(({ nombre, endpoint, icono }) => (
                            <li className="nav-item" key={nombre}>
                                <Link className="nav-link" to={endpoint}>
                                    <i className={`nav-icon ${icono}`}></i>
                                    <p>{nombre}</p>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </aside>
    )
}
