import { Caja } from '../components/mantenimientos/caja/Caja'
import { Clientes } from '../components/mantenimientos/clientes/Clientes'
import { Logs } from '../components/mantenimientos/logs/Logs'
import { Monedas } from '../components/mantenimientos/monedas/Monedas'
import { OpcionesMenu } from '../components/mantenimientos/opcionesMenu/OpcionesMenu'
import { NuevoPrestamo } from '../components/mantenimientos/prestamos/NuevoPrestamo'
import { Prestamos } from '../components/mantenimientos/prestamos/Prestamos'
import { Roles } from '../components/mantenimientos/roles/Roles'
import { Usuarios } from '../components/mantenimientos/usuarios/Usuarios'

export const categorias = {
    personas: 'personas',
    configuracion: 'configuracion',
    prestamos: 'Economía',
    gestion: 'Gestión',
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
        nombre: 'Nuevo Préstamo',
        categoria: categorias.prestamos,
        Componente: NuevoPrestamo,
        endpoint: '/nuevoPrestamos',
        icono: 'fas fa-solid fa-cash-register',
    },
    {
        nombre: 'Prestamos',
        categoria: categorias.prestamos,
        Componente: Prestamos,
        endpoint: '/prestamos',
        icono: 'fa-solid fa-hand-holding-dollar',
    },
    {
        nombre: 'Monedas',
        categoria: categorias.prestamos,
        Componente: Monedas,
        endpoint: '/monedas',
        icono: 'fas fa-solid fa-money-bill',
    },
    {
        nombre: 'Caja',
        categoria: categorias.gestion,
        Componente: Caja,
        endpoint: '/caja',
        icono: 'fas fa-solid fa-sack-dollar',
    },
    {
        nombre: 'Logs',
        categoria: categorias.gestion,
        endpoint: '/logs',
        icono: 'fa-solid fa-chart-simple',
        Componente: Logs,
    },
]
