import prisma from "../../prisma/client.js";

class notasModel {
  getAll = async () => {
    return await prisma.nota.findMany();
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
