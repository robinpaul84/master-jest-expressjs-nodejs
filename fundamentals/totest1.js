const a = 9;
// console.log(a);
// a = 10;
// console.log(a);

var b = 10;
b = 11;
// console.log(b)

let c = 10;
c = 12;
// console.log(c);

let d = true;
let e = "a string"
e = "string changed"

f = {
    a: "value of a",
    b: 10,
    c: true,
    d : {
        e : "sdfsdf",
        f: 88
    }
}
// console.log(f);

//use let instead of var always
function abc(){
    for (let i = 0; i< 5; i++){

    }
    // i cant be accessed outside for loop since scope of i is within the for loop
    //console.log(i) 

}

abc();

const employee = {
    name: "nick",
    'year-of-joining' : 2010,
    active: true,
    dob: {
        year:2010,
        day: 9,
        month:"june"
    }
}

// const { name , active } = employee
// console.log(name,active)
// console.log(employee.dob)

// let newemployee = employee;

// best way of doing if you have only one level of json in it
// let  newemployee = {...employee}

// newemployee = Object.assign({},employee); // equating employee to newemployee variable
let newemployee = JSON.parse(JSON.stringify(employee)) //converting json object to string

// let str = JSON.stringify(employee) // convert json object to string
// let strjson= JSON.parse(str) // convert string to json object

// console.log(typeof strjson, typeof str)

newemployee.dob.month = "sep"
// console.log(newemployee,employee)
// console.log(typeof str, typeof newemployee )
newemployee.name = "robin"
// newemployee.dob.month = "sep"

console.log(newemployee)
console.log(employee)


// this is also a json object with array support
const employee_array= [{
    name: "nick",
    'year-of-joining' : 2010,
    active: true,
    dob: {
        year:2010,
        day: 9,
        month:"june"
    }
},
{
    name: "robin",
    'year-of-joining' : 2010,
    active: true,
    dob: {
        year:2010,
        day: 9,
        month:"june"
    }
}
]

console.log(employee_array)
console.log(employee_array[0]) //first element of array
console.log(employee_array[1]) // second element of array