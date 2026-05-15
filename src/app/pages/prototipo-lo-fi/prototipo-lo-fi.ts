import { Component } from '@angular/core';

@Component({
  selector: 'app-prototipo-lo-fi',
  templateUrl: './prototipo-lo-fi.html',
  styleUrl: './prototipo-lo-fi.scss'
})
export class PrototipoLoFiPage {
  protected readonly vistas = [
    {
      titulo: 'Catálogo de productos',
      descripcion:
        'Header con logo, búsqueda y carrito. Filtros laterales (categoría, precio, material) y grilla de tarjetas con miniatura, nombre, precio y acción de compra.'
    },
    {
      titulo: 'Detalle de producto',
      descripcion:
        'Imagen principal (4:3), galería de miniaturas y panel de información con título, descripción, selector de cantidad y acción "Añadir al carrito".'
    },
    {
      titulo: 'Carrito de compras',
      descripcion:
        'Lista de ítems con subtotal por línea y resumen lateral con total, código de descuento y acción "Finalizar compra".'
    }
  ];
}