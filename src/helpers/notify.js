import { toast } from 'react-toastify'
export const notify = (msg = 'Ha ocurrido un error', type = 'error') => {
    if (type === 'error') {
        toast.error(msg)
    } else if (type === 'success') {
        toast.success(msg)
    }
}
