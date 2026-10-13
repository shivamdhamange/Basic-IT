// IF ELSE NESTED

// QUESTION NO 1
// Write a program to find the largest of three numbers.

let num1 = 45;
let num2 = 30;
let num3 = 50;
let largest;    

if(num1>=num2){
    if(num1>=num3){
        largest = num1;
    }
    else{
        largest = num3;
    }
}
else{
    if(num2 >= num3){
        largest = num2;
    }
    else{
        largest = num3;
    }
}
console.log(largest + " is largest");

// QUESTION NO 2
// Write a program to check whether a number is positive, negative, or zero.

let number = -74;

if(number==0){
    console.log(number + " is zero");
}
else{
    if(number>0){
        console.log(number + " is positve");
    }
    else{
        console.log(number + " is negative");
    }
}

// QUESTION NO 3
// Write a program to check whether a person is eligible for voting and driving (voting ≥ 18, driving ≥ 21).

let age = 20;

if(age>=18){
    if(age>=21){
        console.log("eligible for voting as well as driving")
    }
    else{
        console.log("not eligible for driving but eligible for voting");
    }
}
else{
    console.log("not eligible for voting as well as driving");
}

// QUESTION NO 4
// Write a program to check whether a number is divisible by both 5 and 11.

let a = 11;

if(a % 5 == 0){
    if(a % 11 == 0){
        console.log("divisible by both");
    }
    else{
        console.log("only divisble by 5");
    }
}
else{
    if(a % 11 == 0){
        console.log("only divisible by 11");
    }
    else{
        console.log("not divisible by both");
    }
}

// QUESTION NO 5
// Write a program to find the youngest of three people based on their ages.

let age1 = 34;
let age2 = 20;
let age3 = 40;
let smallest;

if(age1<age2){
    if(age1<age3){
        smallest = age1;
    }
    else{
        smallest = age3;
    }
}
else{
    if(age2<age3){
        smallest = age2;
    }
    else{
        smallest = age3;
    }
}
console.log( "yongest is of age "+ smallest);

// QUESTION NO 6
// Write a program to check whether a triangle is valid using its three angles.

let angleA=90;
let angleB=45;
let angleC=45;
if(angleA>0 && angleB>0 && angleC>0){
    if(angleA+angleB+angleC == 180){
        console.log("Triangle is valid");
    }
    else{
        console.log("not a valid triangle");
    }
}
else{
    console.log("Angle should not be in negative values");
}

// QUESTION NO 7
//Write a program to calculate grade based on marks using nested conditions.
// 90 A+
// 89-80 A
// 79-70 B
// 69-60 C
// 59-50 D
// 49-40 E
// <40 Fail

let marks = 99;

if(marks>=40){
    if(marks<49){
        console.log("Grade E");
    }
    else{
        if(marks<59){
            console.log("Grade D");
        }
        else{
            if(marks<69){
                console.log("Grade C");
            }
            else{
                if(marks<79){
                    console.log("Grade B");
                }
                else{
                    if(marks<89){
                        console.log("Grade A");
                    }
                    else{
                        console.log("Grade A+");
                    }
                }
            }
        }
    }
}
else{
    console.log("you are failed in exam");
}

// QUESTION NO 8
// Write a program to check whether a year is a leap year, and if yes, check whether it is a century year.

let year = 1928;

if(year %400 == 0){
    console.log("leap year");
    if(year%100 == 0){
        console.log("and century year");
    }
    else{
        console.log("but not a century year");
    }
}
else if(year %100 ==0){
    console.log("not a leap year");
}
else if(year %4==0 ){
    console.log("leap year");
    if(year%100 == 0){
        console.log("and century year");
    }
    else{
        console.log("but not a century year");
    }
}
else{
    console.log("not a leap year");
}

// QUESTION NO 9
// Write a program to compare three numbers and print whether they are equal or which one is largest.

let x = 34;
let y = 34;
let z = 34;
let largest1;

if(x==y && y==z){
    console.log("all numbers are equal");
    // largest1 = x;
}
else{
    if(x>y){
        if(x>z){
            largest1=x;
        }
        else{
            largest1=z;
        }
    }
    else{
        if(y>z){
            largest1 = y;
        }
        else{
            largest1 = z;
        }
    }
    console.log("So the largest NO. is "+ largest1);
}


// QUESTION NO 10
// Write a program to check whether a character is alphabet, and if yes, check whether it is uppercase or lowercase.

let char = "a";

if((char>="a" && char <="z") || (char>="A" && char<="Z")){
    if(char >="A" && char <="Z"){
        console.log( char +" is alphabet and Uppercase");
    }
    else{
        console.log( char +" is alphabet and lowercase");
    }
}
else{
    console.log("Character is not the alphabet");
}

// if(char >="A" && char <="Z"){
//     console.log( char +" is uppercase");
// }
// else{
//     console.log( char + " is lowercase");
// }
// if(char !== char.toLowerCase()){
//     console.log("Uppercase");
// }
// else{
//     console.log("lowercase");
// }

// e!==e
// H!=h