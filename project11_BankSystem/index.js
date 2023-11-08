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
const faker_1 = require("@faker-js/faker");
const chalk_1 = __importDefault(require("chalk"));
const inquirer_1 = __importDefault(require("inquirer"));
// Class Customer
class Customer {
    constructor(fName, lName, age, gender, mob, acc) {
        this.firstName = fName;
        this.lastName = lName;
        this.age = age;
        this.gender = gender;
        this.mobNumber = mob;
        this.accNumber = acc;
    }
}
// Class Bank
class Bank {
    constructor() {
        this.customers = [];
        this.accounts = [];
    }
    addCustomer(obj) {
        this.customers.push(obj);
    }
    addAccount(obj) {
        this.accounts.push(obj);
    }
    transaction(accObj) {
        this.accounts = this.accounts.map((acc) => acc.accNumber !== accObj.accNumber ? acc : accObj);
    }
}
let myBank = new Bank();
// Create customer
for (let i = 1; i <= 3; i++) {
    let fname = faker_1.faker.person.firstName(); // Corrected method call
    let lName = faker_1.faker.person.lastName(); // Corrected method call
    let num = faker_1.faker.phone.number(); // Simplified to ensure numeric result
    const cus = new Customer(fname, lName, 25 * i, 'male', parseInt(num), 1000 + i);
    myBank.addCustomer(cus);
    myBank.addAccount({ accNumber: cus.accNumber, balance: 100 * i });
}
// Bank functionality
function bankService(bank) {
    return __awaiter(this, void 0, void 0, function* () {
        let service = yield inquirer_1.default.prompt({
            type: 'list',
            name: 'select',
            message: 'Please select the service',
            choices: ['Balance check', 'Cash Withdraw', 'Cash Deposit']
        });
        // balance check 
        if (service.select === 'Balance check') {
            let res = yield inquirer_1.default.prompt({
                type: 'input',
                name: 'num',
                message: 'Please enter account number:'
            });
            let account = bank.accounts.find((acc) => acc.accNumber === parseInt(res.num));
            if (!account) {
                console.log(chalk_1.default.red.bold('Invalid Account Number'));
                return;
            }
            let customer = bank.customers.find((acc) => acc.accNumber == (account === null || account === void 0 ? void 0 : account.accNumber));
            console.log(`Dear ${chalk_1.default.green.bold(customer === null || customer === void 0 ? void 0 : customer.firstName)} ${chalk_1.default.green.bold(customer === null || customer === void 0 ? void 0 : customer.lastName)}, your account balance is ${chalk_1.default.bold.blueBright(`$${account.balance}`)}`);
        }
        // cash withdraw
        else if (service.select === 'Cash Withdraw') {
            let res = yield inquirer_1.default.prompt({
                type: 'input',
                name: 'num',
                message: 'Please enter account number:'
            });
            let account = bank.accounts.find((acc) => acc.accNumber === parseInt(res.num));
            if (!account) {
                console.log(chalk_1.default.red.bold('Invalid Account Number'));
                return;
            }
            let ans = yield inquirer_1.default.prompt({
                type: 'input',
                name: 'amount',
                message: 'Please enter the amount to withdraw:',
            });
            let amount = parseFloat(ans.amount);
            if (amount > account.balance) {
                console.log(chalk_1.default.red.bold('Insufficient funds.'));
                return;
            }
            let newBalance = account.balance - amount;
            bank.transaction({ accNumber: account.accNumber, balance: newBalance });
            console.log(chalk_1.default.green.bold(`Withdrawal successful. New balance is $${newBalance}.`));
            console.log(newBalance);
        }
        // cash deposit
        else if (service.select === 'Cash Deposit') {
            let res = yield inquirer_1.default.prompt({
                type: 'input',
                name: 'num',
                message: 'Please enter account number:'
            });
            let account = bank.accounts.find((acc) => acc.accNumber === parseInt(res.num));
            if (!account) {
                console.log(chalk_1.default.red.bold('Invalid Account Number'));
                return;
            }
            let ans = yield inquirer_1.default.prompt({
                type: 'input',
                name: 'amount',
                message: 'Please enter the amount to deposit:',
            });
            let amount = parseFloat(ans.amount);
            let newBalance = account.balance + amount;
            bank.transaction({ accNumber: account.accNumber, balance: newBalance });
            console.log(chalk_1.default.green.bold(`Deposit successful. New balance is $${newBalance}.`));
        }
    });
}
bankService(myBank);
