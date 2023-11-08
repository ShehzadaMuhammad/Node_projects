"use strict";
//38
function describe_city(city, country = "Unknown") {
    console.log(`${city} is in ${country}.`);
}
// Call the function for three different cities
describe_city("Karachi", "Pakistan");
describe_city("New York"); // Uses the default country
describe_city("Sydney", "Australia");
