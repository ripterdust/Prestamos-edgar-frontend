import React from 'react'
import { api } from '../../api/axios'

export const Registro = () => {
    const handleForm = async (e) => {
        e.preventDefault()
        api.post('usuario/registrar')
    }
    return (
        <form className="frm_usr" onSubmit={handleForm}>
            <div className="title">Registrarse</div>
            <div className="inputs">
                <div className="frm-ctl">
                    <i class="fa-solid fa-user"></i>
                    <input type="text" placeholder="Nombre completo" />
                </div>
                <div className="frm-ctl">
                    <i class="fa-solid fa-envelope"></i>
                    <input type="email" placeholder="Correo electrónico" />
                </div>
                <div className="frm-ctl">
                    <i class="fa-solid fa-lock"></i>
                    <input type="password" name="password" placeholder="Contraseña" />
                </div>
                <div className="frm-ctl">
                    <i class="fa-solid fa-lock"></i>
                    <input type="password" name="validate_password" placeholder="Validar contraseña" />
                </div>
                <input type="submit" value="Registrarme" className="btn" />
            </div>
        </form>
    )
}
