"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var categoria_1 = require("../../models/categoria/categoria");
//CRUD of the application
function getAllCategoria(req, res, next) {
    categoria_1.default.find(function (err, clientes) {
        if (err) {
            res.status(500).json({ err: err });
        }
        res.status(200).json({ clientes: clientes });
    });
}
exports.getAllCategoria = getAllCategoria;
function getCategoriaById(req, res, next) {
    var id = req.params.id;
    categoria_1.default.findById(id, function (err, cliente) {
        if (err) {
            res.status(500).json({ err: err });
        }
        res.status(200).json({ cliente: cliente });
    });
}
exports.getCategoriaById = getCategoriaById;
function createCategoria(req, res, next) {
    var nombre = req.body.nombre;
    var descripcion = req.body.descripcion;
    if (!nombre) {
        res.status(422).json({ err: 'nombre is required.' });
        return;
    }
    if (!descripcion) {
        res.status(422).json({ err: 'descripcion of the is required.' });
        return;
    }
    var clientee = new categoria_1.default({
        nombre: nombre,
        descripcion: descripcion
    });
    clientee.save(function (err, cliente) {
        if (err) {
            res.status(500).json({ err: err });
        }
        res.status(200).json({ cliente: cliente });
    });
}
exports.createCategoria = createCategoria;
function updateCategoria(req, res, next) {
    var id = req.params.id;
    categoria_1.default.findByIdAndUpdate(id, req.body, function (err, cliente) {
        if (err) {
            res.status(500).json({ err: err });
        }
        res.status(200).json({ cliente: cliente });
    });
}
exports.updateCategoria = updateCategoria;
function deleteCategoria(req, res, next) {
    var id = req.params.id;
    categoria_1.default.findByIdAndRemove(id, function (err, cliente) {
        if (err) {
            res.status(500).json({ err: err });
        }
        res.status(200).json({ cliente: cliente });
    });
}
exports.deleteCategoria = deleteCategoria;
//# sourceMappingURL=categoria.js.map