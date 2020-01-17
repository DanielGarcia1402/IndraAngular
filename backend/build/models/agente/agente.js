"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
//collections for MongoDB
var agenteSchema = new Schema({
    empresaId: {
        type: String,
        default: '',
        required: true
    },
    codigoAgente: {
        type: String,
        default: '',
        required: true
    },
    nombreAgente: {
        type: String,
        default: '',
        required: true
    },
    estado: {
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
    nombreCorto: {
        type: String,
        default: '',
        required: true
    }
});
exports.default = mongoose.model('agente', agenteSchema);
//# sourceMappingURL=agente.js.map