const express = require('express');
const router = express.Router();
const {
  createUsuario,
  readUsuario,
  updateUsuario,
  deleteUsuario
} = require('../model/crearUsuario');

// Ruta para crear un nuevo usuario
router.post('/usuarios', async (req, res) => {
  try {
    const {nombre,direccion,telefono,correo} = req.body;
    const nuevoUsuario = await createUsuario(nombre,direccion,telefono,correo);
    res.status(201).json(nuevoUsuario);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: 'Error al crear el usuario' });
  }
});

// Ruta para leer un usuario por su ID
router.get('/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const usuario = await readUsuario(id);
    if (!usuario) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }
    res.json(usuario);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: 'Error al leer el usuario' });
  }
});

// Ruta para actualizar un usuario
router.put('/actualizar/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const data = req.body;
    const usuarioActualizado = await updateUsuario(id, data);
    res.json(usuarioActualizado);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: 'Error al actualizar el usuario' });
  }
});

// Ruta para eliminar un usuario
router.delete('/Elimonar/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    await deleteUsuario(id);
    res.json({ message: 'Usuario eliminado correctamente' });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: 'Error al eliminar el usuario' });
  }
});

module.exports = router;


