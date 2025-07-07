# Portafolio de Jhos Kevin Agudelo Moreno

## 📁 Estructura de Carpetas - Portafolio Web

    KevinMoreno.Dev/
    │
    ├── index.html                  # Página principal
    ├── README.md                   # Información del proyecto
    │
    ├── assets/
    │   ├── css/
    │   │   ├── styles.css          # Estilos generales
    │   │   └── about.css           # Estilos específicos para la página About
    │   │
    │   ├── js/
    │   │   ├── load-components.js  # Script que carga componentes dinámicamente
    │   │   └── main.js             # JS principal del sitio
    │   │
    │   └── img/                    # Imágenes del sitio
    │       └── svg/                # SVGs si tienes
    │
    ├── pages/
    │   ├── about.html              # Página "About Me"
    │   │
    │   └── components/             # Componentes HTML reutilizables
    │       ├── header.html
    │       ├── hero.html
    │       ├── projects.html
    │       ├── contact.html
    │       └── footer.html

    
### Reciclaje de código HTML con JS Externo

Se implementó la carga dinámica del (header, hero, projects, contact, footer) desde archivos externos ubicados en [components/], usando un script en [assets/js/load-components.js]. Así se evita repetir código y se facilita el mantenimiento del proyecto.

    KevinMoreno.Dev/
    │
    ├── index.html # Página principal
    ├── README.md  # Información sobre el proyecto
    │
    ├── assets/
    │       ├── js/
    │            └── load-components.js
    |
    └── components/
            ├── header.html
            ├── hero.html 
            ├── projects.html 
            ├── contact.html
            └── footer.html

**Paleta de colores:**

1. #262526
2. #f3f3f3
3. #5e17eb

Iconos svg:
[text](https://simpleicons.org/)
