module.exports = (app) => {
    app.get("/timeout", (req, res, next) => {
        for (i = 0; i < 999; i++) {
            console.info('aaaaa');
        }
        return res.status(200).send({});
    })
}