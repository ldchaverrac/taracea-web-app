import { Component } from '@angular/core';
import { NgOptimizedImage } from "@angular/common";

interface NodoAI {
  readonly titulo: string;
  readonly ruta?: string;
  readonly descripcion: string;
  readonly hijos?: ReadonlyArray<{ readonly titulo: string; readonly nota: string }>;
}

interface Objeto {
  readonly nombre: string;
  readonly proposito: string;
  readonly atributos: ReadonlyArray<string>;
  readonly relaciones: ReadonlyArray<string>;
}

interface Metafora {
  readonly elegido: string;
  readonly descartado: string;
  readonly razon: string;
}

@Component({
  selector: 'app-modelo-mental',
  templateUrl: './modelo-mental.html',
  styleUrl: './modelo-mental.scss',
  imports: [
    NgOptimizedImage
  ]
})
export class ModeloMentalPage {
  protected readonly arquitectura: ReadonlyArray<NodoAI> = [
    {
      titulo: 'Catálogo',
      ruta: '/',
      descripcion: 'Punto de entrada. Descubrimiento y exploración de productos.',
      hijos: [
        { titulo: 'Filtros', nota: 'Categoría, precio, material' },
        { titulo: 'Búsqueda', nota: 'Texto libre con debounce' },
        { titulo: 'Grilla de productos', nota: 'Tarjeta con imagen, nombre y precio' },
      ],
    },
    {
      titulo: 'Detalle de producto',
      ruta: '/producto/:id',
      descripcion: 'Ficha individual. Profundización antes de decidir compra.',
      hijos: [
        { titulo: 'Galería', nota: 'Imagen principal + miniaturas' },
        { titulo: 'Información', nota: 'Materiales, dimensiones, tiempos' },
        { titulo: 'Acción', nota: 'Selector de cantidad y "Añadir al carrito"' },
      ],
    },
    {
      titulo: 'Carrito',
      ruta: '/carrito',
      descripcion: 'Resumen de la intención de compra antes del checkout.',
      hijos: [
        { titulo: 'Lista de ítems', nota: 'Editar cantidad y eliminar' },
        { titulo: 'Resumen', nota: 'Subtotal, descuento, total' },
        { titulo: 'Acción', nota: '"Finalizar compra"' },
      ],
    },
    {
      titulo: 'Confirmación',
      ruta: '/compra/resumen',
      descripcion: 'Cierre del flujo. Reservada para versión futura.',
    },
  ];

  protected readonly globales: ReadonlyArray<{ readonly titulo: string; readonly descripcion: string }> = [
    {
      titulo: 'Header',
      descripcion: 'Logotipo (link al catálogo), búsqueda y acceso al carrito. Persistente.',
    },
    {
      titulo: 'Footer',
      descripcion: 'Marca, navegación secundaria y contacto. Persistente, fondo berenjena.',
    },
  ];

  protected readonly objetos: ReadonlyArray<Objeto> = [
    {
      nombre: 'Producto',
      proposito: 'Entidad central del catálogo. Es lo que se ve, se elige y se compra.',
      atributos: ['id', 'nombre', 'precio', 'descripción', 'materiales', 'dimensiones', 'imágenes', 'categoría', 'SKU'],
      relaciones: ['pertenece a una Categoría', 'puede aparecer como ItemCarrito'],
    },
    {
      nombre: 'Categoría',
      proposito: 'Agrupa productos para facilitar la exploración.',
      atributos: ['id', 'nombre', 'descripción breve'],
      relaciones: ['tiene muchos Productos'],
    },
    {
      nombre: 'Carrito',
      proposito: 'Contenedor temporal de los productos que el cliente intenta comprar.',
      atributos: ['items[]', 'subtotal', 'descuento', 'total'],
      relaciones: ['contiene muchos ItemCarrito', 'pertenece a una sesión de usuario'],
    },
    {
      nombre: 'ItemCarrito',
      proposito: 'Línea individual del carrito. Relaciona un Producto con la cantidad deseada.',
      atributos: ['producto', 'cantidad', 'precioUnitario', 'subtotal'],
      relaciones: ['referencia un Producto', 'pertenece a un Carrito'],
    },
    {
      nombre: 'Pedido',
      proposito: 'Resultado de finalizar la compra. Inmutable una vez creado.',
      atributos: ['id', 'items[]', 'total', 'fecha', 'estado'],
      relaciones: ['se origina en un Carrito', 'pertenece a un Cliente (cuando aplique)'],
    },
  ];

  protected readonly metaforas: ReadonlyArray<Metafora> = [
    {
      elegido: 'Carrito',
      descartado: 'Cesta · Bolsa',
      razon: 'Estándar en e-commerce. Reconocible sin glosa.',
    },
    {
      elegido: 'Catálogo',
      descartado: 'Tienda · Productos',
      razon: 'Sugiere curaduría artesanal, no inventario masivo. Coherente con la voz de marca.',
    },
    {
      elegido: 'Añadir al carrito',
      descartado: 'Comprar ahora',
      razon: 'No compromete al cliente: añadir invita a explorar más. La compra se decide en el carrito.',
    },
    {
      elegido: 'Finalizar compra',
      descartado: 'Pagar · Checkout',
      razon: 'Cierre claro del flujo en español natural; evita anglicismo y suaviza la transacción.',
    },
    {
      elegido: 'Etapa',
      descartado: 'Página · Sección · Capítulo',
      razon: 'En el shell académico refuerza la idea de progresión a través del ciclo de diseño.',
    },
  ];
}