"use strict";
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
const inquirer_1 = __importDefault(require("inquirer"));
const af_ZA_1 = require("@faker-js/faker/locale/af_ZA");
const creatUsers = () => {
    let users = [];
    for (let i = 0; i < 5; i++) {
        let user = {
            id: i,
            pin: 1000 + i,
            name: af_ZA_1.faker.person.fullName(),
            balance: 1000000 * i,
            accountNumber: Math.floor(10000 * Math.random() * 900000)
        };
        users.push(user);
    }
    return users;
};
//atm machine
const atmMachine = (users) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield inquirer_1.default.prompt({
        type: "number",
        message: "Enter your pin",
        name: "Pin"
    });
    const user = users.find(val => val.pin == res.Pin);
    if (user) {
        console.log(`Welcome ${user.name}`);
        atmFun(user);
        return;
    }
    console.log("Invalid user pin");
});
//atm function
const atmFun = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const ans = yield inquirer_1.default.prompt({
        type: "list",
        name: "select",
        message: "kerna kia chahte ho???",
        choices: ["Withdraw", "balance check", "deposite", "exite"]
    });
    if (ans.select == "Withdraw") {
        const amount = yield inquirer_1.default.prompt({
            type: "number",
            message: "Enter amount",
            name: "rupee"
        });
        if (amount.rupee > user.balance) {
            return console.log("Insufficient balacne!");
        }
        if (amount.rupee > 25000) {
            return console.log("ap 25000 se ziada ki raqam nai nikal sakte");
        }
        console.log(`Withdraw amount : ${amount.rupee}`);
        console.log(`Remaining balance : ${user.balance - amount.rupee}`);
    }
    if (ans.select == "balance check") {
        console.log(`Balance: ${user.balance}`);
        return;
    }
    if (ans.select == "deposite") {
        const deposite = yield inquirer_1.default.prompt({
            type: "number",
            message: "Enter deposite amount",
            name: "rupee"
        });
        console.log(`Deposite amount: ${deposite.rupee}`);
        console.log(`Total balance : ${user.balance + deposite.rupee}`);
    }
    if (ans.select == "exite") {
        console.log("Thank you for using atm...");
        return;
    }
});
const users = creatUsers();
atmMachine(users);
