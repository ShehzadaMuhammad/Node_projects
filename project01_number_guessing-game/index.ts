#!/usr/bin/env node

import inquirer from "inquirer";

let score : number = 0;

async function startloop() {
   let again;
    do {
         await guessNumber();

     again = await inquirer.prompt([
        {
            type:"list",
            name:"restart",
            choices:["yes","no"],
            message:"Do you want to continue: "
        }
    ]);
}while(again.restart ==="yes")
}

startloop();

async function guessNumber() {
   let guessNum = Math.floor(Math.random()*10);

   let Tip;

   if(guessNum %2 ==0){
    Tip = "Tip: Number is even."
    
    }
    else{
        Tip = "Tip: Number is odd."
    }
     
   const answer = await inquirer.prompt([

    {
        type: "number",
        name: "userGuess",
        message: `Guess a number between 1 and 10 (${Tip})`
    }
   ]);
   console.log(`Your guess is (${answer.userGuess}) and system generates ${guessNum}`)

   if(answer.userGuess===guessNum){
    score++;
    console.log(`Congratulations!!! your guess is correct and your score is ${score}`)
   }
   else{
    console.log(`Wrong guess,your score is ${score}.Better luck next time.`);
   }
    
}

