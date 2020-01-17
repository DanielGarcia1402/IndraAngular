"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var clientes_1 = require("../../models/clientes/clientes");
//CRUD of the application
function getAllClientes(req, res, next) {
    clientes_1.default.find(function (err, clientes) {
        if (err) {
            res.status(500).json({ err: err });
        }
        res.status(200).json({ clientes: clientes });
    });
}
exports.getAllClientes = getAllClientes;
function getClientesById(req, res, next) {
    var id = req.params.id;
    clientes_1.default.findById(id, function (err, cliente) {
        if (err) {
            res.status(500).json({ err: err });
        }
        res.status(200).json({ cliente: cliente });
    });
}
exports.getClientesById = getClientesById;
function createCliente(req, res, next) {
    var cedula = req.body.cedula;
    var nombre = req.body.nombre;
    var direccion = req.body.direccion;
    var telefono = req.body.telefono;
    if (!cedula) {
        res.status(422).json({ err: 'cedula is required.' });
        return;
    }
    if (!nombre) {
        res.status(422).json({ err: 'nombre of the is required.' });
        return;
    }
    if (!direccion) {
        res.status(422).json({ err: 'direccion of the is required.' });
        return;
    }
    if (!telefono) {
        res.status(422).json({ err: 'telefono of the is required.' });
        return;
    }
    var clientee = new clientes_1.default({
        cedula: cedula,
        nombre: nombre,
        direccion: direccion,
        telefono: telefono
    });
    clientee.save(function (err, cliente) {
        if (err) {
            res.status(500).json({ err: err });
        }
        res.status(200).json({ cliente: cliente });
    });
}
exports.createCliente = createCliente;
function updateCliente(req, res, next) {
    var id = req.params.id;
    clientes_1.default.findByIdAndUpdate(id, req.body, function (err, cliente) {
        if (err) {
            res.status(500).json({ err: err });
        }
        res.status(200).json({ cliente: cliente });
    });
}
exports.updateCliente = updateCliente;
function deleteCliente(req, res, next) {
    var id = req.params.id;
    clientes_1.default.findByIdAndRemove(id, function (err, cliente) {
        if (err) {
            res.status(500).json({ err: err });
        }
        res.status(200).json({ cliente: cliente });
    });
}
exports.deleteCliente = deleteCliente;
//# sourceMappingURL=clientes.js.map