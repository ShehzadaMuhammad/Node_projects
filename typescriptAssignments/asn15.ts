let guests : string[]=["Muhammad","Talha","Eesa"]

let unavailableGuests = "Muhammad";
let newGuest = "Abdullah";

guests = guests.map(guest => guest === unavailableGuests? newGuest:guest)
guests.forEach(guests =>{
    console.log(`dear ${guests},I would be honored if take dinner with me`)
})