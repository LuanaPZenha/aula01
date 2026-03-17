const User = require('../models/userModel');

// Listar todos os usuários
async function listUsers(req, res) {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ erro: error.message });
    }
}

// Buscar usuário por ID
async function getUser(req, res) {
    try {
        const user = await User.findById(req.params.id);

        if (!user) {
            return res.status(404).json({ erro: "Usuário não encontrado" });
        }

        res.json(user);
    } catch (error) {
        res.status(500).json({ erro: error.message });
    }
}

// Criar usuário
async function createUser(req, res) {
    try {
        const { nome } = req.body;

        const newUser = new User({ nome });

        const savedUser = await newUser.save();

        res.status(201).json(savedUser);
    } catch (error) {
        res.status(500).json({ erro: error.message });
    }
}

// Atualizar usuário
async function updateUser(req, res) {
    try {
        const { nome } = req.body;

        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            { nome },
            { new: true } // retorna o usuário atualizado
        );

        if (!updatedUser) {
            return res.status(404).json({ erro: "Usuário não encontrado" });
        }

        res.json(updatedUser);
    } catch (error) {
        res.status(500).json({ erro: error.message });
    }
}

// Deletar usuário
async function deleteUser(req, res) {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);

        if (!deletedUser) {
            return res.status(404).json({ erro: "Usuário não encontrado" });
        }

        res.json({ mensagem: "Usuário deletado com sucesso" });
    } catch (error) {
        res.status(500).json({ erro: error.message });
    }
}

// Exportação das funções
module.exports = {
    listUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
};
