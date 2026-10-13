let arr = ["mango","orange"]

// push() --> it helps us to insert the element from ending of an array

arr.push("banana");
console.log(arr);

// unshift() --> it helps us to insert the element from the starting of an array

arr.unshift("strawberry");
console.log(arr);

// pop() --> it helps us to remove element from ending of an array

arr.pop();
console.log(arr);

// shift() --> it helps us to remove element from beginning of an array

arr.shift();
console.log(arr);



console.log("-------------------------QUESTIONS ARRAY--------------------------");
// print all even element of an array
console.log("Even elements of an array are: ");
let arr1 = [1,2,3,4,5,6,7,8,9,10,11,12];

for(let i=0; i<arr1.length; i++){
    if(arr1[i] % 2 == 0){
        console.log(arr1[i]);
    }
}


// print all odd element of an array
console.log("Odd elements of an array are: ");
let arr2 = [1,2,3,4,5,6,7,8,9,10,11,12];

for(let i=0; i<arr2.length; i++){
    if(arr2[i] % 2 != 0){
        console.log(arr2[i]);
    }
}

// sum of the even elements of an array
console.log("Sum of even elements of an array is: ");
let arr3 = [1,2,3,4,5,6,7,8,9,10,11,12];
let sum = 0;
for(let i=0; i<arr3.length; i++){
    if(arr3[i] % 2 == 0){
        sum += arr3[i];
    }
}
console.log(sum);

// sum of the odd elements of an array
console.log("Sum of odd elements of an array is: ");
let arr4 = [1,2,3,4,5,6,7,8,9,10,11,12];
let sum1 = 0;   
for(let i=0; i<arr4.length; i++){
    if(arr4[i] % 2 != 0){
        sum1 += arr4[i];
    }           
}
console.log(sum1);


// let arr5 = [1,26,345,4,56]

// arr5.sort((a,b)=>b-a)
// console.log(arr5)
// console.log(arr5[1]);


// let arr=[12,2,3,44,5]
// let largest=arr[0]
// let secondlargest=arr[0]

// for(i=0 ; i<=arr.length ; i++)
// {
//     if(arr[i]>largest)
//     {
//        secondlargest= largest
//        largest=arr[i]
//     }
//     // else if
//     // {
//     //     arr[i]>secondlargest
//     // }
// }
// console.log(secondlargest);




let arr6 = [45,67,67,89]
let abc = arr6; // here the memory location are not changed

abc[2]=90;
console.log(arr6);
console.log(abc);



// QUESTION NO 5 Write a javascript function to clone an array

function clone(kt){
    let temp =[];

    for(let y = 0; y < kt.length ; y++){
        temp[y]=kt[y];
    }
    return temp;
}

console.log(clone([34,56,1,4]));

// QUESTIONS NO 6 Write a program to reverse an array


function reverse(arr7){
let temp1 = [];
    for(let i = 0; i < arr7.length ; i++){
        temp1[i]=arr7[arr7.length-1-i]
    }
    return temp1;
}
console.log(reverse([78,56,34,1,98]));


// TWO POINTER APPROACH

let arr8 = [23,67,89,32,90,45,78];

let p1 = 0;
let p2 = arr8.length-1;

while(p1<p2){
    let temp = arr8[p2];
    arr8[p2]=arr8[p1];
    arr8[p1]=temp;

    p1++;
    p2--;
}

console.log(arr8);

// USING FUNCTION

function rev_array(arr10){
let p1 = 0;
let p2 = arr10.length-1;

    while(p1<p2){
        let temp = arr10[p2];
        arr10[p2]=arr10[p1];
        arr10[p1]=temp;

        p1++;
        p2--;
    }
    return arr10;
}
console.log(rev_array([45,67,67,89]));


// Write a simple JavaScript program to join all elements of the following array into a string.
// Sample array : mycolor = ["Red", "Green", "white", "Black"]:
// Expected output : "Red, Green, White, Black"

let mycolor = ["Red", "Green", "white", "Black"];

let str = "";
let symbol = ",";

for(let g = 0;g < mycolor.length; g++){
    if(g == mycolor.length-1){
        str = str + mycolor[g];
    }
    else{
        str = str + mycolor[g]+symbol;
    }
}

console.log(str);