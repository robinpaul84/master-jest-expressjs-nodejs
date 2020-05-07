a = () =>{ return new Promise((resolve,reject)=> {
    setTimeout(()=>{
        console.log("a")
        resolve('inside a()');
        
    },1000);   // 1 sec delay
})
    
}
b = () =>{ return new Promise((resolve,reject)=> {
    setTimeout(()=>{
        resolve('inside b()');
        
    },2000);   // 2 sec delay
})
}
c = () =>{ return new Promise((resolve,reject)=> {
    setTimeout(()=>{
        resolve('inside c()');
        
    },500);   // .5 sec delay
})
}
//call in sequence
console.log("Start")

// chained way of calling promise
// a().then((result)=>{
//     console.log(result)
//     b().then((result)=>{
//         console.log(result)
//         c().then((result) => {
//             console.log(result)
//         })
//     })
// })


//recommended way of calling promise
// a().then(result=>{
//     console.log(result)
//     return b()
// })
// .then((result)=>{
//     console.log(result)
//     return c()
// })
// .then((result)=>{
//     console.log(result)
// })

callAllPromises = async () => {
    const resa = await a();
    console.log(resa)
    const resb = await b();
    console.log(resb)
    const resc = await c();
    console.log(resc)
}

callAllPromises();
console.log("End")