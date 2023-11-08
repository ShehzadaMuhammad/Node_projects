//32

let current_users: string[] = ["Talha", "Ali", "habib", "Umar", "Masood"];
let new_users: string[] = ["Umar", "rahman", "Dawood", "rahmat", "Fareed"];

for (let new_user of new_users) {
    // Convert the new username and current usernames to lowercase for case-insensitive comparison
    let new_user_lower = new_user.toLowerCase();
    let current_users_lower = current_users.map(username => username.toLowerCase());

    if (current_users_lower.includes(new_user_lower)) {
        console.log(`The username '${new_user}' is already in use. Please enter a new username.`);
    } else {
        console.log(`The username '${new_user}' is available.`);
    }
}

