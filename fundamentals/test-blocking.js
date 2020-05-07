a = () =>{
    console.log('inside a()');
}
b = () =>{
    console.log('inside b()');
}
c = () =>{
    console.log('inside c()');
}
//call in sequence
console.log("Start");
a();
console.log('a is finished!')

b();
console.log('b is finished!')

c();
console.log('c is finished!')

console.log("End")