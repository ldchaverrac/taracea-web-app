import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'analisis-requisitos' },
  {
    path: 'analisis-requisitos',
    title: 'Análisis de requisitos · Taracea',
    loadComponent: () =>
      import('./pages/analisis-requisitos/analisis-requisitos').then((m) => m.AnalisisRequisitosPage)
  },
  {
    path: 'modelo-mental',
    title: 'Modelo mental · Taracea',
    loadComponent: () =>
      import('./pages/modelo-mental/modelo-mental').then((m) => m.ModeloMentalPage)
  },
  {
    path: 'prototipo-lo-fi',
    title: 'Prototipado de baja fidelidad · Taracea',
    loadComponent: () =>
      import('./pages/prototipo-lo-fi/prototipo-lo-fi').then((m) => m.PrototipoLoFiPage)
  },
  {
    path: 'prototipo-hi-fi',
    title: 'Prototipado de alta fidelidad · Taracea',
    loadComponent: () =>
      import('./pages/prototipo-hi-fi/prototipo-hi-fi').then((m) => m.PrototipoHiFiPage)
  },
  {
    path: 'implementacion',
    title: 'Implementación · Taracea',
    loadChildren: () =>
      import('./pages/implementacion/implementacion.routes').then((m) => m.implementacionRoutes)
  },
  {
    path: 'evolucion-mantenimiento',
    title: 'Evolución y mantenimiento · Taracea',
    loadComponent: () =>
      import('./pages/evolucion-mantenimiento/evolucion-mantenimiento').then((m) => m.EvolucionMantenimientoPage)
  },
  { path: '**', redirectTo: 'analisis-requisitos' }
];