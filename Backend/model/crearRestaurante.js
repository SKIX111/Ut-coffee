const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// async function createRestaurante(ubicacion, nombre, tipoComida) {
//   return await prisma.restaurante.create({
//     data: {
//       ubicacion: ubicacion,
//       nombre: nombre,
//       tipoComida: tipoComida
//     }
//   });
// }

// async function readRestaurante(id) {
//   return await prisma.restaurante.findUnique({
//     where: {
//       id: id
//     }
//   });
// }

async function updateRestaurante(id, data) {
  return await prisma.restaurante.update({
    where: {
      id: id
    },
    data: data
  });
}

// async function deleteRestaurante(id) {
//   return await prisma.restaurante.delete({
//     where: {
//       id: id
//     }
//   });
// }

async function main() {
  try {
    // Crear un nuevo restaurante
    // const nuevoRestaurante = await createRestaurante("Calle 123", "Mi Restaurante", "Comida Mexicana");
    // console.log("Nuevo restaurante creado:", nuevoRestaurante);

    // Leer un restaurante por su ID
    // const restaurante = await readRestaurante(1);
    // console.log("Restaurante encontrado:", restaurante);

    // Actualizar el restaurante recién creado
    const restauranteActualizado = await updateRestaurante(1, { tipoComida: "Comida Italiana" });
    console.log("Restaurante actualizado:", restauranteActualizado);

    // Eliminar el restaurante
    // await deleteRestaurante(1);
    // console.log("Restaurante eliminado correctamente.");
  } catch (error) {
    console.error("Error:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
