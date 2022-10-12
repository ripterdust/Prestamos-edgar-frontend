import React, { Fragment, useContext, useState } from 'react'
import { useTable } from 'react-table'
import { api } from '../../../api/axios'
import { notify } from '../../../helpers/notify'
import { TokenContext } from '../../../hooks/useContextUser'
export const BrTable = ({
    columns = [],
    data = [],
    opcionales = [],
    endpoint = '/',
    identificador = 'id',
    setFetch = () => {
        notify('Ha ocurrido un error refrescando la tabla')
        return
    },
} = {}) => {
    const { context, setContext } = useContext(TokenContext)
    const [editD, setEditD] = useState({})
    const [add, setAdd] = useState(false)
    const [edit, setEdit] = useState(false)
    const [id, setId] = useState(null)
    const config = {
        headers: {
            Authorization: 'Bearer ' + context,
        },
    }

    const refrescarTabla = () => {
        setFetch({ data: [] })
    }

    const handleDelete = async (endpoint, identificador) => {
        const url = `/${endpoint}/${identificador}`

        api.delete(url, config).then((res) => {
            if (res.status === 403) {
                setContext(null)
                return localStorage.removeItem('token')
            }
            refrescarTabla()
        })

        refrescarTabla()
    }

    const handleAdd = () => {
        setAdd(!add)
        setEdit(false)
    }

    const handleEdit = () => {
        setAdd(false)
        setEdit(!edit)
    }

    const editar = async (id) => {
        const url = `/${endpoint}/${id}`
        const { data } = await api.get(url, config)
        const response = await data.data
        setEditD(response[0])
        setId(response[0][identificador])
        handleEdit()
    }

    const handleForm = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const dataArray = [...formData]
        const data = Object.fromEntries(dataArray)
        api.post(`/${endpoint}`, data, config).then((data) => {
            if (data.status === 500 || data.status === 400) return

            notify('Registro agregado con éxito', 'success')
            refrescarTabla()
            handleAdd()
        })
    }
    const handleEditForm = (e) => {
        e.preventDefault()
        const url = `/${endpoint}/edit/${id}`
        const formData = new FormData(e.target)
        const dataArray = [...formData]
        const data = Object.fromEntries(dataArray)
        api.post(url, data, config)
            .then((res) => {
                if (res.status === 500) return ''
                notify('Registro actualizado con éxito', 'success')
                setEdit(false)
                refrescarTabla()
            })
            .catch((err) => {
                notify('Error ocurrido en el servidor')
            })
    }

    const tableInstance = useTable({ columns, data })
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance

    return (
        <>
            {!add && !edit ? (
                <div className="acn-btns">
                    <div onClick={handleAdd} className="acn btn btn-success">
                        <i className="fa-solid fa-plus"></i>
                    </div>
                </div>
            ) : add ? (
                <div className="card card-success">
                    <div className="card-header">
                        <h3 className="card-title">Agregar</h3>
                    </div>
                    <form action={endpoint} onSubmit={handleForm}>
                        <div className="card-body row">
                            {columns.map(({ Header, accessor, options, type, hide }, i) => {
                                if (hide) return
                                if (accessor !== identificador) {
                                    if (options) {
                                        return (
                                            <div className="from-group col-4" key={`coumna-${i}`}>
                                                <label htmlFor="">{Header}</label>
                                                <select name={accessor} id="" required className="form-control">
                                                    {options.map((el) => {
                                                        return (
                                                            <option value={el.value} key={`opcion-${i}`}>
                                                                {el.name}
                                                            </option>
                                                        )
                                                    })}
                                                </select>
                                            </div>
                                        )
                                    }
                                    return (
                                        <>
                                            <div className="form-group col-4">
                                                <label htmlFor="">{Header}</label>
                                                <input name={accessor} type={type} placeholder={Header} required className="form-control" />
                                            </div>
                                        </>
                                    )
                                }

                                return
                            })}
                            {opcionales.map(({ Header, accessor }, i) => {
                                return (
                                    <div className="form-group col-4" key={i}>
                                        <label htmlFor="">{Header}</label>
                                        <input name={accessor} placeholder={Header} className="form-control" required />
                                    </div>
                                )
                            })}
                        </div>

                        <div className="card-footer">
                            <button type="submit" className="btn btn-success">
                                Guardar
                            </button>
                            <div className="btn btn-danger ml-1" onClick={handleAdd}>
                                Cancelar
                            </div>
                        </div>
                    </form>
                </div>
            ) : (
                <div className="card card-info">
                    <div className="card-header">
                        <h3 className="card-title">Editar</h3>
                    </div>
                    <form action={endpoint} onSubmit={handleEditForm}>
                        <div className="card-body row">
                            {columns.map(({ Header, accessor, options, type, hide }, i) => {
                                if (hide) return
                                if (accessor !== identificador) {
                                    if (options) {
                                        return (
                                            <div className="from-group col-4" key={i}>
                                                <label htmlFor="">{Header}</label>
                                                <select name={accessor} className="form-control">
                                                    {options.map((el) => {
                                                        return (
                                                            <option
                                                                value={el.value}
                                                                key={el.value}
                                                                selected={el.value === editD[accessor] && 'selected'}
                                                            >
                                                                {el.name && el.name}
                                                            </option>
                                                        )
                                                    })}
                                                </select>
                                            </div>
                                        )
                                    }
                                    return (
                                        <>
                                            <div className="form-group col-4" key={i}>
                                                <label htmlFor="">{Header}</label>
                                                <input
                                                    name={accessor}
                                                    type={type}
                                                    placeholder={Header}
                                                    required
                                                    className="form-control"
                                                    defaultValue={editD[accessor]}
                                                />
                                            </div>
                                        </>
                                    )
                                }

                                return
                            })}
                            {opcionales.map(({ Header, accessor }, i) => {
                                return (
                                    <div className="form-group col-4">
                                        <label htmlFor="" key={i}>
                                            {Header}
                                        </label>
                                        <input name={accessor} placeholder={Header} key={i} className="form-control" required />
                                    </div>
                                )
                            })}
                        </div>

                        <div className="card-footer">
                            <button type="submit" className="btn btn-info">
                                Guardar
                            </button>
                            <div className="btn btn-danger ml-1" onClick={handleEdit}>
                                Cancelar
                            </div>
                        </div>
                    </form>
                </div>
            )}
            <div className="card-body table-responsive ">
                <table className="table table-hover text-nowrap" {...getTableProps()}>
                    <thead>
                        {headerGroups.map((headerGroup) => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                <th>Acción</th>
                                {headerGroup.headers.map((column) => (
                                    <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {rows.map((row) => {
                            prepareRow(row)
                            return (
                                <tr {...row.getRowProps()}>
                                    {row.cells.map((cell, index) => {
                                        const celda = cell.row.cells[index].row.allCells[index]
                                        const columna = celda.column
                                        const opciones = columna.options
                                        const foranea = columna.foranea
                                        let valor = ''
                                        if (foranea) {
                                            valor = opciones.find((opt) => opt.value == cell.value)
                                            if (valor) valor = valor.name
                                            console.log(valor)
                                        }
                                        if (index === 0) {
                                            return (
                                                <Fragment key={cell.render('Cell')}>
                                                    <td className="action">
                                                        <div
                                                            onClick={() => editar(cell.row.original[identificador])}
                                                            to={`${endpoint}/editar/${cell.row.original[identificador]}`}
                                                            className="btn btn-success mr-1"
                                                        >
                                                            <i className="fa-solid fa-pen"></i>
                                                        </div>
                                                        <div
                                                            onClick={() => handleDelete(endpoint, cell.row.original[identificador])}
                                                            to={`${endpoint}/eliminar/${cell.row.original[identificador]}`}
                                                            className="btn btn-danger"
                                                        >
                                                            <i className="fa-solid fa-trash"></i>
                                                        </div>
                                                    </td>
                                                    <td {...cell.getCellProps()}>{foranea ? valor : cell.render('Cell')}</td>
                                                </Fragment>
                                            )
                                        }
                                        return <td {...cell.getCellProps()}>{foranea ? valor : cell.render('Cell')}</td>
                                    })}
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}
