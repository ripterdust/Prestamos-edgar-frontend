import React, {useEffect, useState} from 'react'
import { notify } from '../../../helpers/notify'

export const InstalarPWA = () => {
    const [soportaPWA, setSoportaPWA] = useState(false)
    const [instalacion, setInstalacion] = useState(null)

    useEffect(() => {
        // console.log("Ejecutando useEffect");
        const manejador = e => {
          e.preventDefault()
          setSoportaPWA(true)
          setInstalacion(e)
          notify("Hello")
        };
        window.addEventListener("beforeinstallprompt", manejador)
    
        return () => window.removeEventListener("transitionend", manejador)
      }, [])

    const instalarPwa = evt => {
        evt.preventDefault()

        if (!instalacion) return

        instalacion.prompt()
    }

    if (!soportaPWA) return null

    return (
        <li className="nav-item" onClick={instalarPwa}>
            <a className="nav-link" href="/#">
                <i className="nav-icon fas fa-solid fa-download"></i>
                <p>Descargar app</p>
            </a>
        </li>
    )
}