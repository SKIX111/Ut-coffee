const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function createPedido(fecha, estado, usuarioId) {
  return await prisma.pedido.create({
    data: {
      fecha: fecha,
      estado: estado,
      usuarioId: usuarioId
    }
  });
}

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

async function deletePedido(id) {
  return await prisma.pedido.delete({
    where: {
      id: id
    }
  });
}

async function main() {
  try {
    // Crear un nuevo pedido con datos específicos
    const fechaPedido = new Date("2024-02-20T19:14:21+02:00"); 
    const estadoPedido = "En proceso"; 
    const usuarioIdPedido = 1; 
    const nuevoPedido = await createPedido(fechaPedido, estadoPedido, usuarioIdPedido);
    console.log("Nuevo pedido creado:", nuevoPedido);

    // Leer un pedido por su ID
    const pedido = await readPedido(5);
    console.log("Pedido encontrado:", pedido);

    // Actualizar el pedido recién creado
    const pedidoActualizado = await updatePedido(5, { estado: "Entregado" });
    console.log("Pedido actualizado:", pedidoActualizado);

    // Eliminar el pedido
    await deletePedido(5);
    console.log("Pedido eliminado correctamente.");
  } catch (error) {
    console.error("Error:", error);
  } finally {
    await prisma.$disconnect();
  }
}

module.exports = {
  createPedido,
  readPedido,
  updatePedido,
  deletePedido
};

