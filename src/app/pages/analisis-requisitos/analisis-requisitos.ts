import { Component } from '@angular/core';

interface ColorMarca {
  readonly nombre: string;
  readonly hex: string;
  readonly rol: string;
  readonly cssVar: string;
  readonly clase: string;
}

interface Tipografia {
  readonly nombre: string;
  readonly archivo: string;
  readonly uso: string;
  readonly claseDemo: string;
}

interface RutaApp {
  readonly vista: string;
  readonly ruta: string;
  readonly descripcion: string;
}

interface ComponentePrincipal {
  readonly titulo: string;
  readonly descripcion: string;
  readonly detalles: ReadonlyArray<string>;
}

interface RequisitoNoFuncional {
  readonly titulo: string;
  readonly detalles: ReadonlyArray<string>;
}

@Component({
  selector: 'app-analisis-requisitos',
  templateUrl: './analisis-requisitos.html',
  styleUrl: './analisis-requisitos.scss',
})
export class AnalisisRequisitosPage {
  protected readonly colores: ReadonlyArray<ColorMarca> = [
    {
      nombre: 'Berenjena',
      hex: '#4d284a',
      rol: 'Primario · textos, marca, fondos persistentes',
      cssVar: '--color-berenjena',
      clase: 'paleta__muestra--berenjena',
    },
    {
      nombre: 'Agua marina',
      hex: '#03989e',
      rol: 'Acento principal · acciones, enlaces, foco',
      cssVar: '--color-agua-marina',
      clase: 'paleta__muestra--agua-marina',
    },
    {
      nombre: 'Mostaza',
      hex: '#eab306',
      rol: 'Acento secundario · precios, badges, micro-detalles',
      cssVar: '--color-mostaza',
      clase: 'paleta__muestra--mostaza',
    },
  ];

  protected readonly tipografias: ReadonlyArray<Tipografia> = [
    {
      nombre: 'Seebad LT Std',
      archivo: 'seebad-lt-std.ttf',
      uso: 'Títulos, encabezados, nombre de marca',
      claseDemo: 'tipografia__demo--titulo',
    },
    {
      nombre: 'Platelet Heavy',
      archivo: 'platelet-heavy.ttf',
      uso: 'Precios, números destacados, etiquetas cortas',
      claseDemo: 'tipografia__demo--acento',
    },
  ];

  protected readonly rutas: ReadonlyArray<RutaApp> = [
    { vista: 'Catálogo', ruta: '/', descripcion: 'Listado filtrable de productos.' },
    {
      vista: 'Detalle de producto',
      ruta: '/producto/:id',
      descripcion: 'Galería, descripción y acción de compra.',
    },
    { vista: 'Carrito', ruta: '/carrito', descripcion: 'Resumen de ítems y checkout.' },
    {
      vista: 'Resumen de compra',
      ruta: '/compra/resumen',
      descripcion: 'Confirmación final. Reservada para versión futura.',
    },
  ];

  protected readonly componentes: ReadonlyArray<ComponentePrincipal> = [
    {
      titulo: 'Header global',
      descripcion: 'Persistente en todas las vistas. Logotipo, búsqueda y acceso al carrito.',
      detalles: [
        'Logotipo a la izquierda con link al catálogo',
        'Barra de búsqueda central con debounce de 250 ms',
        'Ícono de carrito con badge contador (oculto si está vacío)',
        'En mobile la búsqueda se colapsa detrás de un ícono de lupa',
      ],
    },
    {
      titulo: 'Catálogo de productos',
      descripcion: 'Grilla responsiva de tarjetas con filtros laterales.',
      detalles: [
        'Columnas: 1 (mobile) · 2 (tablet) · 3 (desktop) · 4 (wide)',
        'Tarjeta: imagen 4:3, nombre, precio destacado, hover con elevación',
        'Filtros: categorías, rango de precio, materiales',
        'Estado vacío con acción "Limpiar filtros"',
      ],
    },
    {
      titulo: 'Detalle de producto',
      descripcion: 'Ficha individual con galería y panel de información.',
      detalles: [
        'Galería con imagen principal y miniaturas',
        'Título, categoría, descripción de materiales y dimensiones',
        'Selector de cantidad y precio total calculado',
        'Acción primaria "Añadir al carrito" en color agua marina',
      ],
    },
    {
      titulo: 'Carrito',
      descripcion: 'Lista de ítems seleccionados y resumen de pedido.',
      detalles: [
        'Ítem: miniatura, nombre, precio, control de cantidad, eliminar',
        'Resumen sticky en desktop, fijo al pie en mobile',
        'Campo de código de descuento',
        'Acción primaria "Finalizar compra"',
      ],
    },
    {
      titulo: 'Footer global',
      descripcion: 'Tres columnas: marca, navegación y contacto. Fondo berenjena.',
      detalles: [
        'Logotipo en variante blanca + tagline',
        'Enlaces: Catálogo, Sobre nosotros, Contacto',
        'Dirección, teléfono y redes sociales',
      ],
    },
  ];

  protected readonly requisitosNoFuncionales: ReadonlyArray<RequisitoNoFuncional> = [
    {
      titulo: 'Responsividad',
      detalles: [
        'Breakpoints: mobile <768 · tablet 768–1023 · desktop 1024–1439 · wide ≥1440',
        'Sin scroll horizontal en ninguna resolución soportada',
      ],
    },
    {
      titulo: 'Accesibilidad',
      detalles: [
        'Cumplir WCAG 2.1 AA: contraste ≥ 4.5:1, foco visible, navegación por teclado',
        'alt descriptivo en imágenes, label en cada input',
        'Áreas táctiles mínimo 44 × 44 px en mobile',
      ],
    },
    {
      titulo: 'Feedback visual',
      detalles: [
        'Estados explícitos en botones: normal · hover · activo · foco · deshabilitado',
        'Transiciones ≤ 200 ms',
        'Toast de confirmación al añadir al carrito (auto-dismiss en 3 s)',
      ],
    },
    {
      titulo: 'Performance',
      detalles: [
        'LCP < 2.5 s en conexión 4G simulada',
        'Imágenes WebP/AVIF con loading="lazy" salvo la primera fila visible',
        'Bundle inicial ≤ 500 KB',
      ],
    },
  ];

  protected readonly fueraDeAlcance: ReadonlyArray<string> = [
    'Cuenta de usuario / login',
    'Pasarela de pago real (la confirmación queda como mock)',
    'Búsqueda con autocompletado',
    'Reseñas y valoraciones',
    'Inventario en tiempo real por sucursal',
  ];
}