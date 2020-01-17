"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
//collections for MongoDB
var categoriaShema = new Schema({
    fechaCreación: {
        type: Date,
        default: Date.now
    },
    nombre: {
        type: String,
        default: '',
        required: true
    },
    descripcion: {
        type: String,
        default: '',
        required: true
    }
});
exports.default = mongoose.model('categoria', categoriaShema);
//# sourceMappingURL=categoria.js.map