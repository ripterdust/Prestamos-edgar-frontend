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
    }

    return (
        <nav>
            <div className="strt">
                <div id="menu" onClick={handleNav}>
                    <i className="fa-solid fa-bars"></i>
                </div>
                <Link to={'/'}>Logo de la empresa</Link>
            </div>
            <div id="usr" onClick={handleAccount}>
                <i className="fa-solid fa-user"></i>
            </div>

            <div className="account hide">
                <div onClick={logOut}>Cerrar sesión</div>
            </div>
        </nav>
    )
}
