# Documento de Requisitos de la Interfaz Gráfica de Usuario (GUI) — Taracea

Este documento define los requisitos de la interfaz para el **sitio web de ventas de muebles Taracea**. Forma parte de un caso de estudio académico sobre el ciclo de vida del diseño de interfaces y se materializa en la pestaña 5 ("Implementación") de la aplicación, a partir de los artefactos generados en las pestañas previas (análisis, modelo mental, prototipos lo-fi y hi-fi).

> **Audiencia objetivo:** clientes que buscan muebles artesanales — sala, comedor y dormitorio — y valoran el diseño honesto, los materiales nobles y la elegancia atemporal.

---

## 1. Identidad de marca y estética visual

### 1.1. Logotipo

El kit de marca vive en `assets/TARACEA - MARCA/` e incluye variantes en negro, blanco y en cada uno de los tres colores corporativos (`LOGO AGUA MARINA PNG.png`, `LOGO BERENJENA PNG.png`, `LOGO MOSTAZA PNG.png`).

- **Header:** versión a color sobre fondo claro, o versión blanca sobre fondo oscuro.
- **Footer:** versión monocromática (blanca sobre berenjena).
- **Ubicación:** extremo superior izquierdo en todas las vistas.
- **Comportamiento:** al hacer clic, navega a la ruta raíz (`/`) — catálogo principal.
- **Tamaños mínimos:** 32 px de alto en mobile, 48 px en desktop. Conservar proporción original.
- **Espacio de respeto:** margen libre equivalente como mínimo a la altura del logotipo en sus cuatro lados.

### 1.2. Paleta de colores

Tres colores corporativos articulan toda la experiencia visual:

| Token CSS | Hex | Nombre de marca | Uso |
|---|---|---|---|
| `--color-berenjena` | `#4d284a` | Berenjena | **Primario.** Textos principales, fondos de header/footer, encabezados, elementos persistentes de marca. |
| `--color-agua-marina` | `#03989e` | Agua marina | **Acento principal.** Botones primarios, enlaces, anillo de foco, estados activos y de selección. |
| `--color-mostaza` | `#eab306` | Mostaza | **Acento secundario.** Precios destacados, badges, etiquetas promocionales, micro-detalles. |

**Colores funcionales (derivados, no de marca):**

| Token CSS | Hex | Uso |
|---|---|---|
| `--color-fondo` | `#FAFAF7` | Fondo de página (crema neutra). |
| `--color-superficie` | `#FFFFFF` | Tarjetas, paneles, modales. |
| `--color-texto` | `#212121` | Cuerpo de texto en superficies claras. |
| `--color-texto-suave` | `#5E5E5E` | Texto secundario, captions, placeholders. |
| `--color-borde` | `#E0DCD6` | Divisores, bordes de input, separadores. |
| `--color-exito` / `--color-error` / `--color-advertencia` | verde / rojo / ámbar estándar | Estados, siempre con contraste WCAG AA sobre el fondo. |

**Reglas de uso:**

- No combinar berenjena sobre agua marina ni viceversa (contraste insuficiente).
- Mostaza únicamente en áreas pequeñas: precios, badges, micro-detalles. **Nunca** como fondo de bloques de texto.
- Todos los colores deben declararse como **variables CSS en `src/styles.scss`** y consumirse desde ahí; nunca hardcodearlos en componentes.

### 1.3. Tipografía

El cliente especifica dos familias propias, cuyos archivos vienen en `assets/TARACEA - MARCA/`:

| Familia | Archivo | Uso |
|---|---|---|
| **Seebad LT Std** | `Seebad-LT-Std_39942.ttf` | Títulos (H1–H3), nombre de marca, encabezados de sección. Aporta carácter editorial. |
| **PlateletHeavy** | `PlateletHeavy.ttf` | Acentos puntuales: precios, números destacados, etiquetas cortas. **No usar en párrafos.** |
| *Sistema (fallback)* | — | Cuerpo, párrafos, formularios. Stack: `system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`. |

- Las fuentes propias deben cargarse vía `@font-face` desde una ruta servida por el build. Como `angular.json` solo expone `public/` como assets, las fuentes deben **moverse a `public/fonts/`** o `angular.json` debe extenderse para incluir `assets/TARACEA - MARCA/`.
- **Tamaño base:** 16 px en mobile, 17 px en desktop. Escala tipográfica 1.25 (mayor tercera): 16 → 20 → 25 → 31 → 39 → 49.
- **Interlineado:** 1.5 para cuerpo, 1.15 para títulos.
- **Pesos:** usar únicamente las variantes provistas por el cliente; no simular pesos faltantes con `font-weight`.

### 1.4. Iconografía

- Un único set, consistente en estilo (sugerido: **Material Symbols Outlined** o **Phosphor Regular**).
- Tamaño base 24 px; los íconos heredan `currentColor`.
- No mezclar estilos (outline + sólido) en la misma vista.

---

## 2. Arquitectura de información y navegación

La aplicación de ventas se compone de cuatro vistas principales:

| Vista | Ruta | Descripción |
|---|---|---|
| Catálogo | `/` | Vista por defecto. Listado filtrable de productos. |
| Detalle de producto | `/producto/:id` | Ficha individual con galería, descripción y acción de compra. |
| Carrito | `/carrito` | Resumen de ítems seleccionados y acceso al checkout. |
| Resumen de compra | `/compra/resumen` | Confirmación final. *Reservada para versión futura.* |

