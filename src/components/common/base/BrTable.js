import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { useTable, TableHead } from 'react-table'
export const BrTable = ({ columns = [], data = [], endpoint = '/', identificador = 'id' } = {}) => {
    const tableInstance = useTable({ columns, data })

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance

    return (
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
                                                <Link to={`${endpoint}/eliminar/${cell.row.original[identificador]}`}>
                                                    <i className="fa-solid fa-trash"></i>
                                                </Link>
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
    )
}
