import { faker } from '@faker-js/faker';
import chalk from 'chalk';
import inquirer from 'inquirer';

// Class Customer
class Customer {
    firstName: string;
    lastName: string;
    age: number;
    gender: string;
    mobNumber: number;
    accNumber: number;

    constructor(
        fName: string,
        lName: string,
        age: number,
        gender: string,
        mob: number,
        acc: number
    ) {
        this.firstName = fName;
        this.lastName = lName;
        this.age = age;
        this.gender = gender;
        this.mobNumber = mob;
        this.accNumber = acc;
    }
}

// Interface BankAccount
interface BankAccount {
    accNumber: number;
    balance: number;
}

// Class Bank
class Bank {
    customers: Customer[] = [];
    accounts: BankAccount[] = [];

    addCustomer(obj: Customer) {
        this.customers.push(obj);
    }

    addAccount(obj: BankAccount) {
        this.accounts.push(obj);
    }

    transaction(accObj: BankAccount) {
        this.accounts = this.accounts.map((acc) =>
            acc.accNumber !== accObj.accNumber ? acc : accObj
        );
    }
}

let myBank = new Bank();

// Create customer
for (let i = 1; i <= 3; i++) {
    let fname = faker.person.firstName(); // Corrected method call
    let lName = faker.person.lastName(); // Corrected method call
    let num = faker.phone.number(); // Simplified to ensure numeric result
    const cus = new Customer(fname, lName, 25 * i, 'male', parseInt(num), 1000 + i);
    myBank.addCustomer(cus);
    myBank.addAccount({ accNumber: cus.accNumber, balance: 100 * i });
}

// Bank functionality
async function bankService(bank: Bank) {
    let service = await inquirer.prompt({
        type: 'list',
        name: 'select',
        message: 'Please select the service',
        choices: ['Balance check', 'Cash Withdraw', 'Cash Deposit']
    });

    // balance check 
    if (service.select === 'Balance check') {
        let res = await inquirer.prompt({
            type: 'input',
            name: 'num',
            message: 'Please enter account number:'
        });

        let account = bank.accounts.find((acc) => acc.accNumber === parseInt(res.num));
        if (!account) {
            console.log(chalk.red.bold('Invalid Account Number'));
            return;
        }

        let customer = bank.customers.find((acc) => acc.accNumber == account?.accNumber);
        console.log(
            `Dear ${chalk.green.bold(customer?.firstName)} ${chalk.green.bold(
                customer?.lastName
            )}, your account balance is ${chalk.bold.blueBright(
                `$${account.balance}`
            )}`
        );
    }

    // cash withdraw
    else if (service.select === 'Cash Withdraw') {
        let res = await inquirer.prompt({
            type: 'input',
            name: 'num',
            message: 'Please enter account number:'
        });

        let account = bank.accounts.find((acc) => acc.accNumber === parseInt(res.num));
        if (!account) {
            console.log(chalk.red.bold('Invalid Account Number'));
            return;
        }

        let ans = await inquirer.prompt({
            type: 'input',
            name: 'amount',
            message: 'Please enter the amount to withdraw:',
        });

        let amount = parseFloat(ans.amount);
        if (amount > account.balance) {
            console.log(chalk.red.bold('Insufficient funds.'));
            return;
        }

        let newBalance = account.balance - amount;
        bank.transaction({ accNumber: account.accNumber, balance: newBalance });
        console.log(chalk.green.bold(`Withdrawal successful. New balance is $${newBalance}.`));
        console.log(newBalance)
    }

    // cash deposit
    else if (service.select === 'Cash Deposit') {
        let res = await inquirer.prompt({
            type: 'input',
            name: 'num',
            message: 'Please enter account number:'
        });

        let account = bank.accounts.find((acc) => acc.accNumber === parseInt(res.num));
        if (!account) {
            console.log(chalk.red.bold('Invalid Account Number'));
            return;
        }

        let ans = await inquirer.prompt({
            type: 'input',
            name: 'amount',
            message: 'Please enter the amount to deposit:',
        });

        let amount = parseFloat(ans.amount);
        let newBalance = account.balance + amount;
        bank.transaction({ accNumber: account.accNumber, balance: newBalance });
        console.log(chalk.green.bold(`Deposit successful. New balance is $${newBalance}.`));
    }
}

bankService(myBank);
