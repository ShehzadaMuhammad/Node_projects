import inquirer from "inquirer"

class student {
    name:string

    constructor(n:string){
        this.name=n
    }
}

class person {
    students:student[] =[]

    addStudents(obj:student) {
     this.students.push(obj)   
    }
}

const persons = new person();

const programStart = async (persons:person)=>{
    
    do{ console.log("Welcome guest")

    const ans = await inquirer.prompt({
        type:"list",
        name:"select",
        message:"Ap kis se bat karna pasand karen ge?",
        choices:["khud se:self","student"]
    })

    if(ans.select == "khud se:self"){
        console.log("M khud se bat karraha hu...")
        console.log("Meri tabiyat teek hy...")
    }
    if(ans.select == "student"){
        const ans = await inquirer.prompt({
            type:"input",
            message:"Ap kis student se bat karna chahte hy?",
            name:"student",
        })

        const studentObj = persons.students.find(val => val.name == ans.student)

        if(!studentObj){
            const name = new student(ans.student)
            persons.addStudents(name);

            console.log(`Hello I am ${name.name},or m theek hu`);
            console.log(persons.students)
        }

        if(studentObj){
            console.log(`Hello I am ${studentObj.name},or m theek hu........`);
            console.log(persons.students);
        }
    }}while(true)
    
   
}

programStart(persons)