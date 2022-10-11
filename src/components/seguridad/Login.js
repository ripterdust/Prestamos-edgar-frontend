import React, { useContext, useState } from 'react'
import { api } from '../../api/axios'
import { validarEmail } from '../../helpers/validacion.helper'
import { TokenContext } from '../../hooks/useContextUser'

export const Login = () => {
    const [user, setUser] = useState({ email: true, pass: true })
    const { setContext } = useContext(TokenContext)

    const handleMail = ({ target }) => {
        setUser((user) => ({
            ...user,
            correo: validarEmail(target.value),
        }))
    }

    const handleForm = async (e) => {
        e.preventDefault()
        const { target } = e
        const { elements } = target
        const [correo, password] = elements
        const { data } = await api.post('/usuario/autenticar', {
            correo: correo.value,
            password: password.value,
        })

        if (data.token) {
            localStorage.setItem('token', data.token)
            setContext(data.token)
        }
    }
    return (
        <form action="" onSubmit={handleForm} className="frm_usr">
            <input type="email" name="correo" id="correo" onChange={handleMail} autoComplete="off" />
            <input type="password" name="password" id="pass" />
            {user.email && user.pass ? <input type="submit" value="Iniciar sesión" /> : <input type="submit" value="Iniciar sesión" disabled />}
        </form>
    )
}
