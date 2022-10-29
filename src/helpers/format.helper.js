import { getUsrLang } from './monitor.helper'

export const formatDate = (date) =>
    new Date(date).toLocaleDateString(getUsrLang(), {
        year: 'numeric',
        day: 'numeric',
        month: 'long',
    })
