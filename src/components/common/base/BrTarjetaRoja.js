import React from 'react'

export const BrTarjetaRoja = ({ icono = '', texto = '', numero = 0 }) => {
    return (
        <div class="col-12 col-sm-6 col-md-3">
            <div class="info-box mb-3">
                <span class="info-box-icon bg-danger elevation-1">
                    <i class={icono}></i>
                </span>
                <div class="info-box-content">
                    <span class="info-box-text">{texto} </span>
                    <span class="info-box-number">{numero} </span>
                </div>
            </div>
        </div>
    )
}
