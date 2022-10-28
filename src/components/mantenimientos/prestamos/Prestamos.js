import React from 'react'
import { useTable } from 'react-table'
import { useFetch } from '../../../hooks/useFetch'
import { BrTableMostrar } from '../../common/base/BrTableMostrar'

export const Prestamos = () => {
    const [response] = useFetch('/prestamos/todos')
    const columns = [
        {
            Header: '#',
            accessor: 'prestamo_id',
        },
        {
            Header: 'Cantidad',
            accessor: 'cantidad',
        },
        {
            Header: 'Cliente',
            accessor: 'nombre_cliente',
        },
        {
            Header: 'Prestamista',
            accessor: 'prestamista',
        },
        {
            Header: 'Cuotas',
            accessor: 'cuotas',
        },
        {
            Header: 'Interes',
            accessor: 'interes',
        },
    ]
    return (
        <div className="row p-1 w-100">
            <div className="col-12 p-4">
                <div className="card">
                    <h3 className="card-header">Préstamos</h3>
                    <div className="card-body">
                        <BrTableMostrar columns={columns} data={response.data} identificador="prestamo_id" />
                    </div>
                </div>
            </div>
        </div>
    )
}
