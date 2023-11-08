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
// function counter (paragraph:string){
//     let freeWhiteSpace = paragraph.replace(/\s/g,"")
//         return freeWhiteSpace.length;
// }
const counter = (paragraph) => paragraph.replace(/\s/g, "").length;
function startWordCounter(counter) {
    return __awaiter(this, void 0, void 0, function* () {
        do {
            let res = yield inquirer_1.default.prompt({
                type: "input",
                message: "Input your text here...",
                name: "paragraph"
            });
            console.log(counter(res.paragraph));
        } while (true);
    });
}
startWordCounter(counter);
