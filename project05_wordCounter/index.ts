import inquirer from "inquirer"

// function counter (paragraph:string){
    
//     let freeWhiteSpace = paragraph.replace(/\s/g,"")
    
//         return freeWhiteSpace.length;

// }
const counter = (paragraph:string)=> paragraph.replace(/\s/g,"").length
 async function startWordCounter(counter:(text:string)=>number){
    
    do{
          let res = await inquirer.prompt({
        type:"input",
        message:"Input your text here...",
        name:"paragraph"
    })
    console.log(counter(res.paragraph));
    } while(true);
 
}
startWordCounter(counter);