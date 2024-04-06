var express = require('express');
var router = express.Router();
const { createPedido, readPedido, updatePedido, deletePedido } = require('../model/crearpPedido'); 

router.get('/:id', async function(req, res, next) {
  try {
    const pedido = await readPedido(parseInt(req.params.id));
    res.json(pedido);
  } catch (error) {
    res.status(500).json({ error: 'Error al leer el pedido' });
  }
});

router.put('/actualizar/:id', async function(req, res, next) {
  try {
    const pedidoActualizado = await updatePedido(parseInt(req.params.id), req.body);
    res.json(pedidoActualizado);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el pedido' });
  }
});

router.post('/create', async function(req, res, next) {
  try {
    const { fecha, estado, usuarioId } = req.query; // Lee los datos de los parámetros de la URL
    const nuevoPedido = await createPedido(new Date(fecha), estado, parseInt(usuarioId)); 
    res.json(nuevoPedido);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el pedido' });
  }
});

router.delete('/eliminar/:id', async function(req, res, next) {
  try {
    const pedidoEliminado = await deletePedido(parseInt(req.params.id));
    res.json(pedidoEliminado);
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el pedido' });
  }
});

module.exports = router;
