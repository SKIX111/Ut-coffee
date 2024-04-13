const express = require('express');
const router = express.Router();
const { readPedido,createPedido,deletePedido,updatePedido } = require('../model/crearpPedido');

// Obtener un pedido por su ID
router.get('/:id', async function(req, res, next) {
  try {
    const pedido = await readPedido(parseInt(req.params.id));
    res.json(pedido);
  } catch (error) {
    res.status(500).json({ error: 'Error al leer el pedido' });
  }
});

// Actualizar un pedido
router.put('/actualizar/:id', async function(req, res, next) {
  try {
    const pedidoActualizado = await updatePedido(parseInt(req.params.id), req.body);
    res.json(pedidoActualizado);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el pedido' });
  }
});

// Crear un nuevo pedido
router.post('/create', async function(req, res, next) {
  try {
    const { fecha, estado, usuarioId } = req.body;
    const nuevoPedido = await createPedido(new Date(fecha), estado, parseInt(usuarioId));
    res.json(nuevoPedido);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el pedido' });
  }
});

// Eliminar un pedido por su ID
router.delete('/eliminar/:id', async function(req, res, next) {
  try {
    const pedidoEliminado = await deletePedido(parseInt(req.params.id));
    res.json(pedidoEliminado);
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el pedido' });
  }
});

module.exports = router;
