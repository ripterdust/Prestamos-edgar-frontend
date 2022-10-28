import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../../../hooks/useFetch'
import { TablaCuotas } from './TablaCuotas'

export const Cuotas = () => {
    const { id } = useParams()
    const [response] = useFetch(`/cuotas/prestamo/${id}`)

    return (
        <div className="row p-1 w-100">
            <div className="col-12 p-4">
                <div className="card">
                    <h3 className="card-header">Cuotas</h3>
                    <div className="card-body">
                        <TablaCuotas />
                    </div>
                </div>
            </div>
        </div>
    )
}
