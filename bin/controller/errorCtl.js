module.exports = (app) => {

    app.get("/error/function", (req, res, next) => {
        setTimeout(function() {
            kkkkk
        }, 2000);
    })

    app.get("/error/next", (req, res, next) => {
        next(new Error('aaa'));
    })

    app.get("/error", (req, res, next) => {
        for (i = 0; i < 999; i++) {
            console.info('aaaaa');
        }
        batata

    })

}