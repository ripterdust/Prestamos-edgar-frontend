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
        },
        {
            Header: 'Correo electrónico',
            accessor: 'correo',
        },
        {
            Header: 'Rol',
            accessor: 'rol',
        },
    ]

    return (
        <div className="mantenimiento">
            <div className="titulo">Usuarios</div>

            <BrTable columns={columns} data={response.data} endpoint="usuario" identificador="usuario_id" />
        </div>
    )
}
