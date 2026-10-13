// A IF ELSE
// QUESTION NO . 1
// Write a program to check whether a number is even or odd.

let a = 4;

if(a%2==0){
    console.log("even number");
}
else{
    console.log("odd number")
}

// QUESTION NO . 2
// Write a program to check whether a given number is positive or negative.

let b = 6;
if(b>=0){
    console.log("Positive Number");
}
else{
    console.log("Negative Number");
}

// QUESTION NO . 3
// Write a program to check whether a person is eligible to vote (age ≥ 18).

let age = 20;
if(age>=18){
    console.log("Eligible to vote");
}
else{
    console.log("Not Eligible to vote");
}

// QUESTION NO . 4
// Write a program to check whether a number is divisible by 5 or not.

let c = 40;
if(c%5==0){
    console.log("Divisible by 5");
}
else{
    console.log("Not Divisible by 5");
}

// QUESTION NO . 5
// Write a program to find the greater of two numbers.

let d = 40;
let e = 50;
if(d>e){
    console.log(d +" is greater than "+e);
}
else{
    console.log(e +" is greater than "+d);
}

// QUESTION NO . 6
// Write a program to check whether a year is a leap year or not.

let year = 1900;

if(year % 400 == 0){
    console.log(year + " is the leap year");
}
else if(year % 100 == 0){
    console.log(year + " is not the leap year");
}
else if(year % 4 == 0){
    console.log(year + " is the leap year");
}
else{
    console.log(year + " is not the leap year");
}

// QUESTION NO . 7
// Write a program to check whether a character is a vowel or consonant.

let character = "U";

if(character == "a" || character == "e" || character == "i" || character == "o" || character == "u" ||
    character == "A" || character == "E" || character == "I" || character == "O" || character == "U"){
    console.log(character+ " is vowel");
}
else{
    console.log(character+ " is consonents");
}

// QUESTION NO . 8
// Write a program to check whether a number is a multiple of 10.

let num = 40;

if(num%10==0){
    console.log(num+" is a multiple of 10");
}
else{
    console.log(num +" is not the multiple of 10")
}

// QUESTION NO . 9
// Write a program to check whether a student has passed or failed (pass if marks ≥ 40).

let marks = 50;

if(marks>=40){
    console.log("PASS");
}
else{
    console.log("FAIL");
}

// QUESTION NO . 10
// Write a program to check whether a number is zero or non-zero.

let number = -20;

if(number>0){
    console.log("Positive number");
}
else{
    console.log("negative number");
}



// QUESTION NO 6 ALTERNATIVE TRY

let year1 = 2000;

if(year1 % 4 == 0){
    if(year1 % 100 == 0){
        if(year1 % 400 == 0){
            console.log(year1+" is leap year");
        }
        else{
            console.log(year1+ " is not a leap year");
        }
    }
    else{
        console.log(year1+ " is leap year");
    }
}
else{
    console.log(year1+ "is not a leap year");
}