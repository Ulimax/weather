/**
 * Obtiene la información meteorológica actual de una ciudad utilizando
 * la API de OpenWeather y devuelve una respuesta simplificada.
 *
 * La función realiza una consulta HTTP a OpenWeather usando el nombre
 * de la ciudad proporcionado y transforma la respuesta para devolver
 * solo los datos relevantes para la aplicación.
 *
 * @async
 * @function getWeatherByCity
 *
 * @param {string} city - Nombre de la ciudad que se desea consultar.
 * Debe ser una cadena válida, por ejemplo:
 * "Madrid", "Ciudad de México", "Buenos Aires".
 *
 * @returns {Promise<Object>} Promesa que resuelve con un objeto JSON
 * con la información del clima actual.
 *
 * Estructura del objeto retornado:
 * {
 *   ciudad: string,
 *   pais: string,
 *   temperatura: number,
 *   descripcion: string,
 *   humedad: number
 * }
 *
 * @property {string} ciudad - Nombre de la ciudad encontrada.
 * @property {string} pais - Código del país (ISO 3166-1 alpha-2).
 * @property {number} temperatura - Temperatura actual en grados Celsius.
 * @property {string} descripcion - Descripción textual del clima.
 * @property {number} humedad - Porcentaje de humedad actual.
 *
 * @throws {Error} Lanza un error en los siguientes casos:
 * - Si la ciudad no existe.
 * - Si la API no responde correctamente.
 * - Si ocurre un problema de red.
 * - Si no se proporciona una ciudad válida.
 *
 * @example
 * const weather = await getWeatherByCity('Madrid');
 *
 * console.log(weather);
 *
 *  Resultado:
 * {
 *   ciudad: 'Madrid',
 *   pais: 'ES',
 *   temperatura: 13.23,
 *   descripcion: 'muy nuboso',
 *   humedad: 58
 * }
 */

const { apiKey } = require('../config/env');
const { getCache, setCache } = require('../utils/cache');

const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

exports.getWeatherByCity = async (city) => {
  // Validar entrada
  if (!city || typeof city !== 'string' || city.trim() === '') {
    throw new Error('Debes ingresar una ciudad válida.');
  }

  const cityName = city.trim();

  // 1. Buscar en caché
  const cachedData = getCache(cityName);

  if (cachedData) {
    console.log('⚡ Respuesta desde caché');
    return cachedData;
  }

  const url =
    `${BASE_URL}?q=${encodeURIComponent(cityName)}&appid=${apiKey}&units=metric&lang=es`;

  try {
    const response = await fetch(url);

    const data = await response.json();

    if (!response.ok) {
      const message = data.message || 'No fue posible consultar la ciudad.';
      throw new Error(message);
    }

    const result = { ciudad: data.name, pais: data.sys.country, temperatura: data.main.temp, descripcion: data.weather[0].description, humedad: data.main.humidity };
     // 3. Guardar 5 minutos
    setCache(cityName, result, 300000);
    console.log('🌍 Respuesta desde OpenWeather'); return result;

  } catch (error) {
    throw new Error(`Error al obtener clima: ${error.message}`);
  }
};