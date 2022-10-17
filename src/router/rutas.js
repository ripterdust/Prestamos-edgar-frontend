import { Clientes } from '../components/mantenimientos/clientes/Clientes'
import { OpcionesMenu } from '../components/mantenimientos/opcionesMenu/OpcionesMenu'
import { Roles } from '../components/mantenimientos/roles/Roles'
import { Usuarios } from '../components/mantenimientos/usuarios/Usuarios'

export const categorias = {
    personas: 'personas',
    configuracion: 'configuracion',
    prestamos: 'Economía',
}
export const rutas = [
    {
        nombre: 'Usuarios',
        categoria: categorias.personas,
        Componente: Usuarios,
        endpoint: '/usuarios',
        icono: 'fa-solid fa-user-tie',
    },
    {
        nombre: 'Clientes',
        categoria: categorias.personas,
        Componente: Clientes,
        icono: 'fas fa-solid fa-user',
        endpoint: '/clientes',
    },
    {
        nombre: 'Opciones de Menú',
        categoria: categorias.configuracion,
        Componente: OpcionesMenu,
        icono: 'fa-solid fa-sliders',
        endpoint: 'opcionesMenu',
    },
    {
        nombre: 'Roles',
        categoria: categorias.configuracion,
        Componente: Roles,
        icono: 'fa-solid fa-people-arrows',
        endpoint: '/roles',
    },
    {
        nombre: 'Ajustes',
        categoria: categorias.configuracion,
        Componente: Usuarios,
        endpoint: '/configuracion',
        icono: 'fas fa-regular fa-gear',
    },
    {
        nombre: 'Prestamos',
        categoria: categorias.prestamos,
        Componente: Usuarios,
        endpoint: '/prestamos',
        icono: 'fas fa-solid fa-money-check-dollar',
    },
    {
        nombre: 'Monedas',
        categoria: categorias.prestamos,
        Componente: Usuarios,
        endpoint: '/monedas',
        icono: 'fas fa-solid fa-money-bill',
    },
]
