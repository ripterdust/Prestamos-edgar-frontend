import { getUsrLang } from './monitor.helper'

export const formatDate = (date) =>
    new Date(date).toLocaleDateString(getUsrLang(), {
        year: 'numeric',
        day: 'numeric',
        month: 'long',
    })

export const formatMoney = (quantity, currency) => {
    const formater = new Intl.NumberFormat(getUsrLang(), {
        style: 'currency',
        currency,
    })

    return formater.format(quantity)
}
