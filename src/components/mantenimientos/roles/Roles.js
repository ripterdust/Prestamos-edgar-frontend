import React from 'react'
import { useFetch } from '../../../hooks/useFetch'
import { BrTable } from '../../common/base/BrTable'

export const Roles = () => {
    const [response, setResponse] = useFetch('/roles')
    const columns = [
        {
            Header: '#',
            accessor: 'rol_id',
        },
        {
            Header: 'Nombre',
            accessor: 'nombre',
        },
    ]
    return (
        <div className="row p-1 w-100">
            <div className="col-12 p-4">
                <div className="card">
                    <h3 className="card-header">Roles</h3>
                    <div className="card-body">
                        <BrTable
                            columns={columns}
                            data={response.data}
                            endpoint="roles"
                            identificador="rol_id"
                            opcionales={[]}
                            setFetch={setResponse}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
