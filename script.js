function mostrarSeccion(id) {
  // Ocultar todas las secciones
  const secciones = document.querySelectorAll('.seccion');
  secciones.forEach(sec => sec.classList.remove('activa'));

  // Mostrar la sección seleccionada
  const seccionActiva = document.getElementById(id);
  if (seccionActiva) {
    seccionActiva.classList.add('activa');
  }
}

// Mostrar COLOMBIA por defecto al cargar
document.addEventListener("DOMContentLoaded", () => {
  mostrarSeccion("COLOMBIA");
});
