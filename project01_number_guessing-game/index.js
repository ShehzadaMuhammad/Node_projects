#!/usr/bin/env node
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
let score = 0;
function startloop() {
    return __awaiter(this, void 0, void 0, function* () {
        let again;
        do {
            yield guessNumber();
            again = yield inquirer_1.default.prompt([
                {
                    type: "list",
                    name: "restart",
                    choices: ["yes", "no"],
                    message: "Do you want to continue: "
                }
            ]);
        } while (again.restart === "yes");
    });
}
startloop();
function guessNumber() {
    return __awaiter(this, void 0, void 0, function* () {
        let guessNum = Math.floor(Math.random() * 10);
        let Tip;
        if (guessNum % 2 == 0) {
            Tip = "Tip: Number is even.";
        }
        else {
            Tip = "Tip: Number is odd.";
        }
        const answer = yield inquirer_1.default.prompt([
            {
                type: "number",
                name: "userGuess",
                message: `Guess a number between 1 and 10 (${Tip})`
            }
        ]);
        console.log(`Your guess is (${answer.userGuess}) and system generates ${guessNum}`);
        if (answer.userGuess === guessNum) {
            score++;
            console.log(`Congratulations!!! your guess is correct and your score is ${score}`);
        }
        else {
            console.log(`Wrong guess,your score is ${score}.Better luck next time.`);
        }
    });
}
