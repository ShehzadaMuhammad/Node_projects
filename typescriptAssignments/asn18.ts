// Define an array of places you'd like to visit
let placesToVisit: string[] = ["Paris", "Machu Picchu", "Tokyo", "Santorini", "Great Barrier Reef"];

// Print the original order of the array
console.log("Original Order:", placesToVisit);

// Print the array in alphabetical order without modifying the original list
console.log("Alphabetical Order:", [...placesToVisit].sort());

// Print the original order to show it's unchanged
console.log("Original Order:", placesToVisit);

// Print the array in reverse alphabetical order without modifying the original list
console.log("Reverse Alphabetical Order:", [...placesToVisit].sort().reverse());

// Print the original order to show it's still unchanged
console.log("Original Order:", placesToVisit);

// Reverse the order of your list
placesToVisit.reverse();
console.log("Reversed Order:", placesToVisit);

// Reverse the order of your list again to get back to the original order
placesToVisit.reverse();
console.log("Original Order (after reversing again):", placesToVisit);

// Sort the array in alphabetical order and print it
placesToVisit.sort();
console.log("Sorted in Alphabetical Order:", placesToVisit);

// Sort the array in reverse alphabetical order and print it
placesToVisit.reverse();
console.log("Sorted in Reverse Alphabetical Order:", placesToVisit);
