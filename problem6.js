function filterBMWAndAudiCars(inventory) {
    const filteredCars = [];
    for (let i = 0; i < inventory.length; i++) {
        const car = inventory[i];
        if (car.car_make === 'BMW' || car.car_make === 'Audi') {
            filteredCars.push(car);
        }
    }
    return filteredCars;
}

module.exports = filterBMWAndAudiCars;
