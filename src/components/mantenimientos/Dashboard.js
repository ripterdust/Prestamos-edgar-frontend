import React from 'react'
import { randDate, randName, randNumber } from '../../helpers/fakeDataGenerator'
import { BrGraficaComparativa } from '../common/base/BrGraficaComparativa'
import { BrTarjetaAmarilla } from '../common/base/BrTarjetaAmarilla'
import { BrTarjetaAzul } from '../common/base/BrTarjetaAzul'
import { BrTarjetaRoja } from '../common/base/BrTarjetaRoja'
import { BrTarjetaTablas } from '../common/base/BrTarjetaTablas'
import { BrTarjetaVerde } from '../common/base/BrTarjetaVerde'

export const Dashboard = () => {
    const columnasTablaPrestamos = ['Cliente', 'Monto', 'Prestamista', 'Fecha']
    const arr = [1, 2, 3, 4, 5, 5, 5, 5]

    const filasTablaPrestamos = arr.map(() => [
        randName(),
        `Q.${randNumber().toFixed(2)}`,
        randName(),
        randDate(),
    ])
    return (
        <div className="row p-4 w-100">
            <BrTarjetaAzul icono="fa-solid fa-user-tie" texto="Total de usuarios" numero={100} />
            <BrTarjetaAmarilla icono="fa-solid fa-user" texto="Total de clientes" numero={100} />
            <BrTarjetaRoja icono="fa-solid fa-arrow-down" texto="Egresos del mes" numero={100} />
            <BrTarjetaVerde icono="fa-solid fa-arrow-up" texto="Ingresos del mes" numero={100} />

            <div className="col-md-6">
                <BrTarjetaTablas
                    titulo="Préstamos"
                    columnas={columnasTablaPrestamos}
                    rows={filasTablaPrestamos}
                />
            </div>
            <div className="col-md-6">
                <BrGraficaComparativa
                    titulo="Gráfica de ingresos y egresos"
                    total="10"
                    tituloTotal="Movimientos del mes"
                    indicadores={{
                        primero: {
                            icono: 'fa-solid fa-arrow-up',
                            texto: 'Ingresos',
                        },
                        segundo: {
                            icono: 'fa-solid fa-arrow-down',
                            texto: 'Egresos',
                        },
                    }}
                    labels={['January', 'February', 'March', 'April', 'May', 'June', 'July']}
                />
            </div>
        </div>
    )
}
