"use strict";
let guests = ["Muhammad", "Talha", "Eesa"];
let unavailableGuests = "Muhammad";
let newGuest = "Abdullah";
guests = guests.map(guest => guest === unavailableGuests ? newGuest : guest);
guests.unshift("Muhammad");
let middleIndex = Math.floor(guests.length / 2);
guests.splice(middleIndex, 0, "Rahmat");
guests.push("Khalid");
//informing about limited space 
console.log("Unfortunately, my new dinner table won't arrive in time and I can invite only two people for dinner.");
while (guests.length > 2) {
    let removedGuests = guests.pop();
    if (removedGuests) {
        console.log(`I am sorry ${removedGuests},I can't invite you to dinner`);
    }
}
guests.forEach(guest => {
    console.log(`Dear ${guest}, you're still invited to dinner. Looking forward to it!`);
});
// Remove the last two names
while (guests.length > 0) {
    guests.pop();
}
// Print the list to make sure it is empty
console.log("Current guest list:", guests);
