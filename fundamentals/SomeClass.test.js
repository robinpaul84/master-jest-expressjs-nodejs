const SomeClass = require('./SomeClass');

// Code to mock SomeClass Starts
jest.mock('./SomeClass'); // this happens automatically with automocking
const mMock = jest.fn().mockImplementation(
    ()=>console.log("inside mock")
    );
SomeClass.mockImplementation(() => {
  return {
    m: mMock,
  };
});
// Code to mock SomeClass Finish


const some = new SomeClass();
test("", ()=> {
    some.m('a', 'b');
})