"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var agente_1 = require("../../models/agente/agente");
//CRUD of the application
function getAllAgente(req, res, next) {
    agente_1.default.find(function (err, agente) {
        if (err) {
            res.status(500).json({ err: err });
        }
        console.log(agente);
        res.status(200).json({ agente: agente });
    });
}
exports.getAllAgente = getAllAgente;
function getAgenteById(req, res, next) {
    var id = req.params.id;
    agente_1.default.findById(id, function (err, agente) {
        if (err) {
            res.status(500).json({ err: err });
        }
        res.status(200).json({ agente: agente });
    });
}
exports.getAgenteById = getAgenteById;
function createAgente(req, res, next) {
    var empresaId = req.body.empresaId;
    var codigoAgente = req.body.codigoAgente;
    var nombreAgente = req.body.nombreAgente;
    var estado = req.body.estado;
    var fechaModificacion = req.body.fechaModificacion;
    var nombreCorto = req.body.nombreCorto;
    if (!empresaId) {
        res.status(422).json({ err: 'empresaId is required.' });
        return;
    }
    if (!codigoAgente) {
        res.status(422).json({ err: 'codigoAgente of the is required.' });
        return;
    }
    if (!nombreAgente) {
        res.status(422).json({ err: 'nombreAgente of the is required.' });
        return;
    }
    if (!estado) {
        res.status(422).json({ err: 'estado of the is required.' });
        return;
    }
    if (!fechaModificacion) {
        res.status(422).json({ err: 'fechaModificacion of the is required.' });
        return;
    }
    if (!nombreCorto) {
        res.status(422).json({ err: 'nombreCorto of the is required.' });
        return;
    }
    var agentee = new agente_1.default({
        empresaId: empresaId,
        codigoAgente: codigoAgente,
        nombreAgente: nombreAgente,
        estado: estado,
        fechaModificacion: fechaModificacion,
        nombreCorto: nombreCorto
    });
    agentee.save(function (err, agente) {
        if (err) {
            res.status(500).json({ err: err });
        }
        res.status(200).json({ agente: agente });
    });
}
exports.createAgente = createAgente;
function updateAgente(req, res, next) {
    var id = req.params.id;
    agente_1.default.findByIdAndUpdate(id, req.body, function (err, agente) {
        if (err) {
            res.status(500).json({ err: err });
        }
        res.status(200).json({ agente: agente });
    });
}
exports.updateAgente = updateAgente;
function deleteAgente(req, res, next) {
    var id = req.params.id;
    agente_1.default.findByIdAndRemove(id, function (err, agente) {
        if (err) {
            res.status(500).json({ err: err });
        }
        res.status(200).json({ agente: agente });
    });
}
exports.deleteAgente = deleteAgente;
//# sourceMappingURL=agente.js.map