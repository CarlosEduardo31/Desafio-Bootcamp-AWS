/**
 * @swagger
 * components:
 *   schemas:
 *     Aluno:
 *       type: object
 *       properties:
 *         nome:
 *           type: string
 *         idade:
 *           type: integer
 *         nota_primeiro_semestre:
 *           type: number
 *         nota_segundo_semestre:
 *           type: number
 *         nome_professor:
 *           type: string
 *         numero_sala:
 *           type: string
 */

const { DataTypes } = require('sequelize');
const db = require('../database'); 

const Aluno = db.define('alunos', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  idade: {
    type: DataTypes.INTEGER,
  },
  nota_primeiro_semestre: {
    type: DataTypes.NUMERIC(4, 2),
  },
  nota_segundo_semestre: {
    type: DataTypes.NUMERIC(4, 2),
  },
  nome_professor: {
    type: DataTypes.STRING,
  },
  numero_sala: {
    type: DataTypes.STRING,
  },
}, {
  timestamps: false, // Desabilita as colunas "createdAt" e "updatedAt"
});

module.exports = Aluno;

