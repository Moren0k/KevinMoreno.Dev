// Función para cargar un componente HTML en un contenedor
function loadHTML(url, elementId) {
  fetch(url)
    .then(res => res.text())
    .then(data => {
      document.getElementById(elementId).innerHTML = data;
    })
    .catch(err => console.error(`Error cargando ${url}:`, err));
}

// Cargar header y footer
document.addEventListener('DOMContentLoaded', () => {
    // Cargar header
  loadHTML('components/header.html', 'header-placeholder'); 
    // Cargar footer
  loadHTML('components/footer.html', 'footer-placeholder');
    // Cargar projects
  loadHTML('components/projects.html', 'projects-placeholder');
    // Cargar Hero
  loadHTML('components/hero.html', 'hero-placeholder')
    // Cargar Contact
  loadHTML('components/contact.html','contact-placeholder')
});