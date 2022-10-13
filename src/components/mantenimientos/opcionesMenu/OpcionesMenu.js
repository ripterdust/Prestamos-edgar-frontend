import React from 'react'
import { useFetch } from '../../../hooks/useFetch'
import { BrTable } from '../../common/base/BrTable'

export const OpcionesMenu = () => {
    const [response, setResponse] = useFetch('/opcionesMenu')
    const columns = [
        {
            Header: '#',
            accessor: 'rol_id',
        },
        {
            Header: 'Nombre',
            accessor: 'nombre',
        },
    ]
    console.log(response)
    return (
        <div className="row p-1 w-100">
            <div className="col-12 p-4">
                <blockquote className="quote-danger mt-0">
                    <h5 id="reminder">Advertencia</h5>
                    <p>Cualquier cambio en este sitio puede afectar directamente el funcionamiento de la página</p>
                </blockquote>
                <div className="card">
                    <h3 className="card-header">Opciones de menú</h3>
                    <div className="card-body">
                        <BrTable
                            columns={columns}
                            data={response.data}
                            endpoint="opcionesMenu"
                            identificador="rol_id"
                            opcionales={[]}
                            setFetch={setResponse}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
