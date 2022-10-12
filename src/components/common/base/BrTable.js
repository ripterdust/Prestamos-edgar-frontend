import axios from 'axios'
import React, { Fragment, useContext, useState } from 'react'
import { useTable } from 'react-table'
import { api } from '../../../api/axios'
import { mostrarError } from '../../../helpers/mostrarError'
import { TokenContext } from '../../../hooks/useContextUser'

export const BrTable = ({
    columns = [],
    data = [],
    opcionales = [],
    endpoint = '/',
    identificador = 'id',
    setFetch = () => {
        mostrarError('Ha ocurrido un error refrescando la tabla')
        return
    },
} = {}) => {
    const { context, setContext } = useContext(TokenContext)
    const [add, setAdd] = useState(false)
    const [edit, setEdit] = useState(false)
    const config = {
        headers: {
            Authorization: 'Bearer ' + context,
        },
    }
    const refrescarTabla = () => {
        setFetch()
    }

    const handleDelete = async (endpoint, identificador) => {
        const url = `/${endpoint}/${identificador}`

        const res = await api.delete(url, config)
        refrescarTabla('Hola')

        if (res.status === 403) {
            setContext(null)
            return localStorage.removeItem('token')
        }
        refrescarTabla()
    }

    const handleAdd = () => {
        setAdd(!add)
    }

    const handleEdit = () => {
        setAdd(false)
        setEdit(!edit)
    }

    const editar = (id) => {
        const url = `/${endpoint}/${id}`
        axios
            .get(url, config)
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                mostrarError('Error en el servidor')
            })
        console.log(url)
        handleEdit()
    }

    const handleForm = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const dataArray = [...formData]
        const data = Object.fromEntries(dataArray)

        api.post(`/${endpoint}`, data, {
            headers: {
                Authorization: 'Bearer ' + context,
            },
        }).then(({ data }) => {
            console.log({ data })
        })

        handleAdd()
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
                            {columns.map(({ Header, accessor, options, type }, i) => {
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
                                            <div className="form-group col-4" key={`columna-${i * Math.random()}`}>
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
                                    <div className="form-group col-4">
                                        <label htmlFor="" key={`opcional-${i}`}>
                                            {Header}
                                        </label>
                                        <input name={accessor} placeholder={Header} key={i} className="form-control" />
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
                    <form action={endpoint} onSubmit={handleForm}>
                        <div className="card-body row">
                            {columns.map(({ Header, accessor, options, type }, i) => {
                                if (accessor !== identificador) {
                                    if (options) {
                                        return (
                                            <div className="from-group col-4" key={i + Math.random()}>
                                                <label htmlFor="">{Header}</label>
                                                <select name={accessor} id="" required className="form-control">
                                                    {options.map((el) => {
                                                        return (
                                                            <option value={el.value} key={el.value}>
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
                                            <div className="form-group col-4" key={i}>
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
                                    <div className="form-group col-4">
                                        <label htmlFor="" key={i}>
                                            {Header}
                                        </label>
                                        <input name={accessor} placeholder={Header} key={i} className="form-control" />
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
                                                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                                </Fragment>
                                            )
                                        }
                                        return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
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
