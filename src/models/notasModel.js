import prisma from "../../prisma/client.js";

class notasModel {
  getAll = async () => {
    return await prisma.nota.findMany();
  }

  getById = async (id) => {
    return await prisma.nota.findUnique({
      where: { id },
    });
  }

  create = async (titulo, conteudo) => {
    return await prisma.nota.create({
      data: {
        titulo: titulo,
        conteudo: conteudo,
      },
    })
  };

  update = async (id, titulo, conteudo, favorito, cor) => {
    try {
      const nota = await prisma.nota.update({
        where: { id },
        data: {
          titulo,
          conteudo,
          favorito,
          cor,
        }
      });
      return nota;
    } catch (error) {
      console.log("Error", error);
      throw error
    }
  };

  updateFavorito = async (id, favorito) => {
    try {
      const nota = await prisma.nota.update({
        where: { id },
        data: {
          favorito,
        }
      });
      return nota;
    } catch (error) {
      console.log("Error", error);
      throw error
    }
  };

  delete = async (id) => {
    try {
      const notaDeletada = await prisma.nota.delete({
        where: { id },
      });
      return notaDeletada;
    } catch (error) {
      console.error("Error ao deletar a nota!", error);
      throw error;
    }
  };
}
export default new notasModel();
