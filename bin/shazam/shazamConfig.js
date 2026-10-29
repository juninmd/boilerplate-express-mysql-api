const package = require('../../package.json');

const shazam = require('shazam-middleware')({
    api: {
        name: package.name,
        version: package.version
    },
    slack:{
        // Nunca versione o webhook: ele e uma credencial viva.
        // Defina urlHook no bin/env/<NODE_ENV>.env (ou em GitHub Secrets no CI).
        urlHook: process.env.urlHook,
        channel: process.env.channel || 'shazam'
    }
});


module.exports = shazam;