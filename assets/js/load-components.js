// Función para cargar un componente HTML en un contenedor
function loadHTML(url, elementId) {
  fetch(url)
    .then(res => res.text())
    .then(data => {
      document.getElementById(elementId).innerHTML = data;
    })
    .catch(err => console.error(`Error cargando ${url}:`, err));
}

// Detectar base path según ubicación de la página actual
const basePath = window.location.pathname.includes('/pages/') ? 'components/' : 'pages/components/';

document.addEventListener('DOMContentLoaded', () => {
  loadHTML(basePath + 'header.html', 'header-placeholder');
  loadHTML(basePath + 'footer.html', 'footer-placeholder');
  loadHTML(basePath + 'projects.html', 'projects-placeholder');
  loadHTML(basePath + 'hero.html', 'hero-placeholder');
  loadHTML(basePath + 'contact.html', 'contact-placeholder');
});