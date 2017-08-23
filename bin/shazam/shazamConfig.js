const package = require('../../package.json');

const shazam = require('shazam-middleware')({
    api: {
        name: package.name,
        version: package.version
    }
});


module.exports = shazam;