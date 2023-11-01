const express = require('express');
const router = express.Router();
const alunosController = require('../controllers/alunosController');

// Rota para criar um novo aluno
router.post('/alunos', alunosController.createAluno);

// Rota para obter todos os alunos
router.get('/alunos', alunosController.getAllAlunos);

// Rota para obter um aluno por ID
router.get('/alunos/:id', alunosController.getAlunoById);

// Rota para atualizar um aluno por ID
router.put('/alunos/:id', alunosController.updateAluno);

// Rota para excluir um aluno por ID
router.delete('/alunos/:id', alunosController.deleteAluno);

module.exports = router;
