import uniqueRandomArray from 'unique-random-array'
const pubNames = require('./pub-names.json')

const mainExport = {
  all: pubNames,
  random: uniqueRandomArray(pubNames),
}

export default mainExport
module.exports = mainExport // for CommonJS compatibility
