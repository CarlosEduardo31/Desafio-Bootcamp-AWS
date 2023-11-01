const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Alunos',
      version: '1.0.0',
      description: 'API para gerenciar alunos em uma escola',
    },
  },
  apis: ['./models/aluno.js','./controllers/alunosController.js'],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
