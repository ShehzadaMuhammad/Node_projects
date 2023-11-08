//16

let guests : string[]=["Muhammad","Talha","Eesa"]

let unavailableGuests = "Muhammad";
let newGuest = "Abdullah";
guests = guests.map(guest => guest === unavailableGuests? newGuest:guest)

console.log("Good news for everyone,we found more space so 3 more friends will join us");
guests.unshift("Muhammad")

let middleIndex = Math.floor(guests.length/2)
guests.splice(middleIndex,0,"Rahmat")

guests.push("Khalid");




guests.forEach(guests =>{
   console.log(`dear ${guests},I would be honored if take dinner with me`)
})