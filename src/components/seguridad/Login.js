import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { api } from '../../api/axios'
import { validarEmail } from '../../helpers/validacion.helper'
import { TokenContext } from '../../hooks/useContextUser'

export const Login = () => {
    const [setUser] = useState({ email: true, pass: true })
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
        <div className="login-box">
            <div className="login-logo">
                <h3>Nombre empresa</h3>
            </div>
            <div className="card">
                <div className="card-body login-card-body">
                    <p className="login-box-msg">Inicia sesión para continuar</p>
                    <form action="" onSubmit={handleForm}>
                        <div className="input-group mb-3">
                            <input
                                type="email"
                                name="correo"
                                id="correo"
                                placeholder="Correo electrónico"
                                onChange={handleMail}
                                autoComplete="off"
                                className="form-control"
                            />
                            <div className="input-group-append">
                                <div className="input-group-text">
                                    <span className="fa-solid fa-envelope"></span>
                                </div>
                            </div>
                        </div>
                        <div className="input-group mb-3">
                            <input type="password" name="password" id="pass" placeholder="Contraseña" className="form-control" autoComplete="off" />
                            <div className="input-group-append">
                                <div className="input-group-text">
                                    <span className="fa-solid fa-lock"></span>
                                </div>
                            </div>
                        </div>
                        <input type="submit" value="Iniciar sesión" className="btn btn-success w-100" />
                    </form>
                    <br />
                    <Link to="registro" className="">
                        ¿No tienes una cuenta?
                    </Link>
                </div>
            </div>
        </div>
    )
}
