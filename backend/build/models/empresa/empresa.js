"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
//collections for MongoDB
var empresaShema = new Schema({
    nit: {
        type: String,
        default: '',
        required: true
    },
    nombre: {
        type: String,
        default: '',
        required: true
    },
    fechaCreacion: {
        type: Date,
        default: Date.now
    },
    fechaModificacion: {
        type: String,
        default: '',
        required: true
    },
    codigo: {
        type: String,
        default: '',
        required: true
    },
    nombreCorto: {
        type: String,
        default: '',
        required: true
    }
});
exports.default = mongoose.model('empresa', empresaShema);
//# sourceMappingURL=empresa.js.map