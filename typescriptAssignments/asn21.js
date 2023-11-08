"use strict";
// Create an array of book objects
let books = [
    {
        title: "Math",
        author: "MBS",
        genre: "subject",
        year: 2022,
    },
    {
        title: "1965",
        author: "Ayub khan",
        genre: "history",
        year: 2023,
    },
    {
        title: "Knowledge",
        author: "Talha",
        genre: "general knowledge",
        year: 2020,
    },
];
// Print information about the books
console.log("Books Information:");
for (let book of books) {
    console.log(`Title: ${book.title}`);
    console.log(`Author: ${book.author}`);
    console.log(`Genre: ${book.genre}`);
    console.log(`Year: ${book.year}`);
    console.log("-------------------");
}
