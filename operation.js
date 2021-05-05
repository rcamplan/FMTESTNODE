const util = require('util');
const collection = require("./collection/index.json");
const filterAnimals = require('./filter');
const countCountries = require('./count');

const chooseOperation = (args) => {
  if (args.filter && typeof args.filter === "string") {
    const filteredCountries = filterAnimals(collection, args.filter);
    console.log(util.inspect(filteredCountries, { showHidden: false, depth: null }));
    return;
  }
  if (args.count) {
    const countriesAnimalsCount = countCountries(collection);
    console.log(util.inspect(countriesAnimalsCount, { showHidden: false, depth: null }));
    return;
  }
  console.log("No operation matched");
};

module.exports = chooseOperation;