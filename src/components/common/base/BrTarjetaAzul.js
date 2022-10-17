import React from 'react'

export const BrTarjetaAzul = ({ icono = '', texto = '', numero = 0 }) => {
    return (
        <div className="col-12 col-sm-6 col-md-3">
            <div className="info-box">
                <span className="info-box-icon bg-info elevation-1">
                    <i className={icono}></i>
                </span>
                <div className="info-box-content">
                    <span className="info-box-text">{texto}</span>
                    <div className="info-box-number"> {numero} </div>
                </div>
            </div>
        </div>
    )
}
