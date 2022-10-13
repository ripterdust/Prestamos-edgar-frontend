import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
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
        <div className="login-box">
            <div className="login-logo">
                <h3>Registro</h3>
            </div>
            <div className="card">
                <div className="card-body login-card-body">
                    <p className="login-box-msg">Regístrate para continuar</p>
                    <form onSubmit={handleForm}>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Nombre completo" name="nombre" onChange={handleInput} />
                            <div className="input-group-append">
                                <div className="input-group-text">
                                    <span className="fa-solid fa-user"></span>
                                </div>
                            </div>
                        </div>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Correo electrónico" onChange={handleInput} name="correo" />
                            <div className="input-group-append">
                                <div className="input-group-text">
                                    <span className="fa-solid fa-envelope"></span>
                                </div>
                            </div>
                        </div>
                        <div className="input-group mb-3">
                            <input type="password" name="password" placeholder="Contraseña" className="form-control" onChange={handleInput} />
                            <div className="input-group-append">
                                <div className="input-group-text">
                                    <span className="fa-solid fa-lock"></span>
                                </div>
                            </div>
                        </div>
                        <div className="input-group mb-3">
                            <input
                                type="password"
                                name="validate_password"
                                placeholder="Validar contraseña"
                                className="form-control"
                                onChange={handleInput}
                            />
                            <div className="input-group-append">
                                <div className="input-group-text">
                                    <span className="fa-solid fa-lock"></span>
                                </div>
                            </div>
                        </div>
                        <input type="submit" value="Registrarme" className="btn w-100 btn-success" />
                    </form>
                    <br />
                    <Link to="/">¿Ya tienes una cuenta?</Link>
                </div>
            </div>
        </div>
    )
}
