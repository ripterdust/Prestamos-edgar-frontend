import { useContext, useEffect, useState } from 'react'
import { api } from '../api/axios'
import { notify } from '../helpers/notify'
import { TokenContext } from './useContextUser'

export const useFetch = (url) => {
    const { context, setContext } = useContext(TokenContext)
    const [state, setState] = useState({
        data: [],
    })
    const [change, setChange] = useState(false)
    useEffect(() => {
        api.get(url, {
            headers: {
                Authorization: 'Bearer ' + context,
            },
        })
            .then((res) => {
                if (res.status === 403) {
                    setContext(null)
                    return localStorage.removeItem('token')
                }

                setState(res.data)
            })
            .catch((err) => {
                notify(err)
            })
    }, [change])

    return [state, setChange]
}
