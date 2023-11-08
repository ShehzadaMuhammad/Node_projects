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
const chalk_1 = __importDefault(require("chalk"));
const inquirer_1 = __importDefault(require("inquirer"));
let apiLink = "https://opentdb.com/api.php?amount=21&category=18&difficulty=easy&type=multiple";
let fecthData = (data) => __awaiter(void 0, void 0, void 0, function* () {
    let fecthQuiz = yield fetch(data);
    let res = yield fecthQuiz.json();
    return res.results;
});
let data = await fecthData(apiLink);
let startQuiz = () => __awaiter(void 0, void 0, void 0, function* () {
    let score = 0;
    //FOR USER NAME
    let name = yield inquirer_1.default.prompt({
        type: "input",
        name: "fname",
        message: "What is your name?",
    });
    for (let i = 1; i <= 20; i++) {
        let answers = [...data[i].incorrect_answers, data[i].correct_answer];
        let ans = yield inquirer_1.default.prompt({
            type: "list",
            name: "Quiz",
            message: data[i].question,
            choices: answers.map((val) => val)
        });
        if (ans.Quiz == data[i].correct_answer) {
            ++score;
            console.log(chalk_1.default.bold.italic("CORRECT"));
        }
        else {
            console.log(`Correct answer is ${chalk_1.default.bold.red(data[i].correct_answer)}`);
        }
    }
    console.log(`Dear ${chalk_1.default.bold.green(name.fname)},your score is ${chalk_1.default.bold.red(score)} out of 20`);
});
startQuiz();
