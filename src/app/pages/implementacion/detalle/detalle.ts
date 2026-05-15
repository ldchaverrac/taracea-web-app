import { Component, computed, inject, input, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { buscarProducto } from '../data/productos';
import { CarritoService } from '../servicios/carrito.service';
import { PrecioPipe } from '../utilidades/precio.pipe';

@Component({
  selector: 'app-detalle',
  imports: [RouterLink, PrecioPipe],
  templateUrl: './detalle.html',
  styleUrl: './detalle.scss',
})
export class DetallePage {
  private readonly router = inject(Router);
  protected readonly carrito = inject(CarritoService);

  readonly id = input.required<string>();

  protected readonly producto = computed(() => buscarProducto(this.id()));
  protected readonly cantidad = signal(1);
  protected readonly subtotal = computed(() => {
    const p = this.producto();
    return p ? p.precio * this.cantidad() : 0;
  });

  protected incrementar(): void {
    this.cantidad.update((n) => n + 1);
  }

  protected decrementar(): void {
    this.cantidad.update((n) => Math.max(1, n - 1));
  }

  protected anadir(): void {
    const p = this.producto();
    if (!p) return;
    this.carrito.agregar(p, this.cantidad());
    this.router.navigate(['/implementacion/carrito']);
  }
}