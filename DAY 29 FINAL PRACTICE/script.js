// QUESTION NO 1

// let arr = [10,20,5,30,15,25,30];
// let first = -Infinity;
// let second;
// let third;

// for(let i = 0;i < arr.length ; i++){

//     if(arr[i]== first || arr[i]==second || arr[i]== third){
//         continue;
//     }

//     if(arr[i]>first){
//         third = second;
//         second = first;
//         first = arr[i];
//     }
//     else if(arr[i]>second){
//         third = second;
//         second = arr[i]
//     }
//     else{
//         third = arr[i];
//     }
// }
// console.log(third);


// QUESTION 2 SECOND SMALLEST

// let arr = [8,2,5,1,7,1];

// let first = Infinity;
// let second;

// for(let i = 0 ; i < arr.length ; i++){
//     if(arr[i]<first){
//         second = first;
//         first = arr[i];
//     }
//     else if(arr[i]>first && arr[i]<second){
//         second = arr[i];
//     }
// }

// console.log(second);


// QUESTION 3  SORTED

// let arr = [2,4,6,18,10];
// let sorted = true;

// for(let i = 0 ; i< arr.length ; i++){
//     if(arr[i]>arr[i+1]){
//         sorted = false;
//         break;
//     }
// }
// if(sorted){
//     console.log("YES");
// }
// else{
//     console.log("no");
// }

// QUESTION NO 4 duplicate

// let arr = [5, 2, 8, 4, 2, 6, 5];

// let duplicate = 0;

// for(let i = 0 ; i < arr.length ; i++){
//     for(let j = 0 ; j < i ; j++){
//         if(arr[i]== arr[j]){
//             duplicate = arr[i];
//             break;
//         }
//     }
//     if(duplicate != 0){
//         break;
//     }
// }

// console.log(duplicate);


// QUESTION NO 5 // positiv negative

// let arr = [2,-1,0,5,-6,0,8,-2];

// let pnzero = {positive : 0 , negative : 0 , zero : 0} ;

// for(let i = 0 ; i < arr.length ; i++){
//     if(arr[i]>0){
//         pnzero.positive++;
//     }
//     else if(arr[i]<0){
//         pnzero.negative++;
//     }
//     else{
//         pnzero.zero++;
//     }
// }

// console.log(pnzero.positive);
// console.log(pnzero.negative);
// console.log(pnzero.zero);

// QUESTION NO 6  move all zero

// let arr = [2,0,5,0,3,7,0];

// let temp = [];
// let index = 0;

// for(let i = 0 ; i < arr.length ; i++){
//     if(arr[i]!=0){
//         temp[index]=arr[i];
//         index++;
//     }
// }
// while(index<arr.length){
//     temp[index]=0;
//     index++
// }

// console.log(temp);

// QUESTION NO 7 missing no

// let arr = [1,2,3,4,6,7,8];
// let missing;
// for(let i = 0 ; i < arr.length ; i++){
//     if(arr[i] != i+1){
//         missing = i+1;
//         break;
//     }
// }

// console.log(missing); 

// QUESTION NO 8 find duplicate element


// let arr = [2,4,2,5,7,5,8,4,4];
// let temp = [];

// for(let i = 0 ; i < arr.length ; i++){

//     if(temp.includes(arr[i])){
//         continue;
//     }

//     for(let j = i+1 ; j < arr.length ; j++){
//         if(arr[i] == arr[j]){
//             temp.push(arr[i]);
//             break;
//         }
//     }
// }

// console.log(temp);

// QUESTION NO 9 array are same

// let arr = [1,2,3,4,5];
// let temp = [1,2,3,4,5];
// let same = true;

// for(let i = 0 ; i < arr.length ; i++){
//     if(arr[i]!=temp[i]){
//         same = false;
//         break;
//     }
// }
// if(same){
//     console.log("yes");
// }else{
//     console.log("No");
// }


// QUESTION NO 10 reverse only even no

// let arr = [2,5,8,7,10,3,12,9];
// let evenNo = [];

// for(let i = 0 ; i < arr.length ; i++){
//     if(arr[i]%2 == 0){
//         evenNo.push(arr[i]);
//     }
// }
// console.log(evenNo);

// let index = evenNo.length-1;

// for(let j = 0 ; j < arr.length ; j++){
//     if(arr[j]%2==0){
//         arr[j]=evenNo[index];
//         index--;
//     }
// }
// console.log(arr);


