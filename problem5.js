function CarsOlderThan2000(inventory){
    let count = 0;
    for(var i=0;i<inventory.length;i++){
        if(inventory[i].car_year <2000){
            count++;
        }
    }
    return count;
}
module.exports = CarsOlderThan2000;