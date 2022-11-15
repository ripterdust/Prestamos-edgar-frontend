import React from 'react'
import { formatDate, formatMoney } from '../../../helpers/format.helper'

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
                                ? 'Préstamo'
                                : log.tipo == 2
                                ? 'Pago cuota'
                                : log.tipo === 3
                                ? 'Retiro de caja'
                                : 'Ingreso a caja'

                        return (
                            <tr key={log.log_id}>
                                <td>{log.log_id}</td>
                                <td>{formatDate(log.fecha_creacion)}</td>
                                <td>
                                    <span className={`badge bg-${log.tipo % 2 != 0 ? 'danger' : 'success'}`}>
                                        {tipo}
                                    </span>
                                </td>
                                <td>{formatMoney(log.cantidad)}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
