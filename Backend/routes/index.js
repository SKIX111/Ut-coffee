var express = require('express');
var router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function readPedido(id) {
  return await prisma.pedido.findUnique({
    where: {
      id: id
    }
  });
}

async function updatePedido(id, data) {
  return await prisma.pedido.update({
    where: {
      id: id
    },
    data: data
  });
}

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
    const nuevoPedido = await prisma.pedido.create({
      data: req.body
    });
    res.json(nuevoPedido);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el pedido' });
  }
});

router.delete('/eliminar/:id', async function(req, res, next) {
  try {
    const pedidoEliminado = await prisma.pedido.delete({
      where: {
        id: parseInt(req.params.id)
      }
    });
    res.json(pedidoEliminado);
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el pedido' });
  }
});

module.exports = router;
