const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const validateUser = require('../middlewares/validateUser');

// GET - Listar todos os usuários
router.get('/users', userController.listUsers);

// GET - Buscar usuário por ID
router.get('/users/:id', userController.getUser);

// POST - Criar usuário
router.post('/users', validateUser, userController.createUser);

// PUT - Atualizar usuário
router.put('/users/:id', validateUser, userController.updateUser);

// DELETE - Deletar usuário
router.delete('/users/:id', userController.deleteUser);

module.exports = router;