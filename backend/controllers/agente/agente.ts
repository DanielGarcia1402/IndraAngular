import Agente from '../../models/agente/agente';

//CRUD of the application
export function getAllAgente(req, res, next) {
    Agente.find((err, agente) => {
        if(err) {
            res.status(500).json({err});
        }
        console.log(agente);
        res.status(200).json({agente});
    });
}

export function getAgenteById(req, res, next) {
  const id = req.params.id;  

  Agente.findById(id, (err, agente) => {
    if(err) {
        res.status(500).json({err});
    }
    res.status(200).json({agente});
  });
}

export function createAgente(req, res, next) {
    const empresaId               = req.body.empresaId;
    const codigoAgente            = req.body.codigoAgente;
    const nombreAgente            = req.body.nombreAgente;
    const estado                  = req.body.estado;
    const fechaModificacion       = req.body.fechaModificacion;
    const nombreCorto             = req.body.nombreCorto;

    if(!empresaId) {
        res.status(422).json({err: 'empresaId is required.'});
        return;
    } 
    if(!codigoAgente) {
        res.status(422).json({err: 'codigoAgente of the is required.'});
        return;
    }
    if(!nombreAgente) {
        res.status(422).json({err: 'nombreAgente of the is required.'});
        return;
    }
    if(!estado) {
        res.status(422).json({err: 'estado of the is required.'});
        return;
    }
    if(!fechaModificacion) {
        res.status(422).json({err: 'fechaModificacion of the is required.'});
        return;
    }
    if(!nombreCorto) {
        res.status(422).json({err: 'nombreCorto of the is required.'});
        return;
    }

    const agentee = new Agente({
        empresaId,
        codigoAgente,
        nombreAgente,
        estado,
        fechaModificacion,
        nombreCorto
    });

    agentee.save((err, agente) => {
        if(err) {
            res.status(500).json({err});
        }
        res.status(200).json({agente});
    });
}

export function updateAgente (req, res, next) {
    const id = req.params.id;

    Agente.findByIdAndUpdate(id, req.body, (err, agente) => {
        if(err) {
            res.status(500).json({err});
        }
        res.status(200).json({agente});
    });
}

export function deleteAgente(req, res, next) {
    const id = req.params.id;

    Agente.findByIdAndRemove(id, (err, agente) => {
        if(err) {
            res.status(500).json({err});
        }
        res.status(200).json({agente});
    });

}