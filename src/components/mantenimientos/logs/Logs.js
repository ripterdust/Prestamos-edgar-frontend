import React from 'react'
import { useTable } from 'react-table'
import { TablaLogs } from './TablaLogs'
export const Logs = () => {
    const columns = ['#', 'Fecha', 'Tipo', 'Cantidad']

    const data = [{ log_id: 1, fecha_creacion: '2022-12-04 14:42:18', tipo: 1, cantidad: 100 }]
    return (
        <div className="row p-1 w-100">
            <div className="col-12 p-4">
                <div className="card">
                    <div className="card-header">
                        <h3>Logs</h3>
                    </div>
                    <TablaLogs columns={columns} data={data} />
                </div>
            </div>
        </div>
    )
}
