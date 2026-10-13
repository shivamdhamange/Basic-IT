// reverse an array
// arr.reverse() method is used to reverse the array in place. It modifies the original array and returns a reference to the same array.
let arr = ["mango","orange","banana","strawberry"];

let temp = [];

for(let i = 0; i < arr.length ; i++){
    temp[i]=arr[arr.length-1-i]
}
console.log(temp);



// move all zero to the last of the array

// let arr = [1,0,2,0,4,0,8,0];
// let index = 0;

// for(i = 0; i < arr.length; i++) {
//     if(arr[i] != 0) {
//         let temp = arr[i];
//         arr[i] = arr[index];
//         arr[index] = temp;
//         index++;
//     }
// }

// console.log(arr);

let arr1 = [1,0,4,0,2,0,8,0];

let arr2 = [];
index = 0;

for(let j = 0 ; j < arr1.length ; j++){
    if(arr1[j] != 0){
        arr2[index]=arr1[j];
        index++;
    }
    
}
while(index<arr1.length){
    arr2[index]=0;
    index++;
}
console.log(arr2);


// freq of the elements of an array

arr3 = [8,31,42,5,8,31,42,5,42,8,69]

let freq = {};

for(let k = 0; k < arr3.length ; k++){
    if(freq[arr3[k]]==undefined){
        freq[arr3[k]]=1;
    }
    else{
        freq[arr3[k]]++;
    }
}
console.log(freq);

