const add = (a,b) => {
    return a + b;
}

const sub = (a, b) => {
    return a - b;
}

const divideUsingCallback = (a, b, callback) => {
    setTimeout(() => {
        if (b===0) return callback("error b===0", null)
        return callback(null, a / b);
    }, 2000);
}

const divideUsingPromise = (a, b) => {
    if (b === 0) {
        return Promise.reject("b = 0 error")
    }
    return Promise.resolve(a / b)
    }

module.exports = {
    add,
    sub,
    divideUsingCallback,
    divideUsingPromise
}
// console.log(add(2,3))
// console.log(sub(2,3))

// divideUsingCallback(2,3,(err,res)=>{
//     console.log(err)
//     console.log(res)

// })

// divideUsingCallback(2,0,(err,res)=>{
//     console.log(err)
//     console.log(res)

// })

// divideUsingPromise(2,3)
// .then((result)=>{
//     console.log(result)
// })
// .catch((err)=>{
// console.log(err)
// })

// divideUsingPromise(2,0)
// .then((result)=>{
//     console.log(result)
// })
// .catch((err)=>{ 
//     console.log(err)
// })