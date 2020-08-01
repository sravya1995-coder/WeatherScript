const argv = require('yargs')
    .options({
        address: {
            alias: 'd',
            desc: 'City Address to get the weather',
            demand: true
        }
    })
    .help()
    .version()
    .argv;

module.exports = {
    argv
}
