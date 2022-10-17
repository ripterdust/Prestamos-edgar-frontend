import React from 'react'

export const AdvertenciaCambio = ({
    titulo = 'Advertencia',
    mensaje = 'Cualquier cambio en este sitio puede afectar directamente el funcionamiento de la página',
}) => {
    return (
        <blockquote className="quote-danger mt-0">
            <h5 id="reminder">{titulo}</h5>
            <p>{mensaje}</p>
        </blockquote>
    )
}
