"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
//collections for MongoDB
var productosShema = new Schema({
    fechaCreación: {
        type: Date,
        default: Date.now
    },
    nombre: {
        type: String,
        default: '',
        required: true
    },
    precio: {
        type: String,
        default: '',
        required: true
    },
    unidad: {
        type: String,
        default: '',
        required: true
    },
    imagen: {
        type: String,
        default: '',
        required: true
    },
    proveedor: {
        type: String,
        default: '',
        required: true
    },
    categoria: {
        type: String,
        default: '',
        required: true
    }
});
exports.default = mongoose.model('producto', productosShema);
//# sourceMappingURL=productos.js.map