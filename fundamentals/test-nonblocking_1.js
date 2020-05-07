a = () =>{
    setTimeout(()=>{
        console.log('inside a()');
    },1000);   // 1 sec delay
}
b = () =>{
    setTimeout(()=>{
        console.log('inside b()');
    },2000);  // 2 sec delay
}
c = () =>{
    setTimeout(()=>{
        console.log('inside c()');
    },500);  //0.5 sec delay
}
//call in sequence
console.log("Start")
a();
console.log('a is finished!')

b();
console.log('b is finished!')

c();
console.log('c is finished!')

console.log("End")