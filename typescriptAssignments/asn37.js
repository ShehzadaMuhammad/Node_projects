"use strict";
//37
function make_shirt(size = "Large", message = "I love TypeScript") {
    console.log(`You have ordered a ${size}-sized T-shirt with the message: "${message}"`);
}
// Create a large shirt with the default message
make_shirt();
// Create a medium shirt with the default message
make_shirt("Medium");
// Create a shirt of any size with a different message
make_shirt("Small", "TypeScript is awesome!");
