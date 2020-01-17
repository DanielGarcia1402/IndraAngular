"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var clientes_1 = require("../controllers/clientes/clientes");
var productos_1 = require("../controllers/productos/productos");
var categoria_1 = require("../controllers/categoria/categoria");
var empresa_1 = require("../controllers/empresa/empresa");
var agente_1 = require("../controllers/agente/agente");
// application routes
exports.default = (function (app) {
    var apiRoutesClientes = express.Router();
    var serviceClientes = express.Router();
    var apiRoutesProductos = express.Router();
    var serviceProductos = express.Router();
    var apiRoutesCategorias = express.Router();
    var serviceCategorias = express.Router();
    var apiRoutesEmpresa = express.Router();
    var serviceEmpresa = express.Router();
    var apiRoutesAgente = express.Router();
    var serviceAgente = express.Router();
    /**
     * POST EMPRESA
     */
    apiRoutesEmpresa.use('/empresa', serviceEmpresa);
    serviceEmpresa.get('/', empresa_1.getAllEmpresa);
    serviceEmpresa.get('/:id', empresa_1.getEmpresaById);
    serviceEmpresa.post('/', empresa_1.createEmpresa);
    serviceEmpresa.put('/:id', empresa_1.updateEmpresa);
    serviceEmpresa.delete('/:id', empresa_1.deleteEmpresa);
    app.use('/api', apiRoutesEmpresa);
    /**
     * POST AGENTE
     */
    apiRoutesAgente.use('/agente', serviceAgente);
    serviceAgente.get('/', agente_1.getAllAgente);
    serviceAgente.get('/:id', agente_1.getAgenteById);
    serviceAgente.post('/', agente_1.createAgente);
    serviceAgente.put('/:id', agente_1.updateAgente);
    serviceAgente.delete('/:id', agente_1.deleteAgente);
    app.use('/api', apiRoutesAgente);
    /**
     * POST CLIENTES
     */
    apiRoutesClientes.use('/clientes', serviceClientes);
    serviceClientes.get('/', clientes_1.getAllClientes);
    serviceClientes.get('/:id', clientes_1.getClientesById);
    serviceClientes.post('/', clientes_1.createCliente);
    serviceClientes.put('/:id', clientes_1.updateCliente);
    serviceClientes.delete('/:id', clientes_1.deleteCliente);
    app.use('/api', apiRoutesClientes);
    /**
     * POST PRODUCTOS
     */
    apiRoutesProductos.use('/productos', serviceProductos);
    serviceProductos.get('/', productos_1.getAllProductos);
    serviceProductos.get('/:id', productos_1.getPrductosById);
    serviceProductos.post('/', productos_1.createProducto);
    serviceProductos.put('/:id', productos_1.updateProducto);
    serviceProductos.delete('/:id', productos_1.deleteProducto);
    app.use('/api', apiRoutesProductos);
    /**
     * POST CATEGORIA
     */
    apiRoutesCategorias.use('/categorias', serviceCategorias);
    serviceCategorias.get('/', categoria_1.getAllCategoria);
    serviceCategorias.get('/:id', categoria_1.getCategoriaById);
    serviceCategorias.post('/', categoria_1.createCategoria);
    serviceCategorias.put('/:id', categoria_1.updateCategoria);
    serviceCategorias.delete('/:id', categoria_1.deleteCategoria);
    app.use('/api', apiRoutesCategorias);
});
//# sourceMappingURL=v1.js.map