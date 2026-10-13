// STring length by using alpha.length

// Write a program to print all the alphabets

console.log("all alphabets");

let alpha = "abcdefghijklmnopqrstuvwxyz";

for (let index = 0; index < alpha.length; index++) {
    console.log(alpha[index]);
}

// Print the string i am going to dubai

console.log("I am going to dubai.");
let a = "I am going to dubai."

for (let i = 0; i < a.length; i++) {
    console.log(a[i]);
}

// even numbers using while loop
console.log("even no");
let n = 100;
let j = 1;
while(j<=n){
    if(j % 2 == 0){
        console.log(j);
    }
    j++;
}

// odd number using do while loop
console.log("odd no");
k = 1;
do{
    if(k % 2 != 0){
        console.log(k);
    }
    k++;
}while(k<=n);

// write a program to print the sum of all natural number till n 
console.log("sum of n numbers");
let m = 5;
let sum = 0;

for (let g = 1 ; g <= m; g++) {
    sum = sum + g;
}
console.log(sum);


// write a proogram to find sum of all even numbers between 1 to n 
console.log("sum of all even numbers from 1 to n");
let z = 10;
let sum1 = 0;
for (let y = 1; y <= z; y++) {
    if(y % 2 == 0){
        sum1 += y;
    }  
}
console.log(sum1);



// write a proogram to find sum of all odd numbers between 1 to n
console.log("sum of all odd numbers from 1 to n");
let x = 10;
let sum2 = 0;
for (let h = 1; h <= x; h++) {
    if(h % 2 != 0){
        sum2 += h;
    }  
}
console.log(sum2);


// Write a program to print multiplication table of any number
console.log("Multiplication table");
let t = 5;
let w = 10;
for (let q = 1; q <= w ; q++) {
    //console.log(t * q);
    console.log(t +" * "+ q + " = " + (t * q));
}










