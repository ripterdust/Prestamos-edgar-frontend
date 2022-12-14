import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { TokenContext } from './hooks/useContextUser'
import reportWebVitals from './reportWebVitals'
import { register } from './serviceWorker'

const root = ReactDOM.createRoot(document.getElementById('root'))
const token = localStorage.token

root.render(
    <React.StrictMode>
        <TokenContext.Provider value={token}>
            <App />
        </TokenContext.Provider>
    </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
// Service worker
register()
