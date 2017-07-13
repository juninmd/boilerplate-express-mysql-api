const clientSrv = require('../service/clienteSrv');

module.exports = (app) => {

    // GET 
    // DELETE
    // req.params cliente/batata
    // req.query ?nome=batata

    // POST
    // req.body

    app.get("/cliente/:nome", (req, res) => {
        clientSrv.validar(req.params.nome)
            .then(q => {
                return res.status(200).send(q);
            })
            .catch(err => {
                return res.status(err.statusCode).send(err);
            })
    })

    app.post("/cliente/", (req, res) => {
        clientSrv.validar(req.body.nome)
            .then(q => {
                return res.status(200).send(q);
            })
            .catch(err => {
                return res.status(err.statusCode).send(err);
            })
    })

    app.post("/clientex/", (req, res) => {
        clientSrv.validar(req.query.nome)
            .then(q => {
                return res.status(200).send(q);
            })
            .catch(err => {
                return res.status(err.statusCode).send(err);
            })
    })
}