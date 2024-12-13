// db.js
const mysql = require('mysql2');
require('dotenv').config();

// Crear la conexión a la base de datos
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
});

// Intentar conectar
db.connect((err) => {
    if (err) {
        console.error('Error al conectar a la base de datos:', err.stack);
    } else {
        console.log('Conexión a la base de datos exitosa.');
    }
});

// Exportar la conexión para usarla en otros módulos
module.exports = db;
