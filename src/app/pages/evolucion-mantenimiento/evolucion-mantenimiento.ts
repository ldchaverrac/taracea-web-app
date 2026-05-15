import { Component } from '@angular/core';

interface FuncionalidadPendiente {
  readonly titulo: string;
  readonly descripcion: string;
  readonly razon: string;
}

@Component({
  selector: 'app-evolucion-mantenimiento',
  templateUrl: './evolucion-mantenimiento.html',
  styleUrl: './evolucion-mantenimiento.scss',
})
export class EvolucionMantenimientoPage {
  protected readonly pendientes: ReadonlyArray<FuncionalidadPendiente> = [
    {
      titulo: 'Cuenta de usuario / login',
      descripcion:
        'Habilita carrito persistente, historial de pedidos y lista de favoritos.',
      razon:
        'Requiere infraestructura de autenticación y políticas de privacidad. Se difiere hasta validar la tracción del producto.',
    },
    {
      titulo: 'Pasarela de pago real',
      descripcion:
        'Integración con un proveedor de pagos. Hoy "Finalizar compra" es un mock que vacía el carrito y muestra confirmación local.',
      razon:
        'Dependencia de proveedor y regulación de medios de pago. Se ataca cuando exista decisión comercial sobre la pasarela.',
    },
    {
      titulo: 'Búsqueda con autocompletado',
      descripcion:
        'Sugerencias en tiempo real mientras el cliente escribe en la barra de búsqueda.',
      razon:
        'Aporta poco con un catálogo pequeño. Se reevalúa cuando el inventario supere el umbral donde la búsqueda libre deja de ser suficiente.',
    },
    {
      titulo: 'Reseñas y valoraciones',
      descripcion: 'Social proof y feedback público sobre los productos.',
      razon:
        'Necesita moderación activa y un volumen mínimo de clientes para no lucir vacío. Sin esos dos, daña la percepción de marca.',
    },
    {
      titulo: 'Inventario en tiempo real por sucursal',
      descripcion: 'Estado de stock disponible por punto de venta físico.',
      razon: 'Requiere integración con el sistema ERP/POS interno de Taracea.',
    },
  ];
}