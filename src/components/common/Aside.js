import React from 'react'
import { Link } from 'react-router-dom'
export const Aside = () => {
    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            <Link to="/" className="brand-link">
                <span className="brand-text font-weight-light">Corpodine S.A</span>
            </Link>
            <div className="sidebar">
                <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                        <li className="nav-header">Personas</li>

                        <li className="nav-item">
                            <Link className="nav-link" to="usuarios">
                                <i className="nav-icon fas fa-solid fa-user-tie"></i>
                                <p>Usuarios</p>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="clientes">
                                <i className="nav-icon fas fa-solid fa-user"></i>
                                <p>Clientes</p>
                            </Link>
                        </li>
                        <li className="nav-header">Configuración</li>
                        <li className="nav-item">
                            <Link className="nav-link" to="roles">
                                <i className="nav-icon fa-solid fa-people-arrows"></i>
                                <p>Roles</p>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="opcionesMenu">
                                <i className="nav-icon fa-solid fa-sliders"></i>
                                <p>Opciones de menú</p>
                            </Link>
                        </li>
                        <li className="nav-item ">
                            <Link className="nav-link ">
                                <i className="nav-icon fas fa-regular fa-gear" />
                                <p>Gestion</p>
                            </Link>
                            <ul className="nav nav-treeview">
                                <li className="nav-item">
                                    <Link className="nav-link" to={'/configuracion'}>
                                        <i className="far fa-circle nav-icon" />
                                        <p>Ajustes</p>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
    )
}
