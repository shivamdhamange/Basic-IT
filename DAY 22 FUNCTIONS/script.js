// FUNCTIONS
// function - > function is block of code written to perform some specific task 
// it is executed when it is called it promotes reusability of code

// function definition
// function funName(parameters){
//     function body
// }

// function calling
// funName(arguments)

function isEven(num){
    if(num%2==0){
        console.log(num +" is even");
    }
    else{
        console.log(num + " is odd");
    }
}

isEven(45);
isEven(67);

// first and last digits
function FandL(num1){
    let first;
    let last;

    //last digit
    last = num1 % 10;
    console.log("last digit "+last);

    //first digit

    while(num1 != 0){
        first = num1 % 10;
        num1 = Math.floor(num1 / 10);
    }
    console.log("first digit "+first);
}

FandL(568363);
FandL(12345625);

// reverse a no

function reverse(n){
    let reverse = 0;
    let r;
    while( n != 0){
        r = n % 10;
        reverse = reverse * 10 + r;
        n = Math.floor(n / 10);
    }
    console.log(reverse);
}

reverse(35246);
reverse(86342725);


