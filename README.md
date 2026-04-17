# README.md

# 🌤️ Weather App - Consulta de Clima en Tiempo Real

Aplicación web desarrollada con **Node.js + Express + JavaScript** que permite consultar el clima actual de cualquier ciudad utilizando la API de OpenWeather.

## 📌 Resumen del Proyecto

Esta aplicación permite:

- Buscar clima actual por ciudad
- Mostrar temperatura en °C
- Mostrar descripción meteorológica
- Mostrar humedad actual
- Mostrar país correspondiente
- Consumir API externa desde backend seguro
- Implementar caché para reducir llamadas repetidas

## 🛠 Tecnologías Utilizadas

- Node.js
- Express
- JavaScript
- HTML5
- CSS3
- OpenWeather API
- dotenv

## 📥 Instalación

```bash
git clone https://github.com/tuusuario/weather-app.git
cd weather-app
npm install
```

## 🔐 Variables de Entorno

Crear archivo `.env`

```env
PORT=3000
OPENWEATHER_API_KEY=TU_API_KEY
```

## ▶️ Ejecutar Proyecto

```bash
npm start
```

Abrir en navegador:

```text
http://localhost:3000
```

## 📘 Guía de Uso

1. Abrir la app
2. Escribir una ciudad (Ej: Madrid)
3. Presionar Buscar
4. Visualizar clima actual

## 🌎 Endpoint API

```text
GET /api/weather/:city
```

Ejemplo:

```text
http://localhost:3000/api/weather/Madrid
```

## 📦 Ejemplo de Resultado

```json
{
  "ciudad": "Madrid",
  "pais": "ES",
  "temperatura": 13.23,
  "descripcion": "muy nuboso",
  "humedad": 58
}
```

## 📁 Estructura del Proyecto

```text
src/
├── app.js
├── server.js
├── config/
├── routes/
├── controllers/
├── services/
├── utils/
└── public/
```

## ✅ Funcionalidades Actuales

- Consulta clima actual
- Frontend responsive
- Variables de entorno
- Caché en memoria
- Arquitectura modular

## 🚀 Mejoras Futuras

- Pronóstico de 5 días
- Geolocalización
- Redis
- Docker
- CI/CD
- Más testing

## 📜 Scripts

```bash
npm start
npm test
```