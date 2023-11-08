// classes intypscript
 


class school {
    
    name:string;
    
    students:student[]=[];
    teachers:teacher[]=[];
    addStudent (stdObj:student){
        this.students.push(stdObj)
    }

    addTeacher (techObj:teacher){
        this.teachers.push(techObj);
    }

    constructor (name:string){
        this.name=name;
    }
}


class student{
    name:string;
    age:number;
    schoolName:string;

    constructor(name:string,age:number,schoolName:string){
        this.name=name;
        this.age=age;
        this.schoolName=schoolName;
    }
}

class teacher extends student{
    email:string="";
    contact:string="";
 
    
    adddInfo(email:string,contact:string){
        this.email=email;
        this.contact=contact;
    }
}


let school1 = new school("Alpha")
let school2 = new school("noby")

let s1 = new student("bilal",40,school1.name);
let s2 = new student("tehseen",30,school2.name);
let t1 = new teacher("asad",42,school1.name);
let t2 = new teacher("asad",52,school2.name);


// addInfo
t1.adddInfo("abc@gmail.com","123456")
t2.adddInfo("qwc@gmail.com","752556")

//add student

school1.addStudent(s1);
school2.addStudent(s2);


//add teacher

school1.addTeacher(t1);
 school2.addTeacher(t2);


console.log(school1);
 console.log(school2);

// console.log(t1);
// console.log(t2);