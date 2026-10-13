//continue day 4 for let declaration

let abc=50;
{
    abc = 60; //assigning
}
console.log(abc)
//print wiil be 60 as it is assigning the variable
//and if we use let inside a scope it will give 50

let hbd=50;
{
    let hbd = 60;//initialization
}
console.log(hbd)

// NEW TOPIC

console.log("------const-------")

//const--> variable with const declaration can only be intialized once in the same scope
//cannot be assigned afterwards

const a = "hello";
{
    const a = "asdfg";
    console.log(a)
}
console.log(a)
