"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var productos_1 = require("../../models/productos/productos");
//CRUD of the application
function getAllProductos(req, res, next) {
    productos_1.default.find(function (err, productos) {
        if (err) {
            res.status(500).json({ err: err });
        }
        console.log(productos);
        res.status(200).json({ productos: productos });
    });
}
exports.getAllProductos = getAllProductos;
function getPrductosById(req, res, next) {
    var id = req.params.id;
    productos_1.default.findById(id, function (err, producto) {
        if (err) {
            res.status(500).json({ err: err });
        }
        res.status(200).json({ producto: producto });
    });
}
exports.getPrductosById = getPrductosById;
function createProducto(req, res, next) {
    var nombre = req.body.nombre;
    var precio = req.body.precio;
    var unidad = req.body.unidad;
    var imagen = req.body.imagen;
    var proveedor = req.body.proveedor;
    var categoria = req.body.categoria;
    if (!nombre) {
        res.status(422).json({ err: 'nombre is required.' });
        return;
    }
    if (!precio) {
        res.status(422).json({ err: 'precio of the is required.' });
        return;
    }
    if (!unidad) {
        res.status(422).json({ err: 'unidad of the is required.' });
        return;
    }
    if (!imagen) {
        res.status(422).json({ err: 'imagen of the is required.' });
        return;
    }
    if (!proveedor) {
        res.status(422).json({ err: 'proveedor of the is required.' });
        return;
    }
    if (!categoria) {
        res.status(422).json({ err: 'categoria of the is required.' });
        return;
    }
    var clientee = new productos_1.default({
        nombre: nombre,
        precio: precio,
        unidad: unidad,
        imagen: imagen,
        proveedor: proveedor,
        categoria: categoria
    });
    clientee.save(function (err, producto) {
        if (err) {
            res.status(500).json({ err: err });
        }
        res.status(200).json({ producto: producto });
    });
}
exports.createProducto = createProducto;
function updateProducto(req, res, next) {
    var id = req.params.id;
    productos_1.default.findByIdAndUpdate(id, req.body, function (err, producto) {
        if (err) {
            res.status(500).json({ err: err });
        }
        res.status(200).json({ producto: producto });
    });
}
exports.updateProducto = updateProducto;
function deleteProducto(req, res, next) {
    var id = req.params.id;
    productos_1.default.findByIdAndRemove(id, function (err, producto) {
        if (err) {
            res.status(500).json({ err: err });
        }
        res.status(200).json({ producto: producto });
    });
}
exports.deleteProducto = deleteProducto;
//# sourceMappingURL=productos.js.map