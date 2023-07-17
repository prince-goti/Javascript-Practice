//creating object

/*let obj = {id:1, name:'prince',salary:30000}    //declaration of object

console.log(obj);

let emp = new Object()      //new method to create object

emp.id=2;
emp.name='parth'

console.log(emp);

function Emp(i,n,s){        //with a function to create a object
    this.id = i;
    this.name = n;
    this.salary = s;

}
const e = new Emp(3,'rushit',34000)

console.log(e);

console.log(emp.id);    //print a object 
console.log(obj['name']);   //print a object

emp.id = 102;      //change the value
emp.salary = 20000;   // add new object
emp['pincode'] = 34105;   // second method to add a object

delete emp.salary;        //delete a object

console.log(emp);  */


//************************************************************
// object method 

let emp = {               
    id : 101,
    name : 'prince',
    salary : 20000
};

let keys = Object.keys(emp);      
console.log(keys);

let values = Object.values(emp);
console.log(emp);

let entries = Object.entries(emp);
console.log(emp);

//Object.freeze(emp);    //no update and no create
Object.seal(emp);     //only update not a create

emp.id=100;
console.log(emp);

let p = Object.assign({x:2},emp);
console.log (p);