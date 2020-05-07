a = (callback) =>{
    setTimeout(()=>{
        console.log('inside a()');
        callback();
    },1000);   // 1 sec delay
}
b = (cb) =>{
    setTimeout(()=>{
        console.log('inside b()');
        cb();
    },2000);  // 2 sec delay
}
c = (cb) =>{
    setTimeout(()=>{
        console.log('inside c()');
        cb();
    },500);  //0.5 sec delay
}
//call in sequence
console.log("Start")
a(()=>console.log('hey i am called from a, its done , do some processing of data you like'));


b(()=>console.log('hey i am called from b, its done , do some processing of data you like'));



c(()=>console.log('hey i am called from c, its done , do some processing of data you like')

);

console.log("End")