/**
 * @swagger
 * tags:
 *   name: Alunos
 *   description: Rotas para gerenciar alunos
 */

const Aluno = require('../models/aluno');

/**
 * @swagger
 * /alunos:
 *   post:
 *     summary: Cria um novo aluno
 *     tags: [Alunos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Aluno'
 *     responses:
 *       '201':
 *         description: Aluno criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Aluno'
 *       '500':
 *         description: Erro ao criar aluno
 */

// Função para criar um novo aluno
exports.createAluno = async (req, res) => {
  try {
    const aluno = await Aluno.create({
      nome: req.body.nome,  
      idade: req.body.idade,
      nota_primeiro_semestre: req.body.nota_primeiro_semestre,
      nota_segundo_semestre: req.body.nota_segundo_semestre,
      nome_professor: req.body.nome_professor,
      numero_sala: req.body.numero_sala,
    });

    res.status(201).json(aluno);
  } catch (error) {
    console.error('Erro ao criar aluno:', error);
    res.status(500).json({ error: 'Erro ao criar aluno' });
  }
};

/**
 * @swagger
 * /alunos:
 *   get:
 *     summary: Obtém todos os alunos
 *     tags: [Alunos]
 *     responses:
 *       '200':
 *         description: Lista de alunos obtida com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Aluno'
 *       '500':
 *         description: Erro ao buscar alunos
 */

// Função para obter todos os alunos
exports.getAllAlunos = async (req, res) => {
  try {
    const alunos = await Aluno.findAll();
    res.status(200).json(alunos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar alunos' });
  }
};

/**
 * @swagger
 * /alunos/{id}:
 *   get:
 *     summary: Obtém um aluno por ID
 *     tags: [Alunos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Aluno obtido com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Aluno'
 *       '404':
 *         description: Aluno não encontrado
 *       '500':
 *         description: Erro ao buscar aluno
 */

// Função para obter um aluno por ID
exports.getAlunoById = async (req, res) => {
  try {
    const aluno = await Aluno.findByPk(req.params.id);
    if (!aluno) {
      return res.status(404).json({ error: 'Aluno não encontrado' });
    }
    res.status(200).json(aluno);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar aluno' });
  }
};

/**
 * @swagger
 * /alunos/{id}:
 *   put:
 *     summary: Atualiza um aluno por ID
 *     tags: [Alunos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Aluno'
 *     responses:
 *       '200':
 *         description: Aluno atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Aluno'
 *       '404':
 *         description: Aluno não encontrado
 *       '500':
 *         description: Erro ao atualizar aluno
 */

// Função para atualizar um aluno por ID
exports.updateAluno = async (req, res) => {
  try {
    const aluno = await Aluno.findByPk(req.params.id);
    if (!aluno) {
      return res.status(404).json({ error: 'Aluno não encontrado' });
    }
    await aluno.update({
      nome: req.body.nome,
      idade: req.body.idade,
      nota_primeiro_semestre: req.body.nota_primeiro_semestre,
      nota_segundo_semestre: req.body.nota_segundo_semestre,
      nome_professor: req.body.nome_professor,
      numero_sala: req.body.numero_sala,
    });
    res.status(200).json(aluno);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao atualizar aluno' });
  }
};

/**
 * @swagger
 * /alunos/{id}:
 *   delete:
 *     summary: Exclui um aluno por ID
 *     tags: [Alunos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       '204':
 *         description: Aluno excluído com sucesso
 *       '404':
 *         description: Aluno não encontrado
 *       '500':
 *         description: Erro ao excluir aluno
 */ 

// Função para excluir um aluno por ID
exports.deleteAluno = async (req, res) => {
  try {
    const aluno = await Aluno.findByPk(req.params.id);
    if (!aluno) {
      return res.status(404).json({ error: 'Aluno não encontrado' });
    }
    await aluno.destroy();
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao excluir aluno' });
  }
};
