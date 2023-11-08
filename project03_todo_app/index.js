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
// todo array
// function
// operation
let todos = ["muhammad", "talha"];
function creatTodo(todos) {
    return __awaiter(this, void 0, void 0, function* () {
        do {
            const ans = yield inquirer_1.default.prompt({
                type: "list",
                message: "Select an operation",
                name: "Select",
                choices: ["add", "update", "view", "delete"]
            });
            if (ans.Select == "add") {
                let addTodos = yield inquirer_1.default.prompt({
                    type: "input",
                    message: "add item",
                    name: "todo"
                });
                todos.push(addTodos.todo);
                console.log(todos);
            }
            if (ans.Select == "update") {
                let updateTodo = yield inquirer_1.default.prompt({
                    type: "list",
                    message: "select item to update",
                    name: "todo",
                    choices: todos.map(item => item)
                });
                let addTodos = yield inquirer_1.default.prompt({
                    type: "input",
                    message: "add item",
                    name: "todo"
                });
                let newTodo = todos.filter(val => val !== updateTodo.todo);
                todos = [...newTodo, addTodos.todo];
                console.log(todos);
            }
            if (ans.Select == "view") {
                console.log(todos);
            }
            if (ans.Select == "delete") {
                let deleteTodo = yield inquirer_1.default.prompt({
                    type: "list",
                    message: "select item to update",
                    name: "todo",
                    choices: todos.map(item => item)
                });
                let newTodo = todos.filter(val => val !== deleteTodo.todo);
                todos = [...newTodo];
                console.log(todos);
            }
        } while (true);
    });
}
creatTodo(todos);
