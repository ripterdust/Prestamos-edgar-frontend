import React from 'react'
import { BrGraficaComparativa } from '../common/base/BrGraficaComparativa'
import { BrTarjetaAmarilla } from '../common/base/BrTarjetaAmarilla'
import { BrTarjetaAzul } from '../common/base/BrTarjetaAzul'
import { BrTarjetaRoja } from '../common/base/BrTarjetaRoja'
import { BrTarjetaTablas } from '../common/base/BrTarjetaTablas'
import { BrTarjetaVerde } from '../common/base/BrTarjetaVerde'

export const Dashboard = () => {
    const columnasTablaPrestamos = ['Cliente', 'Monto', 'Prestamista', 'Fecha']
    const filasTablaPrestamos = [
        ['Bryan Arévalo', 'Q.500.00', 'Pedro Pérez', '15/03/2022'],
        ['Bryan Arévalo', 'Q.500.00', 'Pedro Pérez', '15/03/2022'],
        ['Bryan Arévalo', 'Q.500.00', 'Pedro Pérez', '15/03/2022'],
        ['Bryan Arévalo', 'Q.500.00', 'Pedro Pérez', '15/03/2022'],
    ]
    return (
        <div className="row p-4">
            <BrTarjetaAzul icono="fa-solid fa-user-tie" texto="Total de usuarios" numero={100} />
            <BrTarjetaAmarilla icono="fa-solid fa-user" texto="Total de clientes" numero={100} />
            <BrTarjetaRoja icono="fa-solid fa-arrow-down" texto="Egresos del mes" numero={100} />
            <BrTarjetaVerde icono="fa-solid fa-arrow-up" texto="Ingresos del mes" numero={100} />

            <div className="col-md-6">
                <BrTarjetaTablas titulo="Préstamos" columnas={columnasTablaPrestamos} rows={filasTablaPrestamos} />
            </div>
            <div className="col-md-6">
                <BrGraficaComparativa titulo="Título de la gráfica" />
            </div>
        </div>
    )
}
