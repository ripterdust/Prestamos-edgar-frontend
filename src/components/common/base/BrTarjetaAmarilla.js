import React from 'react'

export const BrTarjetaAmarilla = ({ icono = '', texto = '', numero = 0 }) => {
    return (
        <div className="col-12 col-sm-6 col-md-3">
            <div className="info-box mb-3">
                <span className="info-box-icon bg-warning elevation-1">
                    <i className={icono}></i>
                </span>
                <div className="info-box-content">
                    <span className="info-box-text">{texto}</span>
                    <span className="info-box-number">{numero}</span>
                </div>
            </div>
        </div>
    )
}
