import React from 'react'
import { useFetch } from '../../../hooks/useFetch'
import { BrTable } from '../../common/base/BrTable'

export const Clientes = () => {
    const [response, setResponse] = useFetch('/clientes')
    const columns = [
        {
            Header: '#',
            accessor: 'cliente_id',
        },
        {
            Header: 'Nombre',
            accessor: 'nombre',
        },
        {
            Header: 'Correo electrónico',
            accessor: 'correo',
        },
        {
            Header: 'Teléfono',
            accessor: 'telefono',
        },
        {
            Header: 'Prestamista',
            accessor: 'prestamista_id',
        },
    ]
    return (
        <div className="row p-1 w-100">
            <div className="col-12 p-4">
                <div className="card">
                    <h4 className="card-header">Clientes</h4>
                    <div className="card-body">
                        <BrTable
                            columns={columns}
                            data={response.data}
                            endpoint="clientes"
                            identificador="cliente_id"
                            opcionales={[]}
                            setFetch={setResponse}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
