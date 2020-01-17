import * as express from 'express';

import {getAllClientes,getClientesById,createCliente,updateCliente,deleteCliente} from '../controllers/clientes/clientes';
import {getAllProductos,getPrductosById,createProducto,updateProducto,deleteProducto} from '../controllers/productos/productos';
import {getAllCategoria,getCategoriaById,createCategoria,updateCategoria,deleteCategoria} from '../controllers/categoria/categoria';

import {getAllEmpresa,getEmpresaById,createEmpresa,updateEmpresa,deleteEmpresa} from '../controllers/empresa/empresa';
import {getAllAgente,getAgenteById,createAgente,updateAgente,deleteAgente} from '../controllers/agente/agente';
    
// application routes
export default (app) => {

    const apiRoutesClientes = express.Router();
    const serviceClientes = express.Router();

    const apiRoutesProductos = express.Router();
    const serviceProductos = express.Router();

    const apiRoutesCategorias = express.Router();
    const serviceCategorias = express.Router();

    const apiRoutesEmpresa = express.Router();
    const serviceEmpresa = express.Router();

    const apiRoutesAgente = express.Router();
    const serviceAgente = express.Router();
    

    /**
     * POST EMPRESA
     */
    apiRoutesEmpresa.use('/empresa', serviceEmpresa);
    serviceEmpresa.get('/', getAllEmpresa);
    serviceEmpresa.get('/:id', getEmpresaById);
    serviceEmpresa.post('/', createEmpresa);
    serviceEmpresa.put('/:id', updateEmpresa); 
    serviceEmpresa.delete('/:id', deleteEmpresa);
    app.use('/api', apiRoutesEmpresa);


    /**
     * POST AGENTE
     */
    apiRoutesAgente.use('/agente', serviceAgente);
    serviceAgente.get('/', getAllAgente);
    serviceAgente.get('/:id', getAgenteById);
    serviceAgente.post('/', createAgente);
    serviceAgente.put('/:id', updateAgente); 
    serviceAgente.delete('/:id', deleteAgente);
    app.use('/api', apiRoutesAgente);


    /**
     * POST CLIENTES
     */
    apiRoutesClientes.use('/clientes', serviceClientes);
    serviceClientes.get('/', getAllClientes);
    serviceClientes.get('/:id', getClientesById);
    serviceClientes.post('/', createCliente);
    serviceClientes.put('/:id', updateCliente); 
    serviceClientes.delete('/:id', deleteCliente);
    app.use('/api', apiRoutesClientes);


    /**
     * POST PRODUCTOS
     */
    apiRoutesProductos.use('/productos', serviceProductos);
    serviceProductos.get('/', getAllProductos);
    serviceProductos.get('/:id', getPrductosById);
    serviceProductos.post('/', createProducto);
    serviceProductos.put('/:id', updateProducto); 
    serviceProductos.delete('/:id', deleteProducto);
    app.use('/api', apiRoutesProductos);


    /**
     * POST CATEGORIA
     */
    apiRoutesCategorias.use('/categorias', serviceCategorias);
    serviceCategorias.get('/', getAllCategoria);
    serviceCategorias.get('/:id', getCategoriaById);
    serviceCategorias.post('/', createCategoria);
    serviceCategorias.put('/:id', updateCategoria); 
    serviceCategorias.delete('/:id', deleteCategoria);
    app.use('/api', apiRoutesCategorias);



};

