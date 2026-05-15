export type CategoriaId = 'salas' | 'comedores' | 'dormitorios';
export type ColorMarca = 'berenjena' | 'agua-marina' | 'mostaza';

export interface Producto {
  readonly id: string;
  readonly nombre: string;
  readonly precio: number;
  readonly categoria: CategoriaId;
  readonly descripcion: string;
  readonly materiales: ReadonlyArray<string>;
  readonly dimensiones: { readonly alto: number; readonly ancho: number; readonly profundidad: number };
  readonly tiempoEntrega: string;
  readonly colorMarca: ColorMarca;
}

export interface Categoria {
  readonly id: CategoriaId;
  readonly nombre: string;
}

export const CATEGORIAS: ReadonlyArray<Categoria> = [
  { id: 'salas', nombre: 'Salas' },
  { id: 'comedores', nombre: 'Comedores' },
  { id: 'dormitorios', nombre: 'Dormitorios' },
];

export const PRODUCTOS: ReadonlyArray<Producto> = [
  {
    id: 'sofa-ebano',
    nombre: 'Sofá Ébano',
    precio: 4250000,
    categoria: 'salas',
    descripcion:
      'Sofá de tres puestos en estructura de roble macizo, tapizado en lino natural color crema. Cojines independientes con relleno de pluma.',
    materiales: ['Roble macizo', 'Lino natural', 'Pluma'],
    dimensiones: { alto: 85, ancho: 220, profundidad: 95 },
    tiempoEntrega: '6 a 8 semanas',
    colorMarca: 'berenjena',
  },
  {
    id: 'mesa-centro-roble',
    nombre: 'Mesa de centro Roble',
    precio: 1480000,
    categoria: 'salas',
    descripcion:
      'Mesa baja en madera de roble con acabado natural al aceite. Patas torneadas y bandeja inferior para revistas.',
    materiales: ['Roble macizo', 'Aceite natural'],
    dimensiones: { alto: 45, ancho: 120, profundidad: 60 },
    tiempoEntrega: '4 a 6 semanas',
    colorMarca: 'mostaza',
  },
  {
    id: 'mecedora-junco',
    nombre: 'Mecedora Junco',
    precio: 980000,
    categoria: 'salas',
    descripcion:
      'Mecedora artesanal con asiento tejido en junco natural y estructura curvada en cedro.',
    materiales: ['Cedro', 'Junco tejido a mano'],
    dimensiones: { alto: 105, ancho: 60, profundidad: 90 },
    tiempoEntrega: '5 a 7 semanas',
    colorMarca: 'agua-marina',
  },
  {
    id: 'mesa-familiar-nogal',
    nombre: 'Mesa familiar Nogal',
    precio: 5200000,
    categoria: 'comedores',
    descripcion:
      'Mesa de comedor para ocho puestos en nogal americano, tablero de una sola pieza y patas trapezoidales.',
    materiales: ['Nogal americano', 'Cera de abejas'],
    dimensiones: { alto: 75, ancho: 240, profundidad: 100 },
    tiempoEntrega: '8 a 10 semanas',
    colorMarca: 'berenjena',
  },
  {
    id: 'silla-tejido-set',
    nombre: 'Sillas Tejido (set de 4)',
    precio: 2100000,
    categoria: 'comedores',
    descripcion:
      'Conjunto de cuatro sillas con estructura de cedro y respaldo tejido en cuerda algodón.',
    materiales: ['Cedro', 'Cuerda de algodón'],
    dimensiones: { alto: 90, ancho: 45, profundidad: 50 },
    tiempoEntrega: '6 a 8 semanas',
    colorMarca: 'mostaza',
  },
  {
    id: 'aparador-mostaza',
    nombre: 'Aparador Mostaza',
    precio: 3380000,
    categoria: 'comedores',
    descripcion:
      'Aparador de cuatro puertas en roble teñido con detalles en herraje de bronce envejecido.',
    materiales: ['Roble teñido', 'Bronce envejecido'],
    dimensiones: { alto: 90, ancho: 180, profundidad: 50 },
    tiempoEntrega: '7 a 9 semanas',
    colorMarca: 'agua-marina',
  },
  {
    id: 'cama-nido',
    nombre: 'Cama doble Nido',
    precio: 3950000,
    categoria: 'dormitorios',
    descripcion:
      'Cama doble con cabecero acolchado en lino y estructura baja en madera de teca.',
    materiales: ['Teca', 'Lino natural'],
    dimensiones: { alto: 95, ancho: 160, profundidad: 210 },
    tiempoEntrega: '7 a 9 semanas',
    colorMarca: 'berenjena',
  },
  {
    id: 'mesa-noche-cedro',
    nombre: 'Mesa de noche Cedro',
    precio: 720000,
    categoria: 'dormitorios',
    descripcion:
      'Mesa de noche compacta con un cajón y nicho inferior, en cedro con acabado mate.',
    materiales: ['Cedro', 'Laca mate'],
    dimensiones: { alto: 55, ancho: 45, profundidad: 40 },
    tiempoEntrega: '4 a 6 semanas',
    colorMarca: 'mostaza',
  },
  {
    id: 'comoda-cuatro-cajones',
    nombre: 'Cómoda 4 cajones',
    precio: 2640000,
    categoria: 'dormitorios',
    descripcion:
      'Cómoda alta con cuatro cajones de cierre suave, tiradores de cuero y estructura en roble claro.',
    materiales: ['Roble claro', 'Cuero curtido', 'Acero'],
    dimensiones: { alto: 110, ancho: 90, profundidad: 50 },
    tiempoEntrega: '6 a 8 semanas',
    colorMarca: 'agua-marina',
  },
];

export function buscarProducto(id: string): Producto | undefined {
  return PRODUCTOS.find((p) => p.id === id);
}