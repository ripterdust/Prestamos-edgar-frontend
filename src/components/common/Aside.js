import React from 'react'
import { Link } from 'react-router-dom'
export const Aside = () => {
    return (
        <aside className="aside">
            <Link to="/">
                <i class="fa-solid fa-user"></i> Usuarios
            </Link>
        </aside>
    )
}
