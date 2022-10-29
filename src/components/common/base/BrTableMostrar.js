import React from 'react'
import { Link } from 'react-router-dom'
import { useTable } from 'react-table'
export const BrTableMostrar = ({ columns = [], data = [], identificador = 'id' }) => {
    const tableInstance = useTable({ columns, data })
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance
    return (
        <div className="card-body table-responsive">
            <table className="table table-hover text-nowrap" {...getTableProps()}>
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
                    {rows.map((row, index) => {
                        prepareRow(row)

                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell, index) => {
                                    return (
                                        <>
                                            {index === 0 ? (
                                                <td className="action">
                                                    <Link
                                                        className="btn btn-success mr-1"
                                                        to={`/prestamo/${cell.row.original[identificador]}`}
                                                    >
                                                        <i className="fa-solid fa-eye"></i>
                                                    </Link>
                                                </td>
                                            ) : null}
                                            <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                        </>
                                    )
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
