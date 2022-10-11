export const mostrarError = (error) => {
    const errorBatch = document.querySelector('#error')
    errorBatch.innerHTML = error
    errorBatch.classList.remove('hide')

    setTimeout(() => {
        errorBatch.classList.add('hide')
        errorBatch.innerHTML = ''
    }, 10000)

    errorBatch.addEventListener('click', () => {
        errorBatch.classList.add('hide')
    })
}
