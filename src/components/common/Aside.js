import React from 'react'
import { Link } from 'react-router-dom'
import { objetoToArray } from '../../helpers/objectoToArray'
import { useFetch } from '../../hooks/useFetch'
import { categorias, rutas } from '../../router/rutas'
export const Aside = () => {
    const [data] = useFetch('/opcionesMenu/obtenerOpciones')
    let listaOpciones = []
    if (data.data) {
        listaOpciones = objetoToArray(data.data, 'nombre')
        console.log(listaOpciones)
    }
    const rutasPersonas = rutas.filter(({ categoria, nombre }) => {
        console.log(categoria, nombre)
        return categoria === categorias.personas && listaOpciones.includes(nombre.toLowerCase())
    })

    const rutasConfiguracion = rutas.filter(({ categoria, nombre }) => {
        return categoria === categorias.configuracion && listaOpciones.includes(nombre.toLowerCase())
    })
    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            <Link to="/" className="brand-link">
                <span className="brand-text font-weight-light">Corpodine S.A</span>
            </Link>
            <div className="sidebar">
                <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                        <li className="nav-header">Inicio</li>
                        <li className="nav-item">
                            <Link className="nav-link" to="Inicio">
                                <i className="nav-icon fas fa-solid fa-house"></i>
                                <p>Inicio</p>
                            </Link>
                        </li>
                        {rutasPersonas.length ? <li className="nav-header">Personas</li> : ''}
                        {rutasPersonas.map(({ nombre, endpoint, icono }) => (
                            <li className="nav-item">
                                <Link className="nav-link" to={endpoint}>
                                    <i className={`nav-icon ${icono}`}></i>
                                    <p>{nombre}</p>
                                </Link>
                            </li>
                        ))}
                        {rutasConfiguracion.length ? <li className="nav-header">Configuracion</li> : ''}

                        {rutasConfiguracion.map(({ nombre, endpoint, icono }) => (
                            <li className="nav-item">
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
