import React from 'react'
import { useTable } from 'react-table'
import { useFetch } from '../../../hooks/useFetch'
import { BrTableMostrar } from '../../common/base/BrTableMostrar'

export const Prestamos = () => {
    const [data] = useFetch('/prestamos')
    console.log(data, 'data')
    return <BrTableMostrar />
}
