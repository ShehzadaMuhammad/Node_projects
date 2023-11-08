import inquirer from "inquirer"

// todo array
// function
// operation

let todos : string[] = ["muhammad","talha"];

 async function creatTodo (todos:string[]){

    do{
        const ans = await inquirer.prompt({
            type:"list",
            message:"Select an operation",
            name:"Select",
            choices:["add","update","view","delete"]
        })
        if(ans.Select == "add"){
            let addTodos = await inquirer.prompt({
                type:"input",
                message:"add item",
                name:"todo"
            })
            todos.push(addTodos.todo);
            console.log(todos);
        }
        if(ans.Select == "update"){
            let updateTodo = await inquirer.prompt({
                type:"list",
                message:"select item to update",
                name:"todo",
                choices:todos.map(item => item)
            })
            let addTodos = await inquirer.prompt({
                type:"input",
                message:"add item",
                name:"todo"
            })
           let newTodo = todos.filter(val => val !==updateTodo.todo)
           todos = [...newTodo,addTodos.todo]
           console.log(todos)
        }
    
        if(ans.Select == "view"){
            console.log(todos);
        }
        if(ans.Select == "delete"){
            let deleteTodo = await inquirer.prompt({
                type:"list",
                message:"select item to update",
                name:"todo",
                choices:todos.map(item => item)
        })
        let newTodo = todos.filter(val => val !==deleteTodo.todo)
        todos = [...newTodo];
        console.log(todos);
    }
    }while(true)
  
 }
creatTodo(todos)