const mod = require('./privatefn');

// This doesnt mock B to return 'C'
// mod.B = jest.fn();
// mod.B.mockReturnValue("C")

const { __RewireAPI__ } = require('./privatefn');
__RewireAPI__.__Rewire__('B',jest.fn().mockReturnValue("C"))

describe("suite",()=>{
    test("test", ()=>{
        const ret = mod.A()
        expect(ret).toEqual("CA")
    })
})