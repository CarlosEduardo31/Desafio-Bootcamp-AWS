const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger');


const db = require('./database'); 

// Middlewares
app.use(bodyParser.json());

// Rotas
const alunosRoutes = require('./routes/alunos');
app.use(alunosRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Inicializar o servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor está rodando na porta ${port}`);
});
