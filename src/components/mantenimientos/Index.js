import React from 'react'
import { BrTarjetaAmarilla } from '../common/base/BrTarjetaAmarilla'
import { BrTarjetaAzul } from '../common/base/BrTarjetaAzul'
import { BrTarjetaRoja } from '../common/base/BrTarjetaRoja'
import { BrTarjetaVerde } from '../common/base/BrTarjetaVerde'

export const Index = () => {
    return (
        <div className="row p-4">
            <BrTarjetaAzul icono="fa-solid fa-user-tie" texto="Total de usuarios" numero={100} />
            <BrTarjetaRoja icono="fa-solid fa-user" texto="Total de clientes" numero={100} />
            <BrTarjetaVerde icono="fa-solid fa-user" texto="Total de clientes" numero={100} />
            <BrTarjetaAmarilla icono="fa-solid fa-user" texto="Total de clientes" numero={100} />
        </div>
    )
}
