import axios from 'axios'
import { mostrarError } from '../helpers/mostrarError'

export const api = axios.create({
    baseURL: 'http://localhost:8000',
})

api.interceptors.response.use(undefined, ({ response }) => {
    let error = 'Error desconocido en el servidor'
    if (response) error = response.data.message

    // MOstrando batch
    mostrarError(error)
    return { status: response.status, data: [] }
})
