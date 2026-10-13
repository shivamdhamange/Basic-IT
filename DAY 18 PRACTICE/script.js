// Write a program to print n naturals numbers from 1 to  n using for loop / while loop

console.log("for loop")
let n = 4 ;
for(let i = 1; i <= n ;i++){
    console.log(i);
}

console.log("while loop");
let n1 = 5;
let i1 = 1;
while(i1<=n){
    console.log(i1);
    i1++;
}


// Write a program to print naturals no in revese order


console.log("for loop");
for(let n2=5 ; n2>0; n2--){
    console.log(n2);
}

console.log("while loop");
let n3 = 6;
while(n3>0){
    console.log(n3);
    n3--;
}


// ALL even no till n natural no

console.log("even numbers");
let abc = 10;
for (let j = 1; j <= abc; j++) {
    if(j % 2 == 0){
        console.log(j);
    }   
}



// ALL odd no till n natural no

console.log("odd numbers");
let abc1 = 15;
for (let j1 = 1; j1 <= abc1; j1++) {
    if(j1 % 2 != 0){
        console.log(j1);
    }   
}


