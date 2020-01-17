import Empresa from '../../models/empresa/empresa';

//CRUD of the application
export function getAllEmpresa(req, res, next) {
    Empresa.find((err, empresa) => {
        if(err) {
            res.status(500).json({err});
        }
        console.log(empresa);
        res.status(200).json({empresa});
    });
}

export function getEmpresaById(req, res, next) {
  const id = req.params.id;  

  Empresa.findById(id, (err, empresa) => {
    if(err) {
        res.status(500).json({err});
    }
    res.status(200).json({empresa});
  });
}

export function createEmpresa(req, res, next) {
    const nit               = req.body.nit;
    const nombre            = req.body.nombre;
    const fechaModificacion = req.body.fechaModificacion;
    const codigo            = req.body.codigo;
    const nombreCorto       = req.body.nombreCorto;

    if(!nit) {
        res.status(422).json({err: 'nit is required.'});
        return;
    } 
    if(!nombre) {
        res.status(422).json({err: 'nombre of the is required.'});
        return;
    }
    if(!fechaModificacion) {
        res.status(422).json({err: 'fechaModificacion of the is required.'});
        return;
    }
    if(!codigo) {
        res.status(422).json({err: 'codigo of the is required.'});
        return;
    }
    if(!nombreCorto) {
        res.status(422).json({err: 'nombreCorto of the is required.'});
        return;
    }

    const empresaa = new Empresa({
        nit,
        nombre,
        fechaModificacion,
        codigo,
        nombreCorto
    });

    empresaa.save((err, empresa) => {
        if(err) {
            res.status(500).json({err});
        }
        res.status(200).json({empresa});
    });
}

export function updateEmpresa (req, res, next) {
    const id = req.params.id;

    Empresa.findByIdAndUpdate(id, req.body, (err, empresa) => {
        if(err) {
            res.status(500).json({err});
        }
        res.status(200).json({empresa});
    });
}

export function deleteEmpresa(req, res, next) {
    const id = req.params.id;

    Empresa.findByIdAndRemove(id, (err, empresa) => {
        if(err) {
            res.status(500).json({err});
        }
        res.status(200).json({empresa});
    });

}