Todas las vistas comparten un **layout global**: header fijo, contenido scrolleable, footer al pie.

---

## 3. Componentes de la GUI

### 3.1. Header global

Persistente en todas las vistas. Estructura en tres áreas:

- **Izquierda:** logotipo (link al catálogo).
- **Centro:** barra de búsqueda — input con ícono de lupa a la izquierda, placeholder `"Buscar muebles…"`. Filtra el catálogo en tiempo real con debounce de 250 ms.
- **Derecha:** ícono de carrito con badge (contador de ítems). El badge solo aparece cuando hay ≥ 1 ítem.

En mobile (< 768 px) la búsqueda se colapsa detrás de un ícono de lupa que la despliega a ancho completo.

### 3.2. Catálogo de productos

- **Layout:** grilla de tarjetas. Columnas responsivas: 1 (mobile), 2 (tablet), 3 (desktop ≥ 1024 px), 4 (wide ≥ 1440 px).
- **Tarjeta de producto:**
  - Imagen miniatura en relación 4:3 (`object-fit: cover`).
  - Nombre en Seebad LT Std, color berenjena.
  - Precio en PlateletHeavy, color berenjena.
  - Hover: leve elevación (sombra suave) + `cursor: pointer`. Click navega al detalle.
- **Filtros:** sidebar lateral en desktop, sheet desplegable en mobile. Categorías (Salas, Comedores, Dormitorios), rango de precio, materiales.
- **Estado vacío:** ilustración + mensaje `"No encontramos muebles que coincidan con tu búsqueda"` + botón "Limpiar filtros".

### 3.3. Detalle de producto

- **Galería:** imagen principal grande (4:3) con miniaturas debajo. Click en una miniatura cambia la principal.
- **Panel de información** (derecha en desktop, debajo de la galería en mobile):
  - Título en Seebad LT Std, H1.
  - Categoría y SKU en texto secundario.
  - Descripción detallada: materiales, dimensiones (alto × ancho × profundidad), peso, tiempo estimado de fabricación/entrega.
  - Selector de cantidad: `−` / número / `+`. Mínimo 1.
  - Precio total calculado (unitario × cantidad), en PlateletHeavy.
  - **Acción primaria** "Añadir al carrito": fondo agua marina, texto blanco, ancho completo del panel.

### 3.4. Carrito

- **Lista de ítems:** miniatura, nombre, precio unitario, control de cantidad, subtotal por ítem, botón "Eliminar" (ícono de papelera).
- **Resumen** (sticky en desktop, fijo al pie en mobile):
  - Subtotal.
  - Envío (placeholder, "se calcula al finalizar").
  - **Total** en Seebad LT Std, tamaño grande.
  - Campo "Código de descuento" + botón "Aplicar".
  - **Acción primaria** "Finalizar compra": fondo agua marina.
- **Estado vacío:** `"Tu carrito está vacío"` + botón "Explorar catálogo".

### 3.5. Footer global

- Tres columnas en desktop, apiladas en mobile:
  - **Marca:** logotipo en variante blanca + tagline breve.
  - **Navegación:** Catálogo, Sobre nosotros, Contacto.
  - **Contacto:** dirección, teléfono, redes sociales.
- Fondo berenjena, texto en `--color-fondo`.

### 3.6. Estados compartidos

- **Cargando:** skeleton placeholders para listas y tarjetas; spinner pequeño para acciones puntuales (p. ej. añadir al carrito).
- **Error:** banner con borde y texto en tono advertencia; siempre con acción de reintento.
- **Vacío:** ilustración o ícono, mensaje claro, acción sugerida.

---

## 4. Requisitos no funcionales

### 4.1. Responsividad

Breakpoints:

| Nombre | Rango |
|---|---|
| Mobile | < 768 px |
| Tablet | 768 – 1023 px |
| Desktop | 1024 – 1439 px |
| Wide | ≥ 1440 px |

Sin scroll horizontal en ninguna resolución soportada. Tipografía e imágenes escalables.

### 4.2. Accesibilidad

- Cumplir **WCAG 2.1 nivel AA**: contraste de texto ≥ 4.5:1, foco visible siempre, navegación por teclado completa.
- `alt` descriptivo en todas las imágenes de productos.
- `label` asociado a cada input. Errores anunciados con `aria-live="polite"`.
- Áreas táctiles mínimo 44 × 44 px en mobile.

### 4.3. Feedback visual y microinteracciones

- Botones con estados explícitos: normal, hover, activo, foco (anillo agua marina 2 px), deshabilitado.
- Transiciones ≤ 200 ms en hover, cambios de estado y aparición de elementos.
- Toast/snackbar de confirmación al añadir al carrito (auto-dismiss en 3 s).

### 4.4. Performance

- **LCP < 2.5 s** en conexión 4G simulada.
- Imágenes en formato moderno (WebP / AVIF) con `loading="lazy"`, excepto la primera fila visible.
- Bundle inicial ≤ 500 KB (alineado con el budget de `angular.json`).

### 4.5. Internacionalización

- Copy en español. Estructurar los strings de UI en constantes o archivos de mensajes para facilitar una futura extracción a i18n.

---

## 5. Fuera de alcance (versión 1)

- Cuenta de usuario / login.
- Pasarela de pago real (la confirmación de compra queda como mock).
- Búsqueda con autocompletado y sugerencias.
- Reseñas y valoraciones de productos.
- Disponibilidad en tiempo real / inventario por sucursal.