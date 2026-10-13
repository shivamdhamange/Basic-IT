

// // let num = 2000;
// // if(num % 4 ==0){
// //     if(num % 100 == 0){
// //         if(num % 400 == 0){
// //             console.log("leap year");
// //         }else{ 
// //             console.log("not a leap yaer");
// //         }
// //     }else{
// //         console.log("leap year");
// //     }
// // }else{
// //     console.log("not a leap yaer");
// // }



let arr = [23,67,13,8,45,8];

for(let i = 0; i < arr.length-1; i++){
    for (let j = i + 1; j < arr.length ; j++) {
        if(arr[i] > arr[j]){
            let temp = arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
        }
    }
}
console.log(arr);
console.log(arr[arr.length-2]);




let temparray = [];

// for (let index = 0; index < arr.length; index++) {
//     let found = false;

//     for(let h = 0;h<temparray.length;h++){
//         if(arr[index]==temparray[h]){
//             found = true;
//             break;
//         }
//     }
//     if(!found){
//         temparray.push(arr[index]);
//     }
    
// }

for (let index = 0; index < arr.length; index++) {
    if(!temparray.includes(arr[index])){
        temparray.push(arr[index]);
    } 
}
console.log(temparray);
// i = 0 , j = 1 ,2 ,3 ,4  
// arr[0] > arr[1] false
// arr[0] > arr[2] true  swap 13 67 23 45 8
// arr[0] > arr[3] false
// arr[0] > arr[4] true  swap 8 67 23 45 13


// i = 1 , j = 2 ,3, 4
// arr[1] > arr[2] true swap 8 23 67 45 13
// arr[1] > arr[3] false
// arr[1] > arr[4] true swap 8 13 67 45 23


// i = 2 , j = 3 , 4
// arr[2] > arr[3] true swap 8 13 45 67 23
// arr[2] > arr[4] true swap 8 13 23 67 45

// i = 3 , j = 4
// arr[3] > arr[4] true swap 8 13 23 45 67


let t = [23,56,12,89,13,74,67,23,12];
let largest = -1;
let secondLargest;

for(let k = 0; k < t.length; k++){

    if(t[k]==largest || t[k]==secondLargest){
        continue;
    }
    
    if(t[k] > largest){
        secondLargest=largest;
        largest=t[k];
    }
    else if(t[k]>secondLargest && t[k]<largest){
        secondLargest=t[k];
    }
}
console.log(largest);
console.log(secondLargest);

// k = 0 ,t[0]>-1,23>-1  second = -1 largest = 23

// k = 1 ,t[1]>23,56>23  second = 23 largest = 56

// k = 2 ,t[2]>56,12>56 false

// k = 3 ,t[3]>56,89>56  second = 56 largest = 89

// k = 4 ,t[4]>89,13>89  false

