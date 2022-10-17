import React from 'react'
import { useFetch } from '../../../hooks/useFetch'
import { BrTable } from '../../common/base/BrTable'
import { AdvertenciaCambio } from '../../common/general/AdvertenciaCambio'

export const Monedas = () => {
    const [response, setResponse] = useFetch('/monedas')
    const columns = [
        {
            Header: '#',
            accessor: 'moneda_id',
        },
        {
            Header: 'Nombre',
            accessor: 'nombre',
        },
        {
            Header: 'Prefijo',
            accessor: 'prefix'
        }
    ]

    return (
        <div className="row p-1 w-100">
            <div className="col-12 p-4">
                <AdvertenciaCambio />
                <div className="card">
                    <h3 className="card-header">Monedas</h3>
                    <div className="card-body">
                        <BrTable
                            columns={columns}
                            data={response.data}
                            endpoint="monedas"
                            identificador="moneda_id"
                            opcionales={[]}
                            setFetch={setResponse}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
