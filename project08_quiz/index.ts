import chalk from "chalk"
import inquirer from "inquirer"

let apiLink = 
"https://opentdb.com/api.php?amount=21&category=18&difficulty=easy&type=multiple";

let fecthData = async(data:string)=>{
    let fecthQuiz = await fetch(data);
    let res = await fecthQuiz.json();
    return res.results;
}
let data = await fecthData(apiLink);

let startQuiz = async ()=>{
    let score:number = 0;
    //FOR USER NAME
    let name = await inquirer.prompt({
        type:"input",
        name:"fname",
        message:"What is your name?",
    })

    for(let i = 1; i <= 20; i++){
        let answers = [...data[i].incorrect_answers, data[i].correct_answer]
    

    let ans = await inquirer.prompt({
        type:"list",
        name:"Quiz",
        message:data[i].question,
        choices:answers.map((val:any)=> val)
    })


    if(ans.Quiz == data[i].correct_answer ){
        ++score
        console.log(chalk.bold.italic("CORRECT"));

    }else {
        console.log(`Correct answer is ${chalk.bold.red(data[i].correct_answer)}`)
    }

}
   console.log(`Dear ${chalk.bold.green(name.fname)},your score is ${chalk.bold.red(score)} out of 20`);
}

startQuiz();
