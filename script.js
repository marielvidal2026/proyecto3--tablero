// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {

  function updateScoreboard(races, points) {
    const racesElement = document.getElementById('races-count');
    const pointsElement = document.getElementById('points-count');

    if (racesElement && pointsElement) {
      racesElement.textContent = races;
      pointsElement.textContent = points;
    }
  }

  // Actualizar estadísticas al hacer clic
  document.addEventListener('click', () => {
    updateScoreboard(10, 250);
  });

});