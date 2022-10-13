export const objetoToArray = (obj, llave) => {
    const lista = obj.map((el) => el[llave].toLowerCase())
    return lista
}
