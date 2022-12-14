import React from 'react'
import { extraerTotalRegistros } from '../../helpers/extract'
import { formatDate } from '../../helpers/format.helper'
import { useFetch } from '../../hooks/useFetch'
import { BrGraficaComparativa } from '../common/base/BrGraficaComparativa'
import { BrTarjetaAmarilla } from '../common/base/BrTarjetaAmarilla'
import { BrTarjetaAzul } from '../common/base/BrTarjetaAzul'
import { BrTarjetaRoja } from '../common/base/BrTarjetaRoja'
import { BrTarjetaTablas } from '../common/base/BrTarjetaTablas'
import { BrTarjetaVerde } from '../common/base/BrTarjetaVerde'

export const Dashboard = () => {
    const [totalUsuarios] = useFetch('/usuarios/obtenerTotalRegistros')
    const [totalClientes] = useFetch('/clientes/obtenerTotalRegistros')
    const [ultimosPrestamos] = useFetch('/prestamos/recientes')

    const conteos = {
        usuarios: extraerTotalRegistros(totalUsuarios),
        clientes: extraerTotalRegistros(totalClientes),
    }
    const columnasTablaPrestamos = ['Cliente', 'Monto', 'Cuotas', 'Prestamista', 'Fecha']

    let filasTablaPrestamos = ultimosPrestamos.data.map((prestamo) => [
        prestamo.cliente,
        `Q.${prestamo.cantidad}`,
        prestamo.cuotas,
        prestamo.prestamista,
        formatDate(prestamo.fecha_creacion),
    ])

    return (
        <div className="row p-4 w-100">
            <BrTarjetaAzul icono="fa-solid fa-user-tie" texto="Total de usuarios" numero={conteos.usuarios} />
            <BrTarjetaAmarilla icono="fa-solid fa-user" texto="Total de clientes" numero={conteos.clientes} />
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
