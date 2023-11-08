"use strict";
//45
function createCar(manufacturer, modelName, ...options) {
    let carInfo = {
        manufacturer: manufacturer,
        modelName: modelName,
    };
    for (const [key, value] of options) {
        carInfo[key] = value;
    }
    return carInfo;
}
// Call the function with required information and optional details
const car = createCar("Toyota", "Camry", ["color", "Blue"], ["year", 2023]);
// Print the car information
console.log(car);
