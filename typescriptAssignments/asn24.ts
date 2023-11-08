//24

let str1: string = "apple";
let str2: string = "banana";
let num1: number = 5;
let num2: number = 10;
let isTrue: boolean = true;
let isFalse: boolean = false;
let fruits: string[] = ["apple", "banana", "cherry"];
let colors: string[] = ["red", "green", "blue"];

// Tests for equality and inequality with strings
console.log("Test 1: Is str1 equal to str2? I predict False.");
console.log(str1 == str2); // False

console.log("Test 2: Is str1 not equal to str2? I predict True.");
console.log(str1 != str2); // True

// Tests using the lower case function
console.log("Test 3: Is 'apple' equal to 'APPLE' (case-insensitive)? I predict True.");
console.log(str1.toLowerCase() == "APPLE".toLowerCase()); // True

// Numerical tests
console.log("Test 4: Is num1 greater than num2? I predict False.");
console.log(num1 > num2); // False

console.log("Test 5: Is num1 less than or equal to num2? I predict True.");
console.log(num1 <= num2); // True

// Tests using "and" and "or" operators
console.log("Test 6: Is isTrue and isFalse? I predict False.");
console.log(isTrue && isFalse); // False

console.log("Test 7: Is isTrue or isFalse? I predict True.");
console.log(isTrue || isFalse); // True

// Test whether an item is in an array
console.log("Test 8: Is 'cherry' in the fruits array? I predict True.");
console.log(fruits.includes("cherry")); // True

// Test whether an item is not in an array
console.log("Test 9: Is 'orange' not in the fruits array? I predict True.");
console.log(!fruits.includes("orange")); // True

console.log("Test 10: Is 'green' not in the colors array? I predict False.");
console.log(!colors.includes("green")); // False
