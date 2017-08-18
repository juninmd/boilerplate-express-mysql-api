const clienteSrv = require('../service/clienteSrv');
const clienteMdl = require('../middleware/clienteMdl');

module.exports = (app) => {
    app.get("/cliente/:nome", clienteMdl.validateBody, (req, res, next) => {
        clienteSrv.validar(req.params.nome)
            .then(q => res.status(200).send(q))
            .catch(err => next(err))
    })

    app.post("/cliente/", clienteMdl.validateBody, (req, res, next) => {
        clienteSrv.validar(req.body.nome)
            .then(q => res.status(200).send(q))
            .catch(err => next(err))
    })

    app.post("/clientex/", clienteMdl.validateBody, (req, res, next) => {
        clienteSrv.validar(req.query.nome)
            .then(q => res.status(200).send(q))
            .catch(err => next(err))
    })
}