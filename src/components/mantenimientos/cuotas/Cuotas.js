import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../../../hooks/useFetch'
import { TablaCuotas } from './TablaCuotas'
import ExportExcel from 'react-export-excel'

const ExcelFile = ExportExcel.ExcelFile
const ExcelSheet = ExportExcel.ExcelSheet
const ExcelColumn = ExportExcel.ExcelColumn

export const Cuotas = () => {
    const { id } = useParams()
    const [response] = useFetch(`/cuotas/prestamo/${id}`)
    const columns = [
        {
            Header: '#',
            accessor: 'cuota_id',
        },
        {
            Header: 'Número de cuota',
            accessor: 'no_cuota',
        },
        {
            Header: 'Cantidad',
            accessor: 'cantidad',
        },
        {
            Header: 'Pagado',
            accessor: 'pagado',
            booleano: true,
        },
        {
            Header: 'Fecha de pago',
            accessor: 'fecha_pago',
            fecha: true,
        },
    ]

    return (
        <div className="row p-1 w-100">
            <div className="col-12 p-4">
                <div className="card">
                    <h3 className="card-header">
                        Cuotas
                        <div className="card-tools">
                            <ExcelFile
                                element={<div className="btn btn-success">Descargar cuotas</div>}
                                filename="Datos de cuotas"
                            >
                                <ExcelSheet data={response.data} name="Cuotas de préstamo">
                                    {columns.map(({ accessor, Header }) => {
                                        return <ExcelColumn label={Header} value={accessor}></ExcelColumn>
                                    })}
                                </ExcelSheet>
                            </ExcelFile>
                        </div>
                    </h3>
                    <div className="card-body">
                        <TablaCuotas columns={columns} data={response.data} />
                    </div>
                </div>
            </div>
        </div>
    )
}
