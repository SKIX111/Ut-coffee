const express = require('express');
const router = express.Router();
const { 
  createDetallePedido, 
  readDetallePedido, 
  updateDetallePedido, 
  deleteDetallePedido 
} = require('../model/DetallePedido');

// Ruta para crear un nuevo detalle de pedido
router.post('/detalle-pedido', async (req, res) => {
  try {
    const { cantidad, productoId, pedidoId } = req.body;
    const nuevoDetallePedido = await createDetallePedido(cantidad, productoId, pedidoId);
    res.status(201).json(nuevoDetallePedido);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: 'Error al crear el detalle de pedido' });
  }
});

// Ruta para leer un detalle de pedido por su ID
router.get('/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const detallePedido = await readDetallePedido(id);
    if (!detallePedido) {
      return res.status(404).json({ error: 'Detalle de pedido no encontrado' });
    }
    res.json(detallePedido);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: 'Error al leer el detalle de pedido' });
  }
});

// Ruta para actualizar un detalle de pedido
router.put('/actualizar/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const data = req.body;
    const detallePedidoActualizado = await updateDetallePedido(id, data);
    res.json(detallePedidoActualizado);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: 'Error al actualizar el detalle de pedido' });
  }
});

// Ruta para eliminar un detalle de pedido
router.delete('/eliminar/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    await deleteDetallePedido(id);
    res.json({ message: 'Detalle de pedido eliminado correctamente' });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: 'Error al eliminar el detalle de pedido' });
  }
});

module.exports = router;
