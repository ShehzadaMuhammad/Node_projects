//42
function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

function make_great(magicians: string[]): string[] {
    let great_magicians: string[] = [];
    for (let magician of magicians) {
        great_magicians.push(`${magician} the Great`);
    }
    return great_magicians;
}

let magician_names: string[] = ["ratan lal", "chaman lal", "mbbs", "munna bai"];

// Call make_great() to modify the magician names
let great_magicians = make_great(magician_names);

// Call show_magicians() to see the modified list
show_magicians(great_magicians);
