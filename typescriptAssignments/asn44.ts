//44

function make_sandwich(...items: string[]): void {
    console.log("Making a sandwich with the following items:");
    for (let item of items) {
        console.log(`- ${item}`);
    }
    console.log("Sandwich is ready!\n");
}

// Call the function three times with different numbers of arguments
make_sandwich("Bread", "Cheese", "Tomato", "Lettuce", "Bacon");
make_sandwich("Bread", "Turkey", "Swiss Cheese", "Mustard");
make_sandwich("Bread", "Peanut Butter", "Jam");
