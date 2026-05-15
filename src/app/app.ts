import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

interface Etapa {
  numero: number;
  ruta: string;
  titulo: string;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly etapas: ReadonlyArray<Etapa> = [
    { numero: 1, ruta: '/analisis-requisitos', titulo: 'Análisis de requisitos' },
    { numero: 2, ruta: '/modelo-mental', titulo: 'Modelo mental' },
    { numero: 3, ruta: '/prototipo-lo-fi', titulo: 'Prototipado de baja fidelidad' },
    // Etapa 4 (Prototipado de alta fidelidad) oculta de la nav, accesible vía /prototipo-hi-fi.
    { numero: 5, ruta: '/implementacion', titulo: 'Implementación' },
    { numero: 6, ruta: '/evolucion-mantenimiento', titulo: 'Evolución y mantenimiento' },
  ];
}