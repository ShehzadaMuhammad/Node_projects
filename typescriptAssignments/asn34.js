"use strict";
//34
let favorite_pizzas = ["Pepperoni", "Margherita", "Supreme"];
// Print the names of favorite pizzas
console.log("My favorite pizzas:");
for (let pizza of favorite_pizzas) {
    console.log(pizza);
}
// Modify the for loop to print sentences about the pizzas
console.log("\nMy favorite pizzas with sentences:");
for (let pizza of favorite_pizzas) {
    console.log(`I like ${pizza} pizza.`);
}
// Statement about loving pizza
console.log("\nI really love pizza!");
