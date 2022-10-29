import React from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../../../api/axios'
import { obtenerFormulario } from '../../../helpers/extract'
import { notify } from '../../../helpers/notify'
import { useFetch } from '../../../hooks/useFetch'
import { useFetchConfig } from '../../../hooks/useFetchConfig'

export const NuevoPrestamo = () => {
    const navigate = useNavigate()
    const config = useFetchConfig()
    const handleForm = async (e) => {
        e.preventDefault()
        const formulario = obtenerFormulario(e)
        api.post('/prestamos', formulario, config).then((res) => {
            notify('Préstamo almacenado con éxito', 'success')
            navigate('/prestamos')
        })
    }

    const [monedas] = useFetch('/monedas')
    const [clientes] = useFetch('/clientes')

    return (
        <div className="row p-1 w-100">
            <div className="col-12 p-4">
                <div className="card">
                    <h3 className="card-header">Nuevo préstamo</h3>
                    <form onSubmit={handleForm}>
                        <div className="card-body row">
                            <div className="form-group col-4">
                                <label htmlFor="">Cliente</label>
                                <select name="cliente_id" id="" className="form-control" required>
                                    {clientes.data.map(({ cliente_id, nombre, nit }) => (
                                        <option value={cliente_id}>{nombre + '-' + nit}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="form-group col-4">
                                <label htmlFor="">Moneda</label>
                                <select name="moneda_id" id="" className="form-control" required>
                                    {monedas.data.map(({ moneda_id, nombre, prefix }) => (
                                        <option value={moneda_id}>{`${prefix}-${nombre}`}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="form-group col-4">
                                <label htmlFor="">Monto a prestar</label>
                                <input
                                    className="form-control"
                                    type="number"
                                    name="cantidad"
                                    min={1}
                                    defaultValue={1}
                                />
                            </div>
                            <div className="form-group col-4">
                                <label htmlFor="">Interés</label>
                                <input
                                    type="number"
                                    name="interes"
                                    className="form-control"
                                    defaultValue={5}
                                    min={1}
                                />
                            </div>
                            <div className="form-group col-4">
                                <label htmlFor="">Cuotas</label>
                                <input
                                    type="number"
                                    name="cuotas"
                                    className="form-control"
                                    defaultValue={12}
                                    min={1}
                                />
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
