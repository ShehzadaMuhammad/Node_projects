"use strict";
//19
// list of guests
let guests = ["Talha", "Muhammad", "Abdullah", "Eesa"];
//print message to invite
function printInvitations(guestlist) {
    for (let guest of guestlist) {
        console.log(`dear ${guest},you are invited to dinner`);
    }
}
// print number of invitations
function numOfInvitations(guestlist) {
    const invitations = guestlist.length;
    console.log(`You are inviting ${invitations} people to dinner`);
}
printInvitations(guests);
numOfInvitations(guests);
