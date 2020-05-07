//private function 
const B = () => {
    return "B"
}

//public function
const A = ()=> {
    //calling private function
    const ret = B();
    return `${ret}A`;
};

module.exports = {
    A
}