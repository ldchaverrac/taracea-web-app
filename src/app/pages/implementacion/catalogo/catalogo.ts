import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CategoriaId, CATEGORIAS, PRODUCTOS, Producto } from '../data/productos';
import { BusquedaService } from '../servicios/busqueda.service';
import { CarritoService } from '../servicios/carrito.service';
import { PrecioPipe } from '../utilidades/precio.pipe';

@Component({
  selector: 'app-catalogo',
  imports: [RouterLink, PrecioPipe],
  templateUrl: './catalogo.html',
  styleUrl: './catalogo.scss',
})
export class CatalogoPage {
  protected readonly busqueda = inject(BusquedaService);
  protected readonly carrito = inject(CarritoService);

  protected readonly categorias = CATEGORIAS;
  protected readonly categoriaActiva = signal<CategoriaId | null>(null);

  protected readonly productosFiltrados = computed<ReadonlyArray<Producto>>(() => {
    const texto = this.busqueda.texto().trim().toLowerCase();
    const cat = this.categoriaActiva();
    return PRODUCTOS.filter((p) => {
      if (cat && p.categoria !== cat) return false;
      if (!texto) return true;
      return (
        p.nombre.toLowerCase().includes(texto) ||
        p.materiales.some((m) => m.toLowerCase().includes(texto))
      );
    });
  });

  protected seleccionarCategoria(id: CategoriaId | null): void {
    this.categoriaActiva.set(id);
  }

  protected limpiarFiltros(): void {
    this.categoriaActiva.set(null);
    this.busqueda.limpiar();
  }

  protected agregar(producto: Producto, evento: Event): void {
    evento.preventDefault();
    evento.stopPropagation();
    this.carrito.agregar(producto);
  }
}