import { useContext, useEffect, useState } from 'react'
import { api } from '../api/axios'
import { mostrarError } from '../helpers/mostrarError'
import { TokenContext } from './useContextUser'

export const useFetch = (url) => {
    const { context, setContext } = useContext(TokenContext)
    const [state, setState] = useState({})

    useEffect(() => {
        api.get(url, {
            headers: {
                Authorization: 'Bearer ' + context,
            },
        })
            .then((res) => {
                if (res.status === 403) {
                    setContext({})
                    return localStorage.removeItem('token')
                }

                setState(res.data)
            })
            .catch((err) => {
                mostrarError(err)
            })
    }, [state])

    return [state, setState]
}
