module.exports = (app) => {
    app.get("/error", (req, res, next) => {
        for (i = 0; i < 999; i++) {
            console.info('aaaaa');
        }
        batata

    })
}