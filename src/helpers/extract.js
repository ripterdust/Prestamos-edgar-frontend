export const extraerTotalRegistros = (data) => {
    const res = data.data ? (data.data[0] ? data.data[0].totalRegistros : 0) : 0

    return res
}

export const obtenerFormulario = ({ target }) => {
    const formData = new FormData(target)
    const dataArray = [...formData]
    const data = Object.fromEntries(dataArray)
    return data
}
