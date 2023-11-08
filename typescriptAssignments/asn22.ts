// Create an array of colors
let colors: string[] = ["Red", "Blue", "Green"];

// Attempt to access an out-of-bounds index (intentional error)
let indexToAccess = 3; // This index doesn't exist in the array

try {
    let color = colors[indexToAccess];
    console.log("Accessed color:", color);
} catch (error) {
    console.error("Error:", error.message);
}

// Correct the error by accessing a valid index
indexToAccess = 1; // Change to a valid index
let validColor = colors[indexToAccess];
console.log("Validly accessed color:", validColor);