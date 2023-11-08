"use strict";
// import inquirer from "inquirer"
// import chalk from "chalk";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// //Convertion rates API LINK
// let apiLink = "https://v6.exchangerate-api.com/v6/7c574ff07ac7c38c45497571/latest/PKR"
// //fecth data 
// let fectchData = async (data: any) => {
//     let fectchData = await fetch(data);
//     let res = await fectchData.json();
//     return res.conversion_rates
// }
// let data =  await fectchData(apiLink);
// //object to array
// let countries = Object.keys(data);
// //user input first country
// let firstCountry = await inquirer.prompt({
//     type:"list",
//     name:"name",
//     message:"Converting from",
//     choices:countries,
// });
// //first country money
// let userMoney = await inquirer.prompt({
//     type:"number",
//     name:"rupee",
//     message:`Please enter amount in ${chalk.greenBright.bold(firstCountry.name)}:`
// });
// //convert country
// let secondCountry = await inquirer.prompt({
//     type:"list",
//     name:"name",
//     message:"Converting to",
//     choices:countries,
// });
// //conversion rate 
// let cnv =
// `https://v6.exchangerate-api.com/v6/7c574ff07ac7c38c45497571/pair/${firstCountry.name}/
// ${secondCountry.name}`
// //fecthing data for conversion rate
// let cnvData = async (data: any) => {
//     let cnvData = await fetch(data);
//     let res = await cnvData.json();
//     return res.conversion_rates;
// };
//  let conversionRate = await cnvData(cnv);
// let convertedRate = userMoney.rupee * conversionRate;
// console.log(`Your ${chalk.bold.greenBright(firstCountry.name)} ${chalk.bold.greenBright(userMoney.rupee)} in ${chalk.bold.greenBright(secondCountry.name)} is ${chalk.bold.greenBright(convertedRate)}`);
const inquirer_1 = __importDefault(require("inquirer"));
const chalk_1 = __importDefault(require("chalk"));
// Conversion rates API LINK
const apiLink = "https://v6.exchangerate-api.com/v6/7c574ff07ac7c38c45497571/latest/PKR";
// Fetch data
const fetchData = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch(data);
        const res = yield response.json();
        return res.conversion_rates;
    }
    catch (error) {
        console.error("Error fetching data:", error);
        return null; // Return null to indicate an error
    }
});
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Fetch conversion rate data
        const data = yield fetchData(apiLink);
        if (!data) {
            console.error("Unable to fetch conversion data. Exiting.");
            return;
        }
        // Convert the object to an array of countries
        const countries = Object.keys(data);
        // User input for the first country
        const firstCountry = yield inquirer_1.default.prompt({
            type: "list",
            name: "name",
            message: "Converting from",
            choices: countries,
        });
        // User input for the amount in the first currency
        const userMoney = yield inquirer_1.default.prompt({
            type: "number",
            name: "rupee",
            message: `Please enter amount in ${chalk_1.default.greenBright.bold(firstCountry.name)}:`,
        });
        // User input for the second country
        const secondCountry = yield inquirer_1.default.prompt({
            type: "list",
            name: "name",
            message: "Converting to",
            choices: countries,
        });
        // Get the conversion rate
        const conversionRate = data[secondCountry.name];
        if (typeof conversionRate !== 'number') {
            console.error("Invalid currency selection. Exiting.");
            return;
        }
        // Calculate the converted amount
        const convertedRate = userMoney.rupee * conversionRate;
        if (isNaN(convertedRate)) {
            console.error("Invalid calculation. Exiting.");
            return;
        }
        // Display the result
        console.log(`Your ${chalk_1.default.bold.greenBright(firstCountry.name)} ${chalk_1.default.bold.greenBright(userMoney.rupee)} in ${chalk_1.default.bold.greenBright(secondCountry.name)} is ${chalk_1.default.bold.greenBright(convertedRate)}`);
    }
    catch (error) {
        console.error("An error occurred:", error);
    }
}))();
