module.exports = (app) => {
    app.get("/ping", (req, res, next) => {
        setTimeout(() => {
            return res.status(200).send({});
        }, 2000)
    })
}