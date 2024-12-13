const express = require('express');
const routes = require('./modules/routes');  // Asegúrate de que la ruta sea correcta

const app = express();
const config = require('./config');  // Asegúrate de tener este archivo para la configuración

// Middleware para analizar los cuerpos JSON
app.use(express.json());  // Esto es necesario para que req.body esté disponible

app.set('port', config.app.port);

// Usa las rutas para la API
app.use('/api', routes);

module.exports = app;  // Exporta la aplicación aquí
