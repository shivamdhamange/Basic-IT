console.log("-----let ---------")
//let a ; declartion
//let a=20; intialization
// a=56; assignment

//variable with let declaration can only be initialized or declared 
//once in a same scope it can be assigned many times

let num;
num=50
num="mango"
num=false
console.log(num)

let qwer=66;
qwer="abcd"
console.log(qwer)

//scope -> local scope(block scope) and global scope

let alpha=50; //global
{
    let alpha="inside bock"; // local  //initialization
    console.log(alpha);
}
console.log(alpha)
