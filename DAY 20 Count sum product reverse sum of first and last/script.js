console.log(Math.floor(5.5)); //lower value 
console.log(Math.ceil(14.3)); // upper value


// count no of digits

console.log("COUNT OF DIGIT");
let num = 34567;
let count = 0;

while (num!=0){
    num = Math.floor(num / 10);      // in javascript it gives value in float if not properly divisible that s why we use math .floor
    count++;
}
console.log(count);


// sum of digits

console.log("SUM OF DIGITS");
let num1 = 7895;
let sum = 0;
let remainder;

while(num1 != 0){
    remainder = num1 % 10;
    sum = sum + remainder;
    num1 = Math.floor(num1/10);
}
console.log(sum);

// product of digits

console.log("Products OF DIGITS");
let num3 = 9453;
let product = 1;
let rem;

while(num3 != 0){
    rem = num3 % 10;
    product = product * rem;
    num3 = Math.floor(num3/10);
}
console.log(product);


// reverse a number // example 123 output -> 321

console.log("Revese a number");
let n = 123;
let reverse = 0;
let r ;

while(n != 0){
    r = n % 10;
    reverse = reverse * 10 + r;
    n = Math.floor(n / 10);
}
console.log(reverse);

// write a program to find first and last digit of a number
console.log("first and last");
let m = 3456;

//last digit
let t = m % 10;
console.log("last digit : "+t);

//first digit
let first;
while(m != 0){
    first  = m % 10;
    m = Math.floor(m/10);
}
console.log("first digit : "+first);


// write a program to find sum of first and last digit of a number
console.log("first and last");
let m1 = 3456;

//last digit
let last = m1 % 10;
console.log("last digit : "+last);

//first digit
let f;
while(m1 != 0){
    f  = m1 % 10;
    m1 = Math.floor(m1/10);
}
console.log("first digit : "+f);

//sum of last and first
let sum1 = last + f;
console.log("sum of digits first and last : "+sum1);