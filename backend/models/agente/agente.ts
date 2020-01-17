import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

//collections for MongoDB
const agenteSchema = new Schema({
    
    
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

export default mongoose.model('agente', agenteSchema);