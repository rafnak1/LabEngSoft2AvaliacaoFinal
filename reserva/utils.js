const fs = require('fs')
exports.read = () => JSON.parse(fs.readFileSync('./data.json', { encoding: 'utf8' }))
exports.write = (data) => fs.writeFileSync('./data.json', JSON.stringify(data))
exports.init = () => exports.write(['livre', 'livre', 'livre'])