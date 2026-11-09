# AURA — Núcleo de Resonancia Biométrica

Landing page interactiva para AURA, una propuesta de tecnología adaptativa
orientada a la concentración, el aprendizaje personalizado, la creatividad y
el bienestar.

La interfaz presenta una experiencia visual basada en una red neuronal animada,
un orbe luminoso y una paleta de colores cian, verde y violeta. Está construida
con HTML, CSS y JavaScript modular, sin dependencias de compilación ni
frameworks.

## Funcionalidades

- Diseño responsive para dispositivos móviles y escritorio.
- Navegación por secciones: Inicio, Sobre AURA, Equipo, Servicios y Contacto.
- Fondo interactivo de partículas y conexiones mediante `<canvas>`.
- Cambio entre tema oscuro y tema claro.
- Reproductor de audio ambiental con control de reproducción y pausa.
- Formulario de contacto con validación básica y sanitización de nombre y
  mensaje.
- Arquitectura JavaScript dividida por responsabilidades.

## Tecnologías

- HTML5
- CSS3
- JavaScript ES Modules
- Canvas 2D
- Audio HTML5

## Requisitos

- Un navegador moderno con soporte para módulos ES (`type="module"`).
- Un servidor HTTP local para ejecutar la aplicación. No se requiere Node.js,
  npm ni un proceso de compilación.

## Ejecución local

Debido a que la aplicación utiliza módulos ES, se recomienda abrirla mediante
un servidor local en lugar de hacerlo directamente con `file://`.

### Opción 1: Python

Desde la raíz del proyecto:

```bash
python -m http.server 8000
```

Después, abre [http://localhost:8000](http://localhost:8000) en el navegador.

### Opción 2: Visual Studio Code

1. Instala la extensión **Live Server**.
2. Abre la carpeta del proyecto en Visual Studio Code.
3. Haz clic derecho en `index.html`.
4. Selecciona **Open with Live Server**.

## Estructura del proyecto

```text
Landing_aura/
├── index.html
├── README.md
├── assets/
│   ├── audio/
│   │   └── Notes_in_the_Margin.mp3
│   └── img/
│       ├── orb-hero.png
│       ├── orb-small.png
│       └── teamwork.jpg
├── css/
│   ├── bootstrap.min.css
│   └── styles.css
└── js/
    ├── app.js
    ├── config/
    │   └── colors.js
    └── modules/
        ├── audio-player.js
        ├── form-handler.js
        ├── neuronal-network.js
        └── theme-switcher.js
```

## Arquitectura JavaScript

- `js/app.js`: punto de entrada que inicializa todos los módulos cuando el DOM
  está listo.
- `js/modules/neuronal-network.js`: crea y anima las partículas del fondo,
  incluyendo su interacción con el puntero.
- `js/modules/audio-player.js`: controla la reproducción del audio ambiental y
  actualiza el estado accesible del botón.
- `js/modules/theme-switcher.js`: alterna los temas claro y oscuro mediante el
  atributo `data-theme` del elemento `<html>`.
- `js/modules/form-handler.js`: valida los campos requeridos, aplica
  sanitización básica y muestra el resultado del envío.
- `js/config/colors.js`: centraliza los colores usados por la red neuronal.

## Formulario de contacto

Actualmente el formulario funciona en modo demostración: valida los datos,
muestra un mensaje de confirmación y escribe los datos en la consola del
navegador. No existe todavía un backend ni un servicio de envío de correos.

Para conectarlo a una API, se debe reemplazar la sección indicada en
`js/modules/form-handler.js` por una llamada `fetch()` y gestionar los estados
de carga, éxito y error.

## Personalización

- Modifica las variables CSS de `css/styles.css` para cambiar colores,
  tipografías, espaciado y estilos de los temas.
- Actualiza `js/config/colors.js` para cambiar los colores de partículas y
  conexiones del canvas.
- Sustituye `assets/audio/Notes_in_the_Margin.mp3` por otro archivo compatible
  con audio HTML5 y actualiza la ruta en `index.html` si cambia el nombre.
- Edita el contenido de las secciones directamente en `index.html`.

## Estado del proyecto

Este repositorio contiene una landing page frontend. La integración con un
backend, el envío real del formulario y la persistencia de preferencias aún no
están implementados.