// QUESTION 11 FIND PAIR WITH TARGET SUM

// let arr = [5,7,1,9,2,5];

// let target = false;
// let f , s;

// for(let i = 0 ; i < arr.length ; i++){
//     for( let j = i+1 ; j < arr.length ; j++){
//         if(arr[i]+arr[j] == 11){
//             target = true;
//             f = i ;
//             s = j ;
//             break;
//         }
//     }
// }
// console.log("The Pair is "+arr[f] +" and "+arr[s]);
// if(target){
//     console.log("yes");
// }else{
//     console.log("no");
// }

// QUESTION NO 12 DIFFERCE OF LARGEST AND SMALLEST

// let arr = [12,8,25,3,10,15];

// let largest = -Infinity;
// let smallest = Infinity;

// for(let i = 0 ; i< arr.length ; i++){
//     if(arr[i]>largest){
//         largest = arr[i];
//     }
//     else if(arr[i]<smallest){
//         smallest = arr[i];
//     }
// }

// let difference = largest - smallest;

// console.log(difference);



// QUESTION NO 13 count elements greater than avg
// let arr = [2,6,8,4,10];
// let sum = 0;
// let count=0;

// for(let i = 0 ; i < arr.length ; i++){
//     sum += arr[i];
// }
// let avg = sum / arr.length;

// for(let j = 0 ; j < arr.length ; j++){
//     if(arr[j]>avg){
//         count++;
//     }
// }
// console.log(count);


// QUESTION no 14 common elements between two array

// let arr1 = [1,2,3,4,5];

// let arr2 = [3,5,6,7,2];
// let temp = [];

// for(let i =0; i< arr1.length;i++){
//     for(let j = 0; j < arr2.length ;j++){
//         if(arr1[i]==arr2[j]){
//             temp.push(arr1[i]);
//         }
//     }
// }
// console.log(temp);

// QUESTION NO 15 rotate array by one position left

// let arr = [10,20,30,40,50,60];
// temp = [];

// for(let i = 0 ; i < arr.length ; i++){

//     if(i== arr.length-1){
//         temp.push(arr[0]);
//     }else{
//         temp.push(arr[i+1]);
//     }
// }


// console.log(temp);


// QUESTION NO 16 

// let arr = [1,2,3,2,1];

// let revarray = [];

// for(let i = 0 ; i < arr.length ; i++){
//     revarray.push(arr[arr.length-1-i]);
// }


// let palindrome = true;

// for(let i = 0; i< arr.length ;i++){
//     if(arr[i]!=revarray[i]){
//         palindrome = false;
//         break;
//     }
// }

// if(palindrome){
//     console.log("YES");
// }else{
//     console.log("no");
// }

// QUESTION NO 17 longest sequence of even no


// let arr = [2,4,6,1,8,10,12,14,3,2];
// let count = 0;
// let maxCount  = 0;

// for(let i = 0; i< arr.length ; i++){
//     if(arr[i]%2 == 0){
//         count++;
//         if(count>maxCount){
//             maxCount = count;
//         }
//     }else{
//         count = 0;
//     }
    
// }

// console.log(maxCount);


// QUESTION NO 18 

// let arr = [16,17,4,3,5,2];

// let temp = [];
// let largest =-1;

// for (let index = 0; index < arr.length; index++) {
//     for (let j = index+1; j < arr.length; j++) {
//         if(arr[j]>largest){
//             largest = arr[j];
//         }
//     }
//     temp.push(largest);
//     largest = -1;
// }

// console.log(temp);

// QUESTION NO 19 union of two array

// let arr1 = [1,2,3,4];
// let arr2 = [3,4,5,6];

// let union=[];

// for(let i = 0 ; i < arr1.length ; i++){
//     union.push(arr1[i]);
// }

// for(let j = 0; j< arr2.length ; j++){
//     if(union.includes(arr2[j])){
//         continue;
//     }
//     union.push(arr2[j])
// }
// console.log(union);



// QUESTION NO 20 maxm consecutiv edifference

// let arr = [2,8,3,10,5,15];
// let abs = 0;
// let maxAbs = 0;
// for (let index = 0; index < arr.length; index++) {
//     abs = Math.abs(arr[index]-arr[index+1]);
//     if(abs>maxAbs){
//         maxAbs = abs;
//     }
// }
// console.log(maxAbs);