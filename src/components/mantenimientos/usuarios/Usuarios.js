import React from 'react'
import { BrTable } from '../../common/base/BrTable'

export const Usuarios = () => {
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
    const data = [
        {
            usuario_id: 1,
            nombre: 'Bryan Guillermo Arévalo',
            correo: 'bryantello2010@hotmail.com',
            rol: 'Administrador',
        },
    ]
    return (
        <div className="mantenimiento">
            <div className="titulo">Usuarios</div>

            <BrTable columns={columns} data={data} endpoint="usuario" identificador="usuario_id" />
        </div>
    )
}
