const package = require('../../package.json');

const shazam = require('shazam-middleware')({
    api: {
        name: package.name,
        version: package.version
    },
    slack:{
        urlHook: 'https://hooks.slack.com/services/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',
        channel: 'shazam'
    }
});


module.exports = shazam;