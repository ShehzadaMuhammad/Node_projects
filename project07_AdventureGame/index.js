"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const chalk_1 = __importDefault(require("chalk"));
class Player {
    constructor(name) {
        this.fuel = 100;
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    increaseFuel() {
        this.fuel = 100;
    }
}
class Opponent {
    constructor(name) {
        this.fuel = 100;
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
let player = await inquirer_1.default.prompt({
    type: "input",
    name: "name",
    message: "Please enter your name..."
});
let opponent = await inquirer_1.default.prompt({
    type: "list",
    name: "name",
    message: "Please select an opponent",
    choices: ["Talha", "Muhammad", "Eesa"]
});
let p1 = new Player(player.name);
let p2 = new Opponent(opponent.name);
do {
    if (opponent.name == "Talha") {
        let ask = await inquirer_1.default.prompt({
            type: "list",
            name: "opt",
            message: "",
            choices: ["Attack", "Drink option", "Run for life"]
        });
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(`${chalk_1.default.bold.red(p1.name)}'s fuel is ${p1.fuel}`);
                console.log(`${chalk_1.default.bold.green(p2.name)}'s fuel is ${p2.fuel}`);
                if (p1.fuel <= 0) {
                    console.log(chalk_1.default.bold.green.italic("You loose,Better luck next time"));
                    process.exit();
                }
            }
            if (num <= 0) {
                p2.fuelDecrease();
                console.log(`${chalk_1.default.bold.red(p2.name)}'s fuel is ${p2.fuel}`);
                console.log(`${chalk_1.default.bold.green(p1.name)}'s fuel is ${p1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log(chalk_1.default.bold.green.italic("You win!!!"));
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drink option") {
            p1.increaseFuel();
            console.log(chalk_1.default.bold.italic.green(`You drink Health portion,your fuel is ${p1.fuel}`));
        }
        if (ask.opt == "Run for life") {
            console.log(chalk_1.default.bold.red.italic("You loose,Better luck next time"));
            process.exit();
        }
    }
    ;
    //muhammad
    if (opponent.name == "Muhammad") {
        let ask = await inquirer_1.default.prompt({
            type: "list",
            name: "opt",
            message: "",
            choices: ["Attack", "Drink option", "Run for life"]
        });
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(`${chalk_1.default.bold.red(p1.name)}'s fuel is ${p1.fuel}`);
                console.log(`${chalk_1.default.bold.green(p2.name)}'s fuel is ${p2.fuel}`);
                if (p1.fuel <= 0) {
                    console.log(chalk_1.default.bold.green.italic("You loose,Better luck next time"));
                    process.exit();
                }
            }
            if (num <= 0) {
                p2.fuelDecrease();
                console.log(`${chalk_1.default.bold.red(p2.name)}'s fuel is ${p2.fuel}`);
                console.log(`${chalk_1.default.bold.green(p1.name)}'s fuel is ${p1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log(chalk_1.default.bold.green.italic("You win!!!"));
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drink option") {
            p1.increaseFuel();
            console.log(chalk_1.default.bold.italic.green(`You drink Health portion,your fuel is ${p1.fuel}`));
        }
        if (ask.opt == "Run for life") {
            console.log(chalk_1.default.bold.red.italic("You loose,Better luck next time"));
            process.exit();
        }
    }
    ;
    //eesa
    if (opponent.name == "Eesa") {
        let ask = await inquirer_1.default.prompt({
            type: "list",
            name: "opt",
            message: "",
            choices: ["Attack", "Drink option", "Run for life"]
        });
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(`${chalk_1.default.bold.red(p1.name)}'s fuel is ${p1.fuel}`);
                console.log(`${chalk_1.default.bold.green(p2.name)}'s fuel is ${p2.fuel}`);
                if (p1.fuel <= 0) {
                    console.log(chalk_1.default.bold.green.italic("You loose,Better luck next time"));
                    process.exit();
                }
            }
            if (num <= 0) {
                p2.fuelDecrease();
                console.log(`${chalk_1.default.bold.red(p2.name)}'s fuel is ${p2.fuel}`);
                console.log(`${chalk_1.default.bold.green(p1.name)}'s fuel is ${p1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log(chalk_1.default.bold.green.italic("You win!!!"));
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drink option") {
            p1.increaseFuel();
            console.log(chalk_1.default.bold.italic.green(`You drink Health portion,your fuel is ${p1.fuel}`));
        }
        if (ask.opt == "Run for life") {
            console.log(chalk_1.default.bold.red.italic("You loose,Better luck next time"));
            process.exit();
        }
    }
    ;
} while (true);
