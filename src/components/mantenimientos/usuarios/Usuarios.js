import React from 'react'
import { useFetch } from '../../../hooks/useFetch'
import { BrTable } from '../../common/base/BrTable'

export const Usuarios = () => {
    const [response, setResponse] = useFetch('/usuarios')
    const columns = [
        {
            Header: 'Id',
            accessor: 'usuario_id',
        },
        {
            Header: 'Nombre',
            accessor: 'nombre',
            type: 'text',
        },
        {
            Header: 'Correo electrónico',
            accessor: 'correo',
            type: 'email',
        },
        {
            Header: 'Rol',
            accessor: 'rol',
            options: [
                {
                    name: 'Administrador',
                    value: 1,
                },
                { name: 'Cajero', value: 2 },
            ],
        },
    ]

    return (
        <div className="row p-1 w-100">
            <div className="col-12 p-4">
                <div className="card">
                    <h3 className="card-header">Usuarios</h3>
                    <div className="card-body">
                        <BrTable
                            columns={columns}
                            data={response.data}
                            endpoint="usuarios"
                            identificador="usuario_id"
                            opcionales={[
                                {
                                    Header: 'Contraseña',
                                    accessor: 'password',
                                },
                            ]}
                            setFetch={setResponse}
                        />
                    </div>
                    <div className="card-footer clearfix">
                        <ul className="pagination pagination-sm m-0 float-right">
                            <li className="page-item">
                                <a href="page-item" className="page-link">
                                    «
                                </a>
                            </li>
                            <li className="page-item">
                                <a href="page-item" className="page-link">
                                    1
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
