import React, { useState } from 'react'

import { TokenContext } from './hooks/useContextUser'

// Styles
import './css/styles.css'
import { MainRouter } from './router/MainRouter'

export const App = () => {
    const token = localStorage.token
    const [context, setContext] = useState(token)
    return (
        <TokenContext.Provider value={{ context, setContext }}>
            <MainRouter />
        </TokenContext.Provider>
    )
}
