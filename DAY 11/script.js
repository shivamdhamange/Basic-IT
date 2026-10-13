console.log("---------decision making------------")

// ONLY IF
// IF else
// nested if else
// if else ladder
// SWITCH

// ONLY IF

let age = 25;
if(age>=25){  // if condition is true then it will execute
    console.log("age is greater than 25");
}

// IF ELSE

let age1 = 18;
if(age1>=25){ // if condition is true then if will execute if not it will go to else block
    console.log("age is greater than 25");
}
else{
    console.log("age is less than 25")
}

// NESTED IF ELSE

let age2 = 30;

if (age >= 18) {
    if (age >= 60)
            console.log("Eligible to vote (Senior Citizen)\n");
    else
            console.log("Eligible for vote\n");
}
else {
    printf("Not eligible to vote (Under 18)\n");
    if (age >= 13) 
            console.log("teenager\n");
    else
            printf("not a teenager\n");
}


// IF ELSE LADDER

let i = 20;

if (i == 10)
    console.log("Not Eligible");
else if (i == 15)
    console.log("wait for three years");
else if (i == 20)
    console.log("You can vote");
else
    console.log("Not a valid age");

//SWITCH

let h= 18;

    // declaring switch cases
switch (h) {
    case 15:
        console.log("You are a kid");
        break;
    case 18:
        console.log("Eligible for vote");
        break;
    default:
        console.log("Default Case is executed");
        break;
}


