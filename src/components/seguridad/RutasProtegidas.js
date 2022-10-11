import React from 'react'
import { Navigate, Route } from 'react-router-dom'
import { mostrarError } from '../../helpers/mostrarError'

export const RutasProtegidas = ({ redirect = '/', hijo }) => {
    const token = ''
    if (!token) {
        mostrarError('Es necesaria una autenticación para realizar esta acción')
        return <Route element={<Navigate to="/" replace />} />
    }

    return hijo
}
