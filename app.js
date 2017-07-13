const express = require('express');
const webconfig = require('./webconfig');
const consign = require('consign');
const app = express();

const package = require('./package.json');
// Don't forget to configure the paramters 
const shazam = require('shazam-middleware')({
    slack: webconfig.slack,
    api: {
        name: 'My App',
        version: package.version
    }
});

app.use(shazam.log);

consign()
    .include('middleware')
    .then('layers/controller')
    .into(app);

app.use(shazam.exception);

app.listen(webconfig.portApi, () => {
    console.log(`[${webconfig.nameApi}] rodando em: ${webconfig.urlApi}:${webconfig.portApi}`)
})