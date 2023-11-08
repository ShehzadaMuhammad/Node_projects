import inquirer from 'inquirer'
import { Faker } from '@faker-js/faker'
import { faker } from '@faker-js/faker/locale/af_ZA'

//requirments
// 1 users data = done
// 2 atm machine
// 3 atm function

interface user {
    id : number,
    pin :number,
    name:string,
    balance:number,
    accountNumber:number
}

const creatUsers = ()=>{
    let users:user[] = []
    
    for(let i =0;i < 5;i ++){
       let user:user = {
        id: i,
        pin:1000 + i,
        name:faker.person.fullName(),
        balance:1000000 * i,
        accountNumber:Math.floor(10000 * Math.random()* 900000)
       }
       users.push(user);
    }


    return users;
}


//atm machine

const atmMachine = async(users:user[]) =>{
    const res = await inquirer.prompt({
     
    type:"number",
    message:"Enter your pin",
    name:"Pin"    

    });

const user = users.find(val =>val.pin == res.Pin)
if(user){
    console.log(`Welcome ${user.name}`)
    atmFun(user);
    return
}
   console.log("Invalid user pin")

};

//atm function


const atmFun = async(user:user)=>{
    const ans = await inquirer.prompt({
        type:"list",
        name:"select",
        message:"kerna kia chahte ho???",
        choices:["Withdraw","balance check","deposite","exite"]
    })

    if(ans.select == "Withdraw"){
        const amount = await inquirer.prompt({
            type:"number",
           message:"Enter amount",
            name:"rupee"

        })

        if(amount.rupee > user.balance){
            return console.log("Insufficient balacne!")
        }
        if(amount.rupee > 25000){
            return console.log("ap 25000 se ziada ki raqam nai nikal sakte")
        }
        console.log(`Withdraw amount : ${amount.rupee}`)
        console.log(`Remaining balance : ${user.balance - amount.rupee}`)
    }
    if(ans.select == "balance check"){
        console.log(`Balance: ${user.balance}`)
        return
    }
    if(ans.select == "deposite"){
        const deposite = await inquirer.prompt({
            type:"number",
            message:"Enter deposite amount",
            name:"rupee"
        })
        console.log(`Deposite amount: ${deposite.rupee}`)
        console.log(`Total balance : ${ user.balance+ deposite.rupee}`)
    }
    if(ans.select == "exite"){
        console.log("Thank you for using atm...")
        return
    }

    
    
}
const users = creatUsers()

atmMachine(users);
