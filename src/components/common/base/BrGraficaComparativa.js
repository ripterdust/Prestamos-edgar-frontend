import React from 'react'

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
}) => {
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

                    <canvas id="sales-chart" height="200" width="100%" className="chartjs-render-monitor"></canvas>
                </div>
                <div className="d-flex flex-row justify-content-end">
                    <span className="mr-2">
                        <i className={indicadores.primero.icono}></i>
                        {indicadores.primero.texto}
                    </span>
                    <span>
                        <i className={indicadores.segundo.icono}></i>
                        {indicadores.segundo.texto}
                    </span>
                </div>
            </div>
        </div>
    )
}
