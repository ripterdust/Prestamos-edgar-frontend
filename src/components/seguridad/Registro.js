import React from 'react'
import { api } from '../../api/axios'

export const Registro = () => {
    const handleForm = async (e) => {
        e.preventDefault()
        api.post('usuario/registrar')
    }
    return (
        <form className="frm_usr" onSubmit={handleForm}>
            <input type="text" placeholder="Nombre completo" />
            <input type="email" placeholder="Correo electrónico" />
            <input type="password" name="password" placeholder="Contraseña" />
            <input type="password" name="validate_password" placeholder="Validar contraseña" />
            <input type="submit" value="Registrarme" />
        </form>
    )
}
