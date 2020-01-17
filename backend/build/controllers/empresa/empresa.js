"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var empresa_1 = require("../../models/empresa/empresa");
//CRUD of the application
function getAllEmpresa(req, res, next) {
    empresa_1.default.find(function (err, empresa) {
        if (err) {
            res.status(500).json({ err: err });
        }
        console.log(empresa);
        res.status(200).json({ empresa: empresa });
    });
}
exports.getAllEmpresa = getAllEmpresa;
function getEmpresaById(req, res, next) {
    var id = req.params.id;
    empresa_1.default.findById(id, function (err, empresa) {
        if (err) {
            res.status(500).json({ err: err });
        }
        res.status(200).json({ empresa: empresa });
    });
}
exports.getEmpresaById = getEmpresaById;
function createEmpresa(req, res, next) {
    var nit = req.body.nit;
    var nombre = req.body.nombre;
    var fechaModificacion = req.body.fechaModificacion;
    var codigo = req.body.codigo;
    var nombreCorto = req.body.nombreCorto;
    if (!nit) {
        res.status(422).json({ err: 'nit is required.' });
        return;
    }
    if (!nombre) {
        res.status(422).json({ err: 'nombre of the is required.' });
        return;
    }
    if (!fechaModificacion) {
        res.status(422).json({ err: 'fechaModificacion of the is required.' });
        return;
    }
    if (!codigo) {
        res.status(422).json({ err: 'codigo of the is required.' });
        return;
    }
    if (!nombreCorto) {
        res.status(422).json({ err: 'nombreCorto of the is required.' });
        return;
    }
    var empresaa = new empresa_1.default({
        nit: nit,
        nombre: nombre,
        fechaModificacion: fechaModificacion,
        codigo: codigo,
        nombreCorto: nombreCorto
    });
    empresaa.save(function (err, empresa) {
        if (err) {
            res.status(500).json({ err: err });
        }
        res.status(200).json({ empresa: empresa });
    });
}
exports.createEmpresa = createEmpresa;
function updateEmpresa(req, res, next) {
    var id = req.params.id;
    empresa_1.default.findByIdAndUpdate(id, req.body, function (err, empresa) {
        if (err) {
            res.status(500).json({ err: err });
        }
        res.status(200).json({ empresa: empresa });
    });
}
exports.updateEmpresa = updateEmpresa;
function deleteEmpresa(req, res, next) {
    var id = req.params.id;
    empresa_1.default.findByIdAndRemove(id, function (err, empresa) {
        if (err) {
            res.status(500).json({ err: err });
        }
        res.status(200).json({ empresa: empresa });
    });
}
exports.deleteEmpresa = deleteEmpresa;
//# sourceMappingURL=empresa.js.map