import React from 'react'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { Login } from './components/seguridad/Login'
import { Registro } from './components/seguridad/Registro'
import { Error } from './components/common/Error'

// Styles
import './css/styles.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route exact path="/login" element={<Login />} />
                <Route path="/registro" element={<Registro />} />
                <Route exact path="/">
                    Esto es el inicio, neni
                </Route>
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
            <Error />
        </BrowserRouter>
    </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
