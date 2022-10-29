import React from 'react'
import { useParams } from 'react-router-dom'
import { notify } from '../../../helpers/notify'
import { useFetch } from '../../../hooks/useFetch'
import { TablaCuotas } from './TablaCuotas'

export const Cuotas = () => {
    const { id } = useParams()
    const [response] = useFetch(`/cuotas/prestamo/${id}`)
    const columns = [
        {
            Header: '#',
            accessor: 'cuota_id',
        },
        {
            Header: 'Número de cuota',
            accessor: 'no_cuota',
        },
        {
            Header: 'Cantidad',
            accessor: 'cantidad',
        },
        {
            Header: 'Pagado',
            accessor: 'pagado',
            booleano: true,
        },
        {
            Header: 'Fecha de pago',
            accessor: 'fecha_pago',
        },
    ]
    return (
        <div className="row p-1 w-100">
            <div className="col-12 p-4">
                <div className="card">
                    <h3 className="card-header">
                        Cuotas
                        <div className="card-tools">
                            <div className="btn btn-success">Descargar cuotas</div>
                        </div>
                    </h3>
                    <div className="card-body">
                        <TablaCuotas columns={columns} data={response.data} />
                    </div>
                </div>
            </div>
        </div>
    )
}
