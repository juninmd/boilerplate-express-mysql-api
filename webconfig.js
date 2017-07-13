module.exports = {
    nameApi: 'Murilo Core',
    urlApi: 'http://localhost',
    portApi: process.env.PORT || 4666,
    dataConfig: {
        MYSQL: {
            host: 'localhost',
            user: 'root',
            database: 'murilo',
            password: '',
            port: 5500
        }
    },
    slack: {
        urlHook: process.env.urlHook,
        channel: process.env.channel,
        iconUrl: process.env.iconUrl,
        botusername: process.env.botusername
    }
};