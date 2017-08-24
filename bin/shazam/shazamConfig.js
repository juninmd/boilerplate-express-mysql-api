const package = require('../../package.json');

const shazam = require('shazam-middleware')({
    api: {
        name: package.name,
        version: package.version
    },
    slack:{
        urlHook: 'https://hooks.slack.com/services/***REMOVED***',
        channel: 'shazam'
    }
});


module.exports = shazam;