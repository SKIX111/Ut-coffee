const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function createDetallePedido(cantidad, productoId, pedidoId) {
  return await prisma.detallePedido.create({
    data: {
      cantidad: cantidad,
      productoId: productoId,
      pedidoId: pedidoId
    }
  });
}

async function readDetallePedido(id) {
  return await prisma.detallePedido.findUnique({
    where: {
      id: id
    }
  });
}

async function updateDetallePedido(id, data) {
  return await prisma.detallePedido.update({
    where: {
      id: id
    },
    data: data
  });
}

async function deleteDetallePedido(id) {
  return await prisma.detallePedido.delete({
    where: {
      id: id
    }
  });
}

async function main() {
  try {
    // Crear un nuevo detalle de pedido
    const nuevoDetallePedido = await createDetallePedido(2, 1, 1); 
    console.log("Nuevo detalle de pedido creado:", nuevoDetallePedido);

    // Leer un detalle de pedido por su ID
    const detallePedido = await readDetallePedido(1);
    console.log("Detalle de pedido encontrado:", detallePedido);

    // Actualizar el detalle de pedido recién creado
    const detallePedidoActualizado = await updateDetallePedido(1, { cantidad: 3 });
    console.log("Detalle de pedido actualizado:", detallePedidoActualizado);

    // Eliminar el detalle de pedido
    await deleteDetallePedido(2);
    console.log("Detalle de pedido eliminado correctamente.");
  } catch (error) {
    console.error("Error:", error);
  } finally {
    await prisma.$disconnect();
  }
}

module.exports = {
  createDetallePedido, 
  readDetallePedido, 
  updateDetallePedido, 
  deleteDetallePedido
}; 
