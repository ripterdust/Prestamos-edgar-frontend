import React from 'react'
import { Route, Navigate } from 'react-router-dom'

export const RouteGuard = () => {
    const hasJWT = () => {
        return localStorage.getItem('token') ? true : false
    }
    return (
        <Route
            {...rest}
            element={(props) => {
                hasJWT() ? <Component {...props} /> : <Route element={<Navigate to="/login" />} />
            }}
        />
    )
}
