import React from 'react'
import { useState } from 'react'
import '../../../css/datalist.css'
import { formatMoney } from '../../../helpers/format.helper'
import { useFetch } from '../../../hooks/useFetch'
export const Caja = () => {
    const [response] = useFetch('/clientes')
    const [selected, setSelected] = useState('Seleccionar cliente')
    const [activeBar, setActiveBar] = useState(false)
    const [money, setMoney] = useState(false)
    let listaClientes = response.data ? response.data : []

    const toggleSearchBar = () => {
        setActiveBar((state) => !state)
    }
    const clickOption = ({ target }) => {
        toggleSearchBar()
        const [radio, label] = target.children
        setSelected(`${radio.value} - ${label.innerHTML}`)
    }

    const handleMoneyForm = (e) => {
        e.preventDefault()
    }

    const handleMoney = (e) => {
        setMoney(e.target.value)
    }

    const config = { dinero: 200 }
    return (
        <>
            <div className="row p-1 w-100">
                <div className="col-12 p-4">
                    <div className="card">
                        <div className="card-header">
                            <h3>Caja</h3>
                        </div>
                        <form action="" onSubmit={handleMoneyForm}>
                            <div className="card-body">
                                <h4>Dinero en caja: {formatMoney(config.dinero, 'GTQ')}</h4>

                                <div>
                                    <input
                                        type="number"
                                        className="form-control"
                                        name="transaction"
                                        value={money}
                                        onChange={handleMoney}
                                    />
                                </div>
                            </div>
                            <div className="card-footer">
                                <input type="submit" value="Guardar" className="btn btn-info" />
                            </div>
                        </form>
                    </div>
                    <div className="card">
                        <div className="card-header">
                            <h3>Pagos</h3>
                        </div>
                        <div className="card-body">
                            <div className="rom-group col-4">
                                <div className="select-box">
                                    <div className={`options-container ${activeBar && 'active'}`}>
                                        {listaClientes.map(({ cliente_id, nombre }) => {
                                            return (
                                                <div
                                                    className="option"
                                                    onClick={clickOption}
                                                    key={cliente_id}
                                                >
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
