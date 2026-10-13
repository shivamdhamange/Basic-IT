// Write a program to find frquency of each digit in a given number

let num = 8963563878;

let freq = {};

while(num != 0){
    let ld = num % 10;
    if(freq[ld]==undefined){
        freq[ld]=1;
    }
    else{
        // let count = freq[ld];
        // count++;
        // freq[ld]=count;
        freq[ld]++;
    }
    num = Math.floor(num/10);
}

console.log(freq);

//Printing key and value
console.log("digit  :  frequency")
for(let x in freq){
    console.log(x + "      :    " + freq[x]);
}