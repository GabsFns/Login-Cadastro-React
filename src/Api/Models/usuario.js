const mongoose = require("mongoose");

const { Schema } = mongoose;

const usuarioSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    telefone: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    senha: {
        type: String,
        required: true,
        select: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Usuario', usuarioSchema);