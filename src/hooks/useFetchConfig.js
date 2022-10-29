import { useContext } from 'react'
import { TokenContext } from './useContextUser'

export const useFetchConfig = () => {
    const { context } = useContext(TokenContext)
    return {
        headers: {
            Authorization: 'Bearer ' + context,
        },
    }
}
