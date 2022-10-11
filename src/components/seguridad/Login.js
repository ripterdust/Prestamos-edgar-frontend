import React, { useState } from 'react'
import { api } from '../../api/axios'

export const Login = () => {
    const [user, setUser] = useState({ email: true, pass: true })

    const handleMail = ({ target }) => {
        const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        if (regex.test(target.value))
            setUser((user) => ({
                ...user,
                email: true,
            }))
        else
            setUser((user) => ({
                ...user,
                email: false,
            }))
    }

    const handleForm = async (e) => {
        e.preventDefault()
        const { target } = e
        console.log(target)
        const { status, data } = await api.post('/usuario/autenticar', {
            mail: 'bryantello2010@hotmail.com',
            password: 'marlyn2010',
        })
        console.log(status, data)
    }
    return (
        <form action="" onSubmit={handleForm} className="frm_usr">
            <input type="email" onChange={handleMail} />
            <input type="password" />
            {user.email && user.pass ? <input type="submit" value="Iniciar sesión" /> : <input type="submit" value="Iniciar sesión" disabled />}
        </form>
    )
}
