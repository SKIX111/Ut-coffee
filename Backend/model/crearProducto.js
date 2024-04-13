const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function createProducto(nombre, descripcion, precio, restauranteId) {
  return await prisma.producto.create({
    data: {
      nombre: nombre,
      descripcion: descripcion,
      precio: precio,
      restauranteId: restauranteId
    }
  });
}

async function readProducto(id) {
  return await prisma.producto.findUnique({
    where: {
      id: id
    }
  });
}

async function updateProducto(id, data) {
  return await prisma.producto.update({
    where: {
      id: id
    },
    data: data
  });
}

async function deleteProducto(id) {
  return await prisma.producto.delete({
    where: {
      id: id
    }
  });
}

async function main() {
  try {
    //Crear un nuevo producto
    const nuevoProducto = await createProducto("Pizza", "Deliciosa pizza de pepperoni", 10.99, 1);
    console.log("Nuevo producto creado:", nuevoProducto);

   // Leer un producto por su ID
    const producto = await readProducto(1);
    console.log("Producto encontrado:", producto);

    //Actualizar el producto recién creado
    const productoActualizado = await updateProducto(1, { precio: 12.99 });
    console.log("Producto actualizado:", productoActualizado);

    //Eliminar el producto
    await deleteProducto(2);
    console.log("Producto eliminado correctamente.");
  } catch (error) {
    console.error("Error:", error);
  } finally {
    await prisma.$disconnect();
  }
}

module.exports = {
  readProducto,
  updateProducto,
  deleteProducto,
  createProducto
};


