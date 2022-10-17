import React from 'react'
import { AdvertenciaCambio } from '../general/AdvertenciaCambio'

export const BrTarjetaTablas = ({ titulo = '', columnas = [], rows = [[]] }) => {
    return (
        <div className="card w-100">
            <div className="card-header border-0">
                <div className="card-title">{titulo}</div>
            </div>

            <div className="card-body table-responsive p0">
                <table className="table table-striped table-valign-middle">
                    <thead>
                        <tr>
                            {columnas.map((columna, key) => {
                                return <th key={key}>{columna}</th>
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((row, index) => {
                            return (
                                <tr key={'rows-' + index}>
                                    {row.map((elemento, key) => {
                                        return <td key={`row-${key}`}>{elemento}</td>
                                    })}
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
