const inventory = require('../inventory');
const filterBMWAndAudiCars = require('../problem6');

const filterCar= filterBMWAndAudiCars(inventory);

console.log(JSON.stringify(filterCar, null, 2));