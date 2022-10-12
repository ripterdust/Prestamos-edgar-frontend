import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { TokenContext } from '../../hooks/useContextUser'

export const Nav = () => {
    const { setContext } = useContext(TokenContext)

    const handleAccount = () => {
        const account = document.querySelector('.account')
        account.classList.toggle('hide')
    }

    const logOut = () => {
        localStorage.removeItem('token')
        setContext(null)
    }

    const handleNav = () => {
        const aside = document.querySelector('.aside')
        aside.classList.toggle('w0')
        handleAccount()
    }

    return (
        <nav className="main-header navbar navbar-expand navbar-white navbar-light">
            {/* Left navbar links */}
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" data-widget="pushmenu" href="#" role="button">
                        <i className="fas fa-bars" />
                    </a>
                </li>
                <li className="nav-item d-none d-sm-inline-block">
                    <Link to="/" className="nav-link">
                        Inicio
                    </Link>
                </li>
            </ul>
            {/* Right navbar links */}
            <ul className="navbar-nav ml-auto">
                {/* Messages Dropdown Menu */}
                <li className="nav-item dropdown">
                    <div className="nav-link" data-toggle="dropdown" href="#">
                        <i className="far fa-circle-user" />
                    </div>
                    <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                        <div onClick={logOut} className="dropdown-item">
                            Cerrar sesión
                        </div>
                        <div className="dropdown-divider" />
                    </div>
                </li>
            </ul>
        </nav>
    )
}
