const test4 = require('./totest4')

// console.log(test4.add(2,3))
beforeAll(()=>{
    console.log("before all is called")
})
afterAll(()=>{
    console.log("before all is called")
})

beforeEach(()=>{
    console.log("before each is called")
})
afterEach(()=>{
    console.log("after each is called")
})

describe("suite 1", ()=>{
    test("test 1", ()=>{
        const res = test4.add(2,3);
        expect(res).toEqual(5)
    })
    test("test 2", ()=>{
        const res = test4.sub(5,3);
        expect(res).toEqual(2)
    })

    test("test 3", (done)=>{
        test4.divideUsingCallback(10,2,(err,res)=>{
        console.log(err)
        console.log(res)
        expect(err).toBeNull;
        expect(res).toEqual(5)
        done();
        })
    })
    test("test 4", (done)=>{
        test4.divideUsingPromise(10,5)
        .then(result =>{
            expect(result).toEqual(2)
            done()
        })
        .catch((err)=>{
            throw new Error("should not come to catch")
            done()
        })
    })

    test("test 5", (done)=>{
        test4.divideUsingPromise(10,0)
        .then(result =>{
            throw new Error("should not come to catch")
            done()
        })
        .catch((err)=>{
            expect(err).toEqual('b = 0 error')
            done()
        })
    })
})