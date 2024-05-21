const Usuario = require("../Models/usuario");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
    const { name, telefone, email, senha } = req.body;

    try {
        const usuarioExistente = await Usuario.findOne({ email });
        if (usuarioExistente) return res.status(400).json({ message: "Usuário já existe" });

        const senhaHash = await bcrypt.hash(senha, 12);
        const novoUsuario = await Usuario.create({ name, email, telefone, senha: senhaHash });
        res.status(201).json({ message: "Usuário registrado com sucesso" });
    } catch (error) {
        res.status(500).json({ message: "Algo deu errado, tente novamente", error: error.message });
    }
};

const login = async (req, res) => {
    const { email, senha } = req.body;

    try {
        const usuario = await Usuario.findOne({ email }).select('+senha');
        if (!usuario) return res.status(404).json({ message: "Usuário não encontrado" });

        const senhaValidada = await bcrypt.compare(senha, usuario.senha);
        if (!senhaValidada) return res.status(404).json({ message: "Senha inválida" });

        const token = jwt.sign({ id: usuario._id, email: usuario.email }, 'seu_segredo_jwt', { expiresIn: '1h' });
        res.status(200).json({ user: usuario, token });
    } catch (error) {
        res.status(500).json({ message: 'Algo deu errado', error: error.message });
    }
};

module.exports = { register, login };