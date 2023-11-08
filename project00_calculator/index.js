
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
const chalk_1 = __importDefault(require("chalk"));
const chalk_animation_1 = __importDefault(require("chalk-animation"));
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
function welcome() {
    return __awaiter(this, void 0, void 0, function* () {
        let rainbowTitle = chalk_animation_1.default.rainbow('Lets start command line calculator');
        yield sleep();
        rainbowTitle.replace('with NODE.JS, INQUIRER and CHALK');
        yield sleep();
        rainbowTitle.replace('Lets enjoy calculation!!!');
        yield sleep();
        rainbowTitle.stop();
        let pulseTitle = chalk_animation_1.default.pulse('Developed by Shehzada Muhammad.');
        yield sleep();
        pulseTitle.stop();
        let neonTitle = chalk_animation_1.default.neon(`
     _______________________
    |  ___________________  |
    | | CALCULATOR      0.| |
    | |___________________| |
    |  ___ ___ ___    ___   |
    | | 7 | 8 | 9 |  | + |  |
    | |___|___|___|  |___|  |
    | | 4 | 5 | 6 |  | - |  |
    | |___|___|___|  |___|  |
    | | 1 | 2 | 3 |  | x |  |
    | |___|___|___|  |___|  |
    | | . | 0 | = |  | / |  |
    | |___|___|___|  |___|  |
    |_______________________|`);
        yield sleep();
        neonTitle.stop();
        startLoop();
    });
}
function askQuestion() {
    return __awaiter(this, void 0, void 0, function* () {
        let answer = yield inquirer_1.default.prompt([
            {
                type: "list",
                name: "operator",
                message: chalk_1.default.yellowBright("Which operation you want to perform? \n"),
                choices: ["+ Addition", "- Subtraction", "* Multiplication", "/ Division"]
            },
            {
                type: "number",
                name: "num1",
                message: chalk_1.default.greenBright("Enter first number: ")
            },
            {
                type: "number",
                name: "num2",
                message: chalk_1.default.greenBright("Enter second number: ")
            }
        ]);
        switch (answer.operator) {
            case "+ Addition": {
                console.log(chalk_1.default.blue(`${answer.num1} + ${answer.num2} = ${answer.num1 + answer.num2}`));
                break;
            }
            case "- Subtraction": {
                console.log(chalk_1.default.blue(`${answer.num1} - ${answer.num2} = ${answer.num1 - answer.num2}`));
                break;
            }
            case "* Multiplication": {
                console.log(chalk_1.default.blue(`${answer.num1} x ${answer.num2} = ${answer.num1 * answer.num2}`));
                break;
            }
            case "/ Division": {
                console.log(chalk_1.default.blue(`${answer.num1} / ${answer.num2} = ${answer.num1 / answer.num2}`));
                break;
            }
            default: {
                console.log("Default code.");
                break;
            }
        }
    });
}
function startLoop() {
    return __awaiter(this, void 0, void 0, function* () {
        do {
            yield askQuestion();
            var again = yield inquirer_1.default.prompt([
                {
                    type: "checkbox",
                    name: "restart",
                    choices: ['Yes', 'No'],
                    message: chalk_1.default.yellowBright("Do you want to continue: ")
                }
            ]);
        } while (again.restart == 'Yes');
    });
}
welcome();
