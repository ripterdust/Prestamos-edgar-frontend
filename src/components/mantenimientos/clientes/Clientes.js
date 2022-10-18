import React from 'react'
import { getOptions } from '../../../helpers/getOptions'
import { useFetch } from '../../../hooks/useFetch'
import { BrTable } from '../../common/base/BrTable'

export const Clientes = () => {
    const [response, setResponse] = useFetch('/clientes')
    const [roles] = useFetch('/usuarios')
    const options = getOptions(roles, { id: 'usuario_id', selector: 'nombre' })
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
            Header: 'Nit',
            accessor: 'nit',
        },
        {
            Header: 'Fecha de nacimiento',
            accessor: 'fecha_nacimiento',
        },
        {
            Header: 'Dirección',
            accessor: 'direccion',
        },
        {
            Header: 'No. Identificacion',
            accessor: 'identificacion',
        },
        {
            Header: 'Prestamista',
            accessor: 'prestamista_id',
            hide: true,
            options,
            foranea: true,
        },
    ]
    return (
        <div className="row p-1 w-100">
            <div className="col-12 p-4">
                <div className="card">
                    <h3 className="card-header">Clientes</h3>
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
