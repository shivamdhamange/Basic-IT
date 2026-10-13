// LADDER IF ELSE

// QUESTION NO 1
//Write a program to print grades based on marks:

// ≥90: A

// ≥75: B

// ≥60: C

// ≥40: D

// Else: Fail

let marks = 89;

if(marks>=90){
    console.log("Grade A");
}
else if(marks<90 && marks>=75){
    console.log("Grade B");
}
else if(marks<75 && marks>=60){
    console.log("Grade C");
}
else if(marks<60 && marks>=40){
    console.log("Grade D");
}
else{
    console.log("FAIL");
}

// QUESTION NO 2
// Write a program to display the day name based on day number (1–7).

let day = 5;

if(day == 1)
    console.log("monday");
else if(day == 2)
    console.log("tuesday");
else if(day == 3)
    console.log("wednesday");
else if(day == 4)
    console.log("thrusday");
else if(day == 5)
    console.log("friday");
else if(day == 6)
    console.log("saturday");
else if(day == 7)
    console.log("sunday");
else
    console.log("Invalid input enter between 1 - 7");


//QUESTION NO 3
// Write a program to display the month name based on month number (1–12).

let month = 6;

if(month == 1)
    console.log("jan");
else if(month == 2)
    console.log("feb");
else if(month == 3)
    console.log("march");
else if(month == 4)
    console.log("april");
else if(month == 5)
    console.log("may");
else if(month == 6)
    console.log("june");
else if(month == 7)
    console.log("july");
else if(month == 8)
    console.log("augest");
else if(month == 9)
    console.log("sep");
else if(month == 10)
    console.log("oct");
else if(month == 11)
    console.log("november");
else if(month == 12)
    console.log("December");
else
    console.log("Invalid input enter between 1 - 7");


// QUESTION NO 4 
// Write a program to calculate electricity bill based on units consumed.
//  fixed rate 50 rupee
// for units less than 100 1.5
// for units less than 200 2.5
// for units less than 300 3.5
// for units more than 300 5 rupee

let units= 400;
let bill;

if(units<=0){
    console.log("electric bill is 50");
}
else if(units<100){
    bill = units * 1.5;
    console.log("The Electric bill is "+ bill);
}
else if(units<200){
    bill = units * 2.5;
    console.log("The Electric bill is "+ bill);
}
else if(units<300){
    bill = units * 3.5;
    console.log("The Electric bill is "+ bill);
}
else{
    bill = units * 5;
    console.log("The Electric bill is "+ bill);
}

// QUESTION NO 5
// Write a program to check whether a character is uppercase letter, lowercase letter, digit, or special symbol.

let char = "%";

if(char >= "A" && char <="Z"){
    console.log("UPPERCASE");
}
else if(char >= 'a' && char <= 'z'){
    console.log("LOWERCASE");
}
else if(char >= 0 && char <= 9){
    console.log("NUMBER");
}
else{
    console.log("SPECIAL SYMBOL");
}

// QUESTION NO 6
// Write a program to print salary bonus based on years of service.

let salary = 50000;
let yofService = 7;
let bonusPercent;
let bonus;
let grossSalary;

if(yofService>=10){
    bonusPercent = 0.15;  //15% bonus
}
else if(yofService>=5){
    bonusPercent = 0.10   //10% bonus
}
else if(yofService>=2){
    bonusPercent = 0.05   //5% bonus
}
else{
    bonusPercent = 0;
}

bonus = salary * bonusPercent;
grossSalary = salary + bonus;
console.log(bonus);
console.log(grossSalary);

// QUESTION NO 7
// Write a program to determine profit, loss, or no profit no loss.

let mrp = 5000;
let sellingPrice = 3000;

if(mrp<sellingPrice){
    console.log("PROFIT");
}
else if(mrp>sellingPrice){
    console.log("LOSS");
}
else{
    console.log("NO LOSS NO PROFIT");
}

// QUESTION NO 8
// Write a program to print division based on percentage (Distinction, First, Second, Pass, Fail).

let percentage = 56;

if(percentage>=75){
    console.log("Distinction Pass")
}else if(percentage>=60 && percentage<75){
    console.log("First class Pass");
}else if(percentage>=50 && percentage<59){
    console.log("second class Pass");
}else{
    console.log("FAIL")
}

// QUESTION NO 9
// Write a program to find the type of triangle (equilateral, isosceles, scalene).

let side1 = 645;
let side2 = 67;
let side3 = 78;


if(side1 == side2 && side2 == side3){
    console.log("Equilateral Triangle")
}
else if(side1 == side2 || side2 == side3 || side3 == side1){
    console.log("Isosceles Triangle")
}
else if(side1 !== side2 && side2 !== side3 && side3 !== side1){
    console.log("Scalene Triangle");
}
else{
    console.log("Not a Triangle Or Invalid Input")
}


// QUESTION NO 10
// Write a program to find the quadrant in which a point lies (based on x and y coordinates).

let x = -4;
let y = -6;

if(x==y){
    console.log("Center Point");
}
else if(x>0 && y>0){
    console.log("First Quadrant");
}
else if(x<0 && y>0){
    console.log("Second Quadrant");
}
else if(x<0 && y<0){
    console.log("Third quadrant");
}
else if(x>0 && y<0){
    console.log("Fourth quadrant");
}
else{
    console.log("enter the valid input");
}