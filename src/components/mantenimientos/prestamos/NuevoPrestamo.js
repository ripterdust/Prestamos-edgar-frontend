import React from 'react'
import { useFetch } from '../../../hooks/useFetch'

export const NuevoPrestamo = () => {
    const handleForm = (e) => {
        e.preventDefault()
    }

    const [monedas] = useFetch('/monedas')
    const [clientes] = useFetch('/clientes')
    console.log(clientes.data)
    return (
        <div className="row p-1 w-100">
            <div className="col-12 p-4">
                <div className="card">
                    <h3 className="card-header">Nuevo préstamo</h3>
                    <form onSubmit={handleForm}>
                        <div className="card-body row">
                            <div className="form-group col-4">
                                <label htmlFor="">Cliente</label>
                                <select name="moneda" id="" className="form-control" required>
                                    {clientes.data.map(({ cliente_id, nombre, nit }) => (
                                        <option value={cliente_id}>{nombre + '-' + nit}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="form-group col-4">
                                <label htmlFor="">Moneda</label>
                                <select name="moneda" id="" className="form-control" required>
                                    {monedas.data.map(({ moneda_id, nombre, prefix }) => (
                                        <option value={moneda_id}>{`${prefix}-${nombre}`}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="form-group col-4">
                                <label htmlFor="">Monto a prestar</label>
                                <input className="form-control" type="number" />
                            </div>
                            <div className="form-group col-4">
                                <label htmlFor="">Interés</label>
                                <input type="number" name="interes" className="form-control" />
                            </div>
                            <div className="form-group col-4">
                                <label htmlFor="">Cuotas</label>
                                <input type="number" name="cuotas" className="form-control" />
                            </div>
                        </div>
                        <div className="card-footer">
                            <input type="submit" className="btn btn-success" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
