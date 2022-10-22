import React from 'react'
import { useTable } from 'react-table'

export const BrTableMostrar = ({ columns = [], data = [] }) => {
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
                    {rows.map((row) => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell, index) => {
                                    return (
                                        <td {...cell.getCellProps()}>
                                            {foranea ? valor : cell.render('Cell')}
                                        </td>
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
