import axios from 'axios'
import { notify } from '../helpers/notify'

export const api = axios.create({
    baseURL: 'http://192.168.1.130:8000',
})

api.interceptors.response.use(undefined, ({ response }) => {
    let error = 'Error desconocido en el servidor'
    const { data, status } = response
    if (response) error = data.message
    // MOstrando batch
    notify(error)
    return { status, data: data.message }
})
