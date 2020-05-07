const add = (a,b) => {
    return a+b
}

const sub = (a,b) => {
    return a-b
}

console.log("print from totest3 ", add(2,3));
console.log("print from totest3 ", sub(2,3));

module.exports = {
    add,
    sub
}