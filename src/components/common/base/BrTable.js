import React, { Fragment, useContext } from 'react'
import { Link } from 'react-router-dom'
import { useTable } from 'react-table'
import { api } from '../../../api/axios'
import { mostrarError } from '../../../helpers/mostrarError'
import { TokenContext } from '../../../hooks/useContextUser'

export const BrTable = ({
    columns = [],
    data = [],
    endpoint = '/',
    identificador = 'id',
    setFetch = () => {
        mostrarError('Ha ocurrido un error refrescando la tabla')
        return
    },
} = {}) => {
    const { context, setContext } = useContext(TokenContext)

    const refrescarTabla = () => {
        console.log('hola')
        setFetch()
    }

    const handleDelete = async (endpoint, identificador) => {
        const url = `/${endpoint}/${identificador}`

        const res = await api.delete(url, {
            headers: {
                Authorization: 'Bearer ' + context,
            },
        })
        refrescarTabla('Hola')

        if (res.status === 403) {
            setContext(null)
            return localStorage.removeItem('token')
        }
        refrescarTabla()
    }

    const tableInstance = useTable({ columns, data })
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance

    return (
        <>
            <form action={endpoint}>
                {columns.map(({ Header, accessor }, i) => {
                    if (accessor !== identificador) {
                        return <input name={accessor} placeholder={Header} key={i} />
                    }
                })}

                <button type="submit">
                    <i className="fa-solid fa-plus"></i>
                </button>
            </form>
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            <th>Acción</th>
                            {headerGroup.headers.map((column) => (
                                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row) => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell, index) => {
                                    if (index === 0) {
                                        return (
                                            <Fragment key={cell.render('Cell')}>
                                                <td className="action">
                                                    <Link to={`${endpoint}/editar/${cell.row.original[identificador]}`}>
                                                        <i className="fa-solid fa-pen"></i>
                                                    </Link>
                                                    <div
                                                        onClick={() => handleDelete(endpoint, cell.row.original[identificador])}
                                                        to={`${endpoint}/eliminar/${cell.row.original[identificador]}`}
                                                    >
                                                        <i className="fa-solid fa-trash"></i>
                                                    </div>
                                                </td>
                                                <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                            </Fragment>
                                        )
                                    }
                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}
