import React from 'react'
import { useFetch } from '../../../hooks/useFetch'
import { TablaLogs } from './TablaLogs'
export const Logs = () => {
    const [logs] = useFetch('logs')

    const data = logs.data ? logs.data : []

    const columns = ['#', 'Fecha', 'Tipo', 'Cantidad']

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
