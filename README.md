🌤️ Weather App - Consulta de Clima en Tiempo Real

Aplicación web desarrollada con Node.js + Express + JavaScript que permite consultar el clima actual de cualquier ciudad utilizando la API de OpenWeather.

El usuario escribe una ciudad, la aplicación consulta el backend y muestra información meteorológica clara y amigable.

📌 Tabla de Contenido
Resumen del proyecto
Tecnologías utilizadas
Instalación
Configuración de variables de entorno
Ejecución del proyecto
Guía de uso
Ejemplo de resultados
Estructura del proyecto
Funcionalidades actuales
Mejoras futuras
Scripts disponibles
Soporte
📖 Resumen del Proyecto

Esta aplicación permite:

✅ Buscar clima actual por ciudad
✅ Mostrar temperatura en °C
✅ Mostrar descripción meteorológica
✅ Mostrar humedad actual
✅ Mostrar país correspondiente
✅ Consumir API externa desde backend seguro
✅ Implementar caché para reducir llamadas repetidas

El proyecto fue estructurado siguiendo buenas prácticas para facilitar mantenimiento y escalabilidad.

🛠 Tecnologías Utilizadas
Node.js
Express
JavaScript (Frontend + Backend)
HTML5
CSS3
API de OpenWeather
dotenv (variables de entorno)
📥 Instalación
1. Clonar repositorio
git clone https://github.com/tuusuario/weather-app.git
cd weather-app
2. Instalar dependencias
npm install
🔐 Configuración Variables de Entorno

Crear archivo:

.env

Contenido:

PORT=3000
OPENWEATHER_API_KEY=TU_API_KEY

Debes obtener tu API key desde OpenWeather.

▶️ Ejecutar Proyecto
npm start

Servidor disponible en:

http://localhost:3000
📘 Guía de Uso
Paso 1

Abrir navegador:

http://localhost:3000
Paso 2

Escribir una ciudad:

Madrid
Paso 3

Presionar botón:

Buscar
Paso 4

Visualizar clima actual.

🌎 Endpoint API

También puedes consumir directamente:

GET /api/weather/:city

Ejemplo:

http://localhost:3000/api/weather/Madrid
📦 Ejemplo de Resultado
{
  "ciudad": "Madrid",
  "pais": "ES",
  "temperatura": 13.23,
  "descripcion": "muy nuboso",
  "humedad": 58
}
📁 Estructura del Proyecto
weather-app/
│── src/
│   │── app.js
│   │── server.js
│   │
│   ├── config/
│   │   └── env.js
│   │
│   ├── routes/
│   │   └── weather.routes.js
│   │
│   ├── controllers/
│   │   └── weather.controller.js
│   │
│   ├── services/
│   │   └── weather.service.js
│   │
│   ├── utils/
│   │   └── cache.js
│   │
│   └── public/
│       │── index.html
│       │── style.css
│       └── app.js
│
│── tests/
│── .env
│── package.json
│── README.md
✅ Funcionalidades Actuales
Consulta clima actual
Temperatura en Celsius
Descripción del clima
Humedad
País
Backend seguro
Caché temporal en memoria
Frontend responsive
Arquitectura modular
Variables de entorno
🚀 Mejoras Futuras
Próximas funcionalidades sugeridas:
Pronóstico extendido
Pronóstico de 5 días
Geolocalización
Detectar ubicación actual del usuario
Diseño avanzado
Íconos dinámicos
Fondo según clima
Dark mode
Rendimiento
Caché con Redis
Rate limiting
DevOps
Docker
CI/CD
Deploy cloud
Testing
Más pruebas unitarias
Integración completa
📜 Scripts Disponibles
npm start

Inicia servidor.

npm test

Ejecuta pruebas (si están configuradas).

🔒 Seguridad Implementada
API Key protegida en .env
.gitignore configurado
Backend intermedio
Validación de entradas
👨‍💻 Recomendado para Nuevos Desarrolladores
Instalar dependencias
Configurar .env
Ejecutar npm start
Revisar estructura MVC
Probar endpoint API
📞 Soporte

Para dudas técnicas:

contacto@tuempresa.com
⭐ Resultado Final

Proyecto ideal para practicar:

✅ Node.js
✅ APIs REST
✅ Fetch externo
✅ Arquitectura backend
✅ Variables de entorno
✅ Caché
✅ Frontend + Backend

Licencia

Uso educativo / personal.