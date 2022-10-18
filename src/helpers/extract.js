export const extraerTotalRegistros = (data) => {
    const res = data.data ? (data.data[0] ? data.data[0].totalRegistros : 0) : 0

    return res
}
