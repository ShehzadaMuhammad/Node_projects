//03
let person : string = "Eric";
//lowerCase
console.log(person.toUpperCase());
//uppercase
console.log(person.toUpperCase());
//titlecase
function convertToTitleCase(str){
    if(!str){
        return " "
    }
    return str.toLowerCase().replace(/\b\w/g, s => s.toUpperCase());
}
console.log(convertToTitleCase("eRiC"));