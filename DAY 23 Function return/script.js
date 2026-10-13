// REVERSE A STRING

let str = "abcdef";
let t = "";

for(let i = str.length-1;i>=0;i--){
    t = t + str[i];  
}
console.log(t);

// PALINDROME

let h = "nayan";
let u = "";

for(let j = h.length-1; j>=0 ;j--){
    u = u + h[j];  
}

if(h == u){
    console.log("palindrome")
}else{
    console.log(" not a palindrome");
}

// -------------------------------RETURN A VALUE --------------------------------------------//

// REVERSE A STRING USING FUNCTION AND RETURN A VALUE

function reverse1(p){
    let rev = "";

    for(let k = p.length-1; k>=0 ;k--){
        rev = rev + p[k];  
    }
    return rev;
}

console.log(reverse1("nayan"));

// PAINDROME OF STRING CODE USING FUNCTION 

function isPalindrome(y){
    
    let m = "";

    for(let j = y.length-1; j>=0 ;j--){
        m = m + y[j];  
    }   

    if(y == m){
        return y +" IS PALINDROME";
    }else{
        return y +" IS NOT PALINDROME";
    }

}

console.log(isPalindrome("hello"));

// PLAINDROME OF A NUMBER

let number = 13431;
let j = 0;
let remainder;
let temp = number;

while(number != 0){
    remainder = number % 10;
    j = j * 10 + remainder;
    number = Math.floor(number/10);
}
//console.log(j);

if(temp == j){
    console.log("Is PAlindrome");
}
else{
    console.log("not palindrome");
}


// USING RETURN AND FUNCTION

function isPalin(mk){
    let reverse2 = 0;
    let lremainder;
    let temp1 = mk;

    while(mk!=0){
        lremainder = mk % 10;
        reverse2 = reverse2 * 10 + lremainder;
        mk = Math.floor(mk/10);
    }
    if(temp1 == reverse2){
        return temp1 + " Is palindrome";
    }
    else{
        return temp1 + " not a plaindrome";
    }
}

console.log(isPalin(43634));
console.log(isPalin(87653));