import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarritoService } from '../servicios/carrito.service';
import { PrecioPipe } from '../utilidades/precio.pipe';

@Component({
  selector: 'app-carrito',
  imports: [RouterLink, PrecioPipe],
  templateUrl: './carrito.html',
  styleUrl: './carrito.scss',
})
export class CarritoPage {
  protected readonly carrito = inject(CarritoService);

  protected readonly mostrarConfirmacion = signal(false);

  protected readonly total = computed(() => this.carrito.subtotal());

  protected cambiar(id: string, delta: number): void {
    const item = this.carrito.items().find((i) => i.producto.id === id);
    if (!item) return;
    this.carrito.cambiarCantidad(id, item.cantidad + delta);
  }

  protected eliminar(id: string): void {
    this.carrito.eliminar(id);
  }

  protected finalizarCompra(): void {
    this.mostrarConfirmacion.set(true);
    this.carrito.vaciar();
  }
}