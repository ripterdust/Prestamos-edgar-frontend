import React from 'react'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'
import { Bar } from 'react-chartjs-2'
import { barCharConfig } from '../../../misc/chars'
import { faker } from '@faker-js/faker'

export const BrGraficaComparativa = ({
    titulo = 'Título de la gráfica',
    total = 0,
    tituloTotal = 'Título total',
    indicadores = {
        primero: {
            icono: 'fa-solid fa-arrow-up',
            texto: 'Primer indicador',
        },
        segundo: {
            icono: 'fa-solid fa-arrow-down',
            texto: 'Segundo indicador',
        },
    },
    configProp = {},
    labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
}) => {
    ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

    const options = {
        ...barCharConfig,
        ...configProp,
    }

    const data = {
        labels,
        datasets: [
            {
                label: indicadores.primero.texto,
                data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
                backgroundColor: 'rgb(40,167,69)',
            },
            {
                label: indicadores.segundo.texto,
                data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
                backgroundColor: 'rgb(220,53,69)',
            },
        ],
    }

    return (
        <div className="card w-100">
            <div className="card-header border-0">
                <div className="card-header border-0">
                    <div className="card-title">{titulo}</div>
                </div>
            </div>
            <div className="card-body">
                <div className="d-flex">
                    <p className="d-flex flex-column">
                        <span className="text-bold text-lg">{total}</span>
                        <span>{tituloTotal}</span>
                    </p>
                </div>
                <div className="position-relative mb-4">
                    <div className="chartjs-size-monitor">
                        <div className="chartjs-size-monitor-expand">
                            <div className=""></div>
                        </div>
                        <div className="chartjs-size-monitor-shrink">
                            <div className=""></div>
                        </div>
                    </div>

                    <Bar joptions={options} data={data} />
                </div>
                <div className="d-flex flex-row justify-content-end">
                    <span className="mr-2">
                        <i className={indicadores.primero.icono + ' mr-1'}></i>
                        {indicadores.primero.texto}
                    </span>
                    <span>
                        <i className={indicadores.segundo.icono + ' mr-1'}></i>
                        {indicadores.segundo.texto}
                    </span>
                </div>
            </div>
        </div>
    )
}
