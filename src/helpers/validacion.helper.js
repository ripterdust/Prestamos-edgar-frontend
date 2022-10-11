export const validarEmail = (email) => {
    // eslint-disable-next-line
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    return regex.test(email)
}
