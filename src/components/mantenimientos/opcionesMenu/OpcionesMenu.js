import React from 'react'
import { getOptions } from '../../../helpers/getOptions'
import { useFetch } from '../../../hooks/useFetch'
import { BrTable } from '../../common/base/BrTable'
import { AdvertenciaCambio } from '../../common/general/AdvertenciaCambio'

export const OpcionesMenu = () => {
    const [response, setResponse] = useFetch('/opcionesMenu')
    const [roles] = useFetch('/roles')
    const options = getOptions(roles, { id: 'rol_id', selector: 'nombre' })
    const columns = [
        {
            Header: '#',
            accessor: 'opcion_id',
        },
        {
            Header: 'Nombre',
            accessor: 'nombre',
        },
        {
            Header: 'Rol',
            accessor: 'rol_id',
            options,
            foranea: true,
        },
    ]
    return (
        <div className="row p-1 w-100">
            <div className="col-12 p-4">
                <AdvertenciaCambio />
                <div className="card">
                    <h3 className="card-header">Opciones de menú</h3>
                    <div className="card-body">
                        <BrTable
                            columns={columns}
                            data={response.data}
                            endpoint="opcionesMenu"
                            identificador="opcion_id"
                            opcionales={[]}
                            setFetch={setResponse}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
