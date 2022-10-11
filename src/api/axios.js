import axios from 'axios'

export const api = axios.create({
    baseURL: 'http://localhost:8000',
})

api.interceptors.response.use(undefined, ({ response }) => {
    let error = 'Error desconocido en el servidor'
    if (response) error = response.data.message
    console.log(response)

    // MOstrando batch
    const errorBatch = document.querySelector('#error')
    errorBatch.innerHTML = error
    errorBatch.classList.add('show')

    setTimeout(() => {
        errorBatch.classList.remove('show')
        errorBatch.innerHTML = ''
    }, 5000)

    errorBatch.addEventListener('click', () => {
        errorBatch.classList.remove('show')
    })

    return { status: 400, data: [] }
})
