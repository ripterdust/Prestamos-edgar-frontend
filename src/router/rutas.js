import { Clientes } from '../components/mantenimientos/clientes/Clientes'
import { OpcionesMenu } from '../components/mantenimientos/opcionesMenu/OpcionesMenu'
import { Roles } from '../components/mantenimientos/roles/Roles'
import { Usuarios } from '../components/mantenimientos/usuarios/Usuarios'

export const categorias = {
    personas: 'personas',
    configuracion: 'configuracion',
}
export const rutas = [
    {
        nombre: 'Usuarios',
        categoria: categorias.personas,
        componente: Usuarios,
        endpoint: '/usuarios',
        icono: 'fa-solid fa-user-tie',
    },
    {
        nombre: 'Clientes',
        categoria: categorias.personas,
        componente: Clientes,
        icono: 'fas fa-solid fa-user',
        endpoint: '/clientes',
    },
    {
        nombre: 'Opciones de Menú',
        categoria: categorias.configuracion,
        componente: OpcionesMenu,
        icono: 'fa-solid fa-sliders',
        endpoint: 'opcionesMenu',
    },
    {
        nombre: 'Roles',
        categoria: categorias.configuracion,
        componente: Roles,
        icono: 'fa-solid fa-people-arrows',
        endpoint: '/roles',
    },
    {
        nombre: 'Ajustes',
        categoria: categorias.configuracion,
        componente: Usuarios,
        endpoint: '/configuracion',
        icono: 'fas fa-regular fa-gear',
    },
]
