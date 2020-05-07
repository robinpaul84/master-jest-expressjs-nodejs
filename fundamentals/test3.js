
const functions = require('./totest3')
//note when you import totest3 as above , that file gets executed from top to bottom




console.log(functions.add(3,4))
console.log(functions.sub(5,2))

//to export just add function , use below
// const { add } = require('./totest3')

// console.log(add(3,4))