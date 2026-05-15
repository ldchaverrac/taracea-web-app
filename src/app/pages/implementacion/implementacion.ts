import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CarritoService } from './servicios/carrito.service';
import { BusquedaService } from './servicios/busqueda.service';

@Component({
  selector: 'app-implementacion',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './implementacion.html',
  styleUrl: './implementacion.scss',
})
export class ImplementacionPage {
  protected readonly carrito = inject(CarritoService);
  protected readonly busqueda = inject(BusquedaService);

  protected onBusquedaInput(evento: Event): void {
    const valor = (evento.target as HTMLInputElement).value;
    this.busqueda.texto.set(valor);
  }
}