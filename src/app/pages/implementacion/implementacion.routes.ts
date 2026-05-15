import { Routes } from '@angular/router';

export const implementacionRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./implementacion').then((m) => m.ImplementacionPage),
    children: [
      {
        path: '',
        loadComponent: () => import('./catalogo/catalogo').then((m) => m.CatalogoPage),
      },
      {
        path: 'producto/:id',
        loadComponent: () => import('./detalle/detalle').then((m) => m.DetallePage),
      },
      {
        path: 'carrito',
        loadComponent: () => import('./carrito/carrito').then((m) => m.CarritoPage),
      },
    ],
  },
];