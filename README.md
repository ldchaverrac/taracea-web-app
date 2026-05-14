# Taracea Web App

Proyecto académico que expone, de forma interactiva, el **ciclo de vida del diseño de
interfaces de software**. La aplicación es una web app en Angular organizada en 5 pestañas,
donde cada pestaña es una *page* que documenta y muestra una etapa del proceso.

El caso de estudio es una **aplicación de ventas para Taracea**, una empresa que fabrica
muebles. A lo largo de las cinco etapas se construye, de manera progresiva, esa app de
ventas: desde el análisis de requisitos hasta su implementación funcional.

## Objetivo

Servir como demo educativo que evidencia cómo una interfaz evoluciona a través de las
fases clásicas del diseño centrado en el usuario, haciendo tangible cada artefacto
intermedio (requisitos, modelo mental, bocetos, prototipo de alta fidelidad y producto
final) dentro de una misma aplicación.

## Estructura: las 5 pestañas

| # | Pestaña / Page | Qué expone |
|---|----------------|------------|
| 1 | **Análisis de requisitos** | Necesidades, actores, requisitos funcionales y no funcionales de la app de ventas de Taracea. |
| 2 | **Modelo mental** | Cómo entienden el dominio los usuarios: conceptos, flujos esperados y relaciones. |
| 3 | **Prototipado de baja fidelidad** | Bocetos manuales que esbozan estructura y navegación sin detalle visual. |
| 4 | **Prototipado de alta fidelidad** | Diseño visual detallado: layout, color, tipografía e interacción ya definidos. |
| 5 | **Implementación** | El sitio web de ventas de Taracea funcionando como tal. |

## Caso de estudio: Taracea

Taracea es una empresa (ficticia, para fines académicos) dedicada a la construcción de
muebles. La app de ventas que se diseña e implementa en la pestaña 5 es el producto final
que justifica todo el recorrido de las etapas anteriores.

## Stack

- **Angular 21** (standalone components, Angular CLI 21.0.4)
- **TypeScript 5.9**
- **SCSS** para estilos
- **Vitest** como test runner

## Puesta en marcha

### Requisitos previos

- Node.js (compatible con Angular 21)
- npm 11+

### Instalación

```bash
npm install
```

### Servidor de desarrollo

```bash
npm start
```

Luego abre `http://localhost:4200/`. La aplicación se recarga automáticamente al
modificar los archivos fuente.

### Build de producción

```bash
npm run build
```

Los artefactos quedan en el directorio `dist/`.

### Pruebas unitarias

```bash
npm test
```

## Estado del proyecto

En construcción. Próximas iteraciones incorporarán:

- Línea de colores básica del sistema
- Logos
- Tipografía
- Análisis de requisitos (ficticio) que alimentará la primera page

## Estructura del repositorio

```
src/
  app/
    app.ts            # Componente raíz
    app.routes.ts     # Rutas (una por cada pestaña/page)
    app.config.ts     # Configuración de la aplicación
  styles.scss         # Estilos globales
public/               # Recursos estáticos
```
