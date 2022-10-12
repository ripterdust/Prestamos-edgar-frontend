import React from 'react'
import { Link } from 'react-router-dom'
export const Aside = () => {
    return (
        <aside className="aside">
            <Link to="/">
                <i className="fa-solid fa-gauge"></i>
                Dashboard
            </Link>
            <Link to="/usuarios">
                <i className="fa-solid fa-user"></i> Usuarios
            </Link>
        </aside>
    )
}
