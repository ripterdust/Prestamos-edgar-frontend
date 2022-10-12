export const getOptions = ({ message, data }, { id, selector }) => {
    const options = []
    if (data) {
        data.map((el) => {
            const opt = {
                name: el[selector],
                value: el[id],
            }
            options.push(opt)
        })
    }
    return options
}
