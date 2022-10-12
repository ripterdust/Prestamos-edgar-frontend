import React, { useContext, useState } from 'react'
import { api } from '../../api/axios'
import { notify } from '../../helpers/notify'
import { validarEmail } from '../../helpers/validacion.helper'
import { TokenContext } from '../../hooks/useContextUser'

export const Registro = () => {
    const { setContext } = useContext(TokenContext)
    const [form, setForm] = useState({})

    const handleForm = async (e) => {
        e.preventDefault()
        const { password, validate_password, correo, nombre } = form
        if (password !== validate_password) return notify('Las contraseñas deben de coincidir')
        if (!validarEmail(correo)) return notify('Correo electrónico inválido')

        const response = await api.post('usuario/registrar', {
            password,
            correo,
            nombre,
        })

        if (response.data) {
            if (response.data.token) {
                localStorage.setItem('token', response.data.token)
                setContext(response.data.token)
            }
        }
    }

    const handleInput = ({ target }) => {
        setForm((form) => ({
            ...form,
            [target.name]: target.value,
        }))
    }
    return (
        <form className="frm_usr" onSubmit={handleForm}>
            <div className="title">Registrarse</div>
            <div className="inputs">
                <div className="frm-ctl">
                    <i className="fa-solid fa-user"></i>
                    <input type="text" placeholder="Nombre completo" name="nombre" onChange={handleInput} />
                </div>
                <div className="frm-ctl">
                    <i className="fa-solid fa-envelope"></i>
                    <input type="text" placeholder="Correo electrónico" onChange={handleInput} name="correo" />
                </div>
                <div className="frm-ctl">
                    <i className="fa-solid fa-lock"></i>
                    <input type="password" name="password" placeholder="Contraseña" onChange={handleInput} />
                </div>
                <div className="frm-ctl">
                    <i className="fa-solid fa-lock"></i>
                    <input type="password" name="validate_password" placeholder="Validar contraseña" onChange={handleInput} />
                </div>
                <input type="submit" value="Registrarme" className="btn" />
            </div>
        </form>
    )
}
