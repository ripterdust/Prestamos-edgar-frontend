import React, { Fragment, useContext, useState } from 'react'
import { Link } from 'react-router-dom'
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

    const refrescarTabla = () => {
        console.log('hola')
        setFetch()
    }

    const handleDelete = async (endpoint, identificador) => {
        const url = `/${endpoint}/${identificador}`

        const res = await api.delete(url, {
            headers: {
                Authorization: 'Bearer ' + context,
            },
        })
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
        setEdit(!edit)
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
                    <div onClick={handleAdd} className="acn">
                        <i className="fa-solid fa-plus"></i>
                    </div>
                </div>
            ) : add ? (
                <form action={endpoint} onSubmit={handleForm}>
                    {columns.map(({ Header, accessor, options, type }, i) => {
                        if (accessor !== identificador) {
                            if (options) {
                                return (
                                    <select name={accessor} id="" key={i} required>
                                        {options.map((el) => {
                                            return (
                                                <option value={el.value} key={el.value}>
                                                    {el.name}
                                                </option>
                                            )
                                        })}
                                    </select>
                                )
                            }
                            return <input name={accessor} type={type} placeholder={Header} key={i} required />
                        }

                        return
                    })}
                    {opcionales.map(({ Header, accessor }, i) => {
                        return <input name={accessor} placeholder={Header} key={i} />
                    })}

                    <button type="submit">
                        <i className="fa-solid fa-plus"></i>
                    </button>
                </form>
            ) : (
                <form action={endpoint} onSubmit={handleForm}>
                    {columns.map(({ Header, accessor, options, type }, i) => {
                        if (accessor !== identificador) {
                            if (options) {
                                return (
                                    <select name={accessor} id="" key={i} required>
                                        {options.map((el) => {
                                            return (
                                                <option value={el.value} key={el.value}>
                                                    {el.name}
                                                </option>
                                            )
                                        })}
                                    </select>
                                )
                            }
                            return <input name={accessor} type={type} placeholder={Header} key={i} required />
                        }

                        return
                    })}
                    {opcionales.map(({ Header, accessor }, i) => {
                        return <input name={accessor} placeholder={Header} key={i} />
                    })}

                    <button type="submit">
                        <i className="fa-solid fa-pencil"></i>
                    </button>
                </form>
            )}

            <table {...getTableProps()}>
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
                                                    <Link to={`${endpoint}/editar/${cell.row.original[identificador]}`}>
                                                        <i className="fa-solid fa-pen"></i>
                                                    </Link>
                                                    <div
                                                        onClick={() => handleDelete(endpoint, cell.row.original[identificador])}
                                                        to={`${endpoint}/eliminar/${cell.row.original[identificador]}`}
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
        </>
    )
}
