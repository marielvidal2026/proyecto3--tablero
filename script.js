// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
  // Función para actualizar los valores dinámicamente si es necesario
  function updateScoreboard(races, points) {
    const racesElement = document.getElementById('races-count');
    const pointsElement = document.getElementById('points-count');

    if (racesElement && pointsElement) {
      racesElement.textContent = races;
      pointsElement.textContent = points;
    }
  }

  // Ejemplo de inicialización o actualización futura
  // updateScoreboard(10, 250);
});