const express = require('express');
const router = express.Router();
const {
  createRestaurante,readRestaurante,updateRestaurante,deleteRestaurante} = require('../model/crearRestaurante');

// Ruta para crear un nuevo restaurante
router.post('/restaurantes', async (req, res) => {
  try {
    const { ubicacion, nombre, tipoComida } = req.body;
    const nuevoRestaurante = await createRestaurante(ubicacion, nombre, tipoComida);
    res.status(201).json(nuevoRestaurante);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: 'Error al crear el restaurante' });
  }
});

// Ruta para leer un restaurante por su ID
router.get('/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const restaurante = await readRestaurante(id);
    if (!restaurante) {
      return res.status(404).json({ error: 'Restaurante no encontrado' });
    }
    res.json(restaurante);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: 'Error al leer el restaurante' });
  }
});

// Ruta para actualizar un restaurante
router.put('/actualizar/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const data = req.body;
    const restauranteActualizado = await updateRestaurante(id, data);
    res.json(restauranteActualizado);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: 'Error al actualizar el restaurante' });
  }
});

// Ruta para eliminar un restaurante
router.delete('/eliminar/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    await deleteRestaurante(id);
    res.json({ message: 'Restaurante eliminado correctamente' });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: 'Error al eliminar el restaurante' });
  }
});

module.exports = router;
