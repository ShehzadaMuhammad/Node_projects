//35

let animals: string[] = ["Dog", "Cat", "Rabbit"];

// Print the names of animals
console.log("Common characteristic of animals:");

for (let animal of animals) {
    console.log(animal);
}

// Modify the for loop to print statements about the animals
console.log("\nStatements about these animals:");

for (let animal of animals) {
    console.log(`A ${animal.toLowerCase()} would make a great pet.`);
}

// Statement about their common characteristic
console.log("\nAny of these animals would make a great pet!");
