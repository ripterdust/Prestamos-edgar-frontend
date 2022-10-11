import React from 'react'
import { Link } from 'react-router-dom'

export const Nav = () => {
    return (
        <nav>
            <div className="strt">
                <div id="menu">
                    <i class="fa-solid fa-bars"></i>
                </div>
                <Link to={'/'}>Logo de la empresa</Link>
            </div>
            <div id="usr">
                <i class="fa-solid fa-user"></i>
            </div>
        </nav>
    )
}
