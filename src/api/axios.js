import axios from 'axios'
import { notify } from '../helpers/notify'

export const api = axios.create({
    baseURL: 'http://192.168.1.137:8000',
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
