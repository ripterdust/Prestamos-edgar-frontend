import React from 'react'
import { useState } from 'react'
import '../../../css/datalist.css'
import { useFetch } from '../../../hooks/useFetch'
export const Caja = () => {
    const [response] = useFetch('/clientes')
    const [selected, setSelected] = useState('Seleccionar cliente')
    const [activeBar, setActiveBar] = useState(false)

    let listaClientes = response.data ? response.data : []

    const toggleSearchBar = () => {
        setActiveBar((state) => !state)
    }
    const clickOption = ({ target }) => {
        toggleSearchBar()
        const [radio, label] = target.children
        setSelected(`${radio.value} - ${label.innerHTML}`)
    }
    console.log(listaClientes)
    return (
        <>
            <div className="ow p-1 w-100">
                <div className="col-12 p-4">
                    <div className="card">
                        <div className="card-header">
                            <h3>Caja</h3>
                        </div>

                        <div className="card-body">
                            <div className="rom-group col-4">
                                <div className="select-box">
                                    <div className={`options-container ${activeBar && 'active'}`}>
                                        {listaClientes.map(({ cliente_id, nombre }) => {
                                            return (
                                                <div className="option" onClick={clickOption}>
                                                    <input
                                                        type="radio"
                                                        className="radio"
                                                        id={nombre}
                                                        name="category"
                                                        value={cliente_id}
                                                    />
                                                    <label htmlFor={nombre}>{nombre}</label>
                                                </div>
                                            )
                                        })}
                                    </div>
                                    <div className="selected" onClick={toggleSearchBar}>
                                        {selected}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
