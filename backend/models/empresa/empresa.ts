import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

//collections for MongoDB
const empresaShema = new Schema({
    
    
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

export default mongoose.model('empresa', empresaShema);