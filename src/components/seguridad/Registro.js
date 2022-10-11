import React from 'react'

export const Registro = () => {
    return (
        <form className="frm_usr">
            <input type="text" placeholder="Nombre completo" />
            <input type="email" placeholder="Correo electrónico" />
            <input type="password" name="password" placeholder="Contraseña" />
            <input type="password" name="validate_password" placeholder="Validar contraseña" />
            <input type="submit" value="Registrarme" />
        </form>
    )
}
