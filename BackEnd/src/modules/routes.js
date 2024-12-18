const express = require('express');
const router = express.Router();
const db = require('../db');  // Conexión a la base de datos

// 1. Crear un Proyecto
router.post('/proyecto', (req, res) => {
    const { name, description, link, date, languages } = req.body;

    // Validación de los datos
    if (!name || !description || !link || !date || !languages) {
        return db.error(req, res, 'Todos los campos son obligatorios', 400);
    }

    const query = 'INSERT INTO projects (name, description, link, date, languages) VALUES (?, ?, ?, ?, ?)';
    db.query(query, [name, description, link, date, languages], (err, result) => {
        if (err) {
            console.error('Error al insertar el proyecto:', err);
            return db.error(req, res, 'Error al insertar el proyecto', 500);
        }
        return res.status(200).json({ message: 'Proyecto creado exitosamente' });
    });
});

// 2. Leer todos los Proyectos
router.get('/projects', (req, res) => {
    const query = 'SELECT * FROM projects';
    db.query('SELECT * FROM projects', (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Database query failed' });
        }
        res.json(results);
    });
});

// 3. Leer un Proyecto por su ID
router.get('/proyecto/:id', (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM projects WHERE id = ?';
    db.query(query, [id], (err, result) => {
        if (err) {
            console.error('Error al obtener el proyecto:', err);
            return res.status(500).json({
                message: 'Error al obtener el proyecto',
            });
        }
        if (!result.length) {
            return res.status(404).json({
                message: 'Proyecto no encontrado',
            });
        }
        // Return success response directly
        return res.status(200).json({
            data: result[0]
        });
    });
});


// 4. Actualizar un Proyecto
router.put('/proyecto/:id', (req, res) => {
    const { id } = req.params;
    const { name, description, link, date, languages } = req.body;
  
    if (!name || !description || !link || !date || !languages) {
      return res.status(400).json({ error: 'All fields are required' });
    }
  
    const query = 'UPDATE projects SET name = ?, description = ?, link = ?, date = ?, languages = ? WHERE id = ?';
    db.query(query, [name, description, link, date, languages, id], (err) => {
      if (err) {
        console.error('Error updating project:', err);
        return res.status(500).json({ error: 'Error updating project' });
      }
      res.status(200).json({ message: 'Project updated successfully' });
    });
  });
// 5. Eliminar un Proyecto
router.delete('/proyecto/:id', (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM projects WHERE id = ?';
    db.query(query, [id], (err, result) => {
        if (err) {
            console.error('Error al eliminar el proyecto:', err);
            return db.error(req, res, 'Error al eliminar el proyecto', 500);
        }
        if (result.affectedRows === 0) {
            return db.error(req, res, 'Proyecto no encontrado', 404);
        }
        return res.status(200).json({ message: 'Proyecto eliminado exitosamente' });
    });
});

module.exports = router;
