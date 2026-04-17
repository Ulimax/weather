async function searchWeather() {
  const city = document.getElementById('city').value;
  const result = document.getElementById('result');

  result.innerHTML = '⏳ Buscando...';

  try {
    const response = await fetch(`/api/weather/${city}`);
    const data = await response.json();

    if (data.error) {
      result.innerHTML = `<p>${data.error}</p>`;
      return;
    }

    result.innerHTML = `
      <div class="city">${data.ciudad}, ${data.pais}</div>
      <div class="temp">${data.temperatura}°C</div>
      <div class="desc">${data.descripcion}</div>
      <div class="extra">💧 Humedad: ${data.humedad}%</div>
    `;

  } catch (error) {
    result.innerHTML = '❌ Error al consultar';
  }
}