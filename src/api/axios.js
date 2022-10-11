import axios from 'axios'

export const api = axios.create({
    baseURL: 'http://localhost:8000',
})

api.interceptors.response.use(undefined, ({ response }) => {
    let error = 'Error desconocido en el servidor'
    if (response) error = response.data.message
    console.log(response)
    alert(error)
    return { status: 400, data: 'data' }
})
