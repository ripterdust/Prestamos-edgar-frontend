import React from 'react'
import { useFetch } from '../../../hooks/useFetch'
import { BrTable } from '../../common/base/BrTable'

export const Usuarios = () => {
    const response = useFetch('/usuarios')
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
        <div className="content-wrapper">
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-header">Usuarios</div>
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
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
