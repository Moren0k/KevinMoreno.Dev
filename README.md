# Portafolio de Jhos Kevin Agudelo Moreno

**Paleta de colores:**

1. #262526
2. #f3f3f3
3. #5e17eb

## 📁 Estructura de Carpetas - Portafolio Web

    portfolio/
    │
    ├── index.html # Página principal (Inicio)
    ├── about.html # Página "Sobre mí"
    ├── contact.html # Página de contacto
    ├── projects.html # Página de proyectos
    │
    ├── assets/ # Archivos estáticos
    │   ├── css/ # Estilos CSS
    │   │     └── style.css
    │   ├── js/ # Scripts JavaScript
    │   │     └── main.js
    │   └── img/ # Imágenes del sitio
    │
    ├── components/ # Partes reutilizables (navbar,footer,etc.)
    │   └── navbar.html
    │
    └── README.md # Documentación del proyecto

### Reciclaje de Header y Footer con JS Externo

    portfolio/
    ├── index.html
    ├── about.html
    ├── projects.html
    ├── contact.html
    ├── components/
    │   ├── header.html
    │   └── footer.html
    └── assets/
        └── js/
            └── load-components.js

Se implementó la carga dinámica del header y footer desde archivos externos ubicados en components/, usando un script en assets/js/load-components.js. Así se evita repetir código y se facilita el mantenimiento del proyecto.
