import React from 'react'
import { useTable } from 'react-table'

export const TablaCuotas = ({ columns = [], data = [] }) => {
    const tableInstance = useTable({ columns, data })
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance
    return (
        <div className="card-body table responsive">
            <table className="table table-hover text-nowrap" {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
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
                                    const celda = cell.row.cells[index].row.allCells[index]
                                    const columna = celda.column
                                    const { booleano } = celda.column
                                    if (booleano) {
                                        return (
                                            <td className="action">
                                                <div
                                                    className={`btn ${
                                                        cell.value === 1 ? 'btn-success' : 'btn-danger'
                                                    }`}
                                                >
                                                    <i
                                                        class={`fa-solid ${
                                                            cell.value === 1 ? 'fa-check' : 'fa-x'
                                                        }`}
                                                    ></i>
                                                </div>
                                            </td>
                                        )
                                    }
                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
