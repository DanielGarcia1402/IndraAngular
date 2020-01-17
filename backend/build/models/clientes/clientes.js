"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
//collections for MongoDB
var ClienteShema = new Schema({
    fechaCreación: {
        type: Date,
        default: Date.now
    },
    cedula: {
        type: String,
        default: '',
        required: true
    },
    nombre: {
        type: String,
        default: '',
        required: true
    },
    direccion: {
        type: String,
        default: '',
        required: true
    },
    telefono: {
        type: String,
        default: '',
        required: true
    }
});
exports.default = mongoose.model('clientes', ClienteShema);
//# sourceMappingURL=clientes.js.map