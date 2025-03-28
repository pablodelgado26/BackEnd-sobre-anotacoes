import notasModel from "../models/notasModel.js";

class NotasController {
  getAll = async (req, res) => {
    try {
      const tarefas = await notasModel.getAll();
      res.json(tarefas);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao buscar tarefas" });
    }
  };

  getById = async (req, res) => {
    const { id } = req.params;
    try {
      const nota = await notasModel.getById(Number(id));
      if (!nota) {
        return res.status(404).json({ erro: "nota não encontrada" });
      }
      res.json(nota);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao buscar nota" });
    }
  }

  create = async (req, res) => {
    const { titulo, conteudo } = req.body;
    try {
      if (!titulo || !conteudo) {
        return res.status(400).json({ erro: "titulo e conteudo obrigatórios" });
      }
      const novaNota = await notasModel.create(titulo, conteudo);
      res.status(201).json(novaNota);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao criar nota" });
    }
  };

  update = async (req, res) => {
    const { id } = req.params;
    const { titulo, conteudo, favorito, cor } = req.body;
    try {
      const notaAtualizada = await notasModel.update(Number(id), titulo, conteudo, favorito, cor);
      if (!notaAtualizada) {
        return res.status(404).json({ erro: "Nota não encontrada" });
      }
      res.json(notaAtualizada)
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao atualizar nota" });
    }
  };

  updateFavorito = async (req, res) => {
    const { id } = req.params;
    const { favorito } = req.body;
    
    try {
      if (favorito === undefined) {
        return res.status(400).json({ erro: "O campo 'favorito' é obrigatório" });
      }
      const notaAtualizada = await notasModel.updateFavorito(Number(id), favorito);
      
      if (!notaAtualizada) {
        return res.status(404).json({ erro: "Nota não encontrada" });
      }
      
      res.json(notaAtualizada);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao atualizar favorito da nota" });
    }
  };

  delete = async (req, res) => {
    const { id } = req.params;
    try {
      const sucesso = await notasModel.delete(Number(id));
      if (!sucesso) {
        return res.status(404).json({ erro: "nota não encontrada" });
      }
      res.status(200).send({ message: "nota deletada com sucesso" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao deletar nota" });
    }
  };
}
export default new NotasController();