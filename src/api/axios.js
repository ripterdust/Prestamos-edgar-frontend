import axios from 'axios'
import { notify } from '../helpers/notify'

export const api = axios.create({
    // baseURL: 'https://localhost:8000',
    baseURL: 'https://pr-stamos-production.up.railway.app/',
})

api.interceptors.response.use(undefined, ({ response }) => {
    let error = 'Error desconocido en el servidor'

    if (!response) {
        notify(error)
        return {
            status: 500,
            data: [],
        }
    }
    const { data, status } = response
    if (response) error = data.message
    // MOstrando batch
    notify(error)
    return { status, data: data.message }
})
