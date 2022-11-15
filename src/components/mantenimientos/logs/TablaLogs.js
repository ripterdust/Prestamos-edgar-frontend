import React from 'react'
import { formatMoney } from '../../../helpers/format.helper'

export const TablaLogs = ({ columns, data }) => {
    return (
        <div className="card-body table-responsive">
            <table className="table table-hover text-nowrap">
                <thead>
                    <tr>
                        {columns.map((column) => {
                            return <th>{column}</th>
                        })}
                    </tr>
                </thead>
                <tbody>
                    {data.map((log) => {
                        const tipo =
                            log.tipo === 1
                                ? 'Ingreso a caja'
                                : log.tipo == 2
                                ? 'Préstamo'
                                : log.tipo === 3
                                ? 'Pago'
                                : 'Retiro de caja'
                        return (
                            <tr key={log.log_id}>
                                <td>{log.log_id}</td>
                                <td>{log.fecha_creacion}</td>
                                <td>{tipo}</td>
                                <td>{formatMoney(log.cantidad)}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
