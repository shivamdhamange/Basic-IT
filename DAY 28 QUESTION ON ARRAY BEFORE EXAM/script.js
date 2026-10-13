// --------------------------------------------------QUESTION 1-------------------------------------------------------------

// Find the Third Largest Element
// Print the third largest distinct element in the array.
// Input
// 7
// 10 20 5 30 15 25 30
// Output
// 20

// let arr = [10,20,5,30,15,25,30];

// let first = -1;
// let second;
// let third;

// for(let i = 0; i < arr.length ; i++){

//     if(arr[i]==first || arr[i]==second || arr[i]==third){
//         continue;
//     }
//     if(arr[i]>first){
//         third = second;
//         second = first;
//         first = arr[i];
//     }
//     else if(arr[i]>second){
//         third = second;
//         second = arr[i]; 
//     }
//     else{
//         third = arr[i];
//     }
// }
// console.log(third);



// -------------------------------------------------------QUESTION 2--------------------------------------------------------

// Find the Second Smallest Element
// Print the second smallest distinct element.
// Input
// 6
// 8 2 5 1 7 1
// Output
// 2

// let arr = [8,2,5,1,7,1];

// let first = 10000;
// let second;


// for(let i = 0; i < arr.length ; i++){

//     if(arr[i] == first || arr[i] == second){
//         continue;
//     }
//     if(arr[i]<first){
//         second = first; 
//         first = arr[i];
//     }
//     else if(arr[i]>first && arr[i]<second){
//         second = arr[i];
//     }
    
// }
// console.log(second);


//------------------------------------------------------- QUESTION 3 ---------------------------------------------------------

// Check if Array is Sorted
// Print YES if the array is sorted in ascending order, otherwise print NO.
// Input
// 5
// 2 4 6 8 10
// Output
// YES

// METHOD 1
// let arr = [2, 5 ,6 , 8, 10];

// let temparr=[];
// for(let j = 0 ; j < arr.length ; j++){
//     temparr[j]=arr[j];
// }
// for(let i = 0; i < arr.length ; i++){
//     for(let j = i+1 ; j < arr.length ;j++){
//         if(arr[i]>arr[j]){
//             let temp = arr[j];
//             arr[j]=arr[i];
//             arr[i]= temp;
//         }
//     }
// }

// let equal = true;
// for (let k = 0; k < arr.length; k++) {
//     if(arr[k]!=temparr[k]){
//         equal = false;
//         break;
//     }
// }
// if(equal){
//     console.log("YES");
// }else{
//     console.log("NO");
// }


// METHOD 2
// let arr = [2,4,6,8,10];
// let sorted = true;

// for(let i = 0 ; i < arr.length ; i++){
//     if(arr[i]>arr[i+1]){
//         sorted = false;
//         break;
//     }
// }
// if(sorted == true){
//     console.log("YES");
// }
// else{
//     console.log("NO");
// }


// -----------------------------------------------------------QUESTION 4----------------------------------------------------

// Find the First Duplicate Element
// Print the first duplicate value.
// Input
// 7
// 5 2 8 4 2 6 5
// Output
// 2


// let arr = [5, 2, 8, 4, 2, 6, 5];

// let duplicate=-1;

// for(let i = 0 ; i < arr.length ; i++){
//     for(let j = 0 ; j <i ; j++){
//         if(arr[i]== arr[j]){
//             duplicate = arr[i];
//             break;
//         }
//     }
//     if(duplicate != -1){
//         break;
//     }
// }
// console.log(duplicate);


// -----------------------------------------------------------QUESTION 5---------------------------------------------------------

// Count Positive, Negative and Zero
// Print the count of positive, negative, and zero values.
// Input
// 8
// 2 -1 0 5 -6 0 8 -2
// Output
// Positive = 3
// Negative = 3
// Zero = 2

// let arr = [2,-1,0,5,-6,0,8,-2];
// let p = 0;
// let n = 0;
// let z = 0;
// for(let i = 0 ; i < arr.length ; i++){
//     if(arr[i]>0){
//         p++;
//     }
//     else if(arr[i]<0){
//         n++;
//     }
//     else{
//         z++;
//     }
// }

// console.log("Positive = "+p);
// console.log("Negative = "+n);
// console.log("Zero = "+z);


// --------------------------------------------------------QUESTION NO 6------------------------------------------------------

// Move All Zeros to the End
// Maintain the order of non-zero elements.
// Input
// 7
// 2 0 5 0 3 7 0
// Output
// 2 5 3 7 0 0 0

// METHOD 1
// let arr = [2,0,5,0,3,7,0];

// let temp=[];
// let j = 0;

// for(let i = 0 ; i < arr.length ; i++){
//     if(arr[i]!=0){
//         temp[j]=arr[i];
//         j++;
//     }
// }
// while(j<arr.length){
//     temp[j]=0;
//     j++;
// }
// console.log(temp);

// METHOD 2 (SWAPING IN THE ARRAY)
// let arr = [2,0,5,0,3,7,0];

// let j = 0;

// for(let i = 0 ; i < arr.length ; i++){
//     if(arr[i]!=0){
//         let temp = arr[j];
//         arr[j]= arr[i];
//         arr[i]=temp;
//         j++;
//     }
// }
// console.log(arr);


// -------------------------------------------------------QUESTION NO 7------------------------------------------------

// Find Missing Number
// Array contains numbers from 1 to N with one missing number.
// Input
// 6
// 1 2 3 5 6
// Output
// 4


// let n = 6;
// let arr = [1,2,3,5,6];
// let missing;

// for(let i = 0 ; i < n ;i++){
//     if(arr[i]!=i+1){
//         missing = i+1;
//         break;
//     }
// }
// console.log(missing);


//---------------------------------------------------------QUESTION NO 8------------------------------------------------------

// Find All Duplicate Elements
// Print every duplicate element only once.
// Input
// 9
// 2 4 2 5 7 5 8 4 4
// Output
// 2 4 5

// let arr = [2,4,2,5,7,5,8,4,4];
// let t = [];
// index = 0;


// for(let i = 0; i < arr.length;i++){

//     let present = false;
//     for(let k = 0;k<t.length;k++){
//         if(t[k]==arr[i]){
//             present = true;
//             break;
//         }
//     }
//     if(present){
//         continue;
//     }

//     for(let j = i+1 ; j < arr.length ;j++){
//         if(arr[i] == arr[j]){
//             t[index]=arr[i];
//             index++;
//             break;
//         }
//     }
// }
// console.log(t);

//----------------------------------------------------------- QUESTION NO 9-----------------------------------------------------

// Check if Two Arrays are Equal
// Print YES if both arrays contain the same elements in the same order.
// Input
// 5
// 1 2 3 4 5

// 5
// 1 2 3 4 5
// Output
// YES

// let arr1 = [1,2,3,4,5];
// let arr2 = [1,2,3,4,5];
// let same = true;

// for(let i = 0; i < arr1.length ; i++){
//     if(arr1[i] != arr2[i]){
//         same = false;
//         break;
//     }
// }
// if(same){
//     console.log("Yes");
// }
// else{
//     console.log("No");
// }


// -------------------------------------------------------QUESTION NO 10---------------------------------------------------------

// Reverse Only Even Numbers
// Reverse only the even numbers while keeping odd numbers in their original positions.
// Input
// 8
// 2 5 8 7 10 3 12 9
// Output
// 12 5 10 7 8 3 2 9

// METHOD 1
// let arr = [2,5,8,7,10,3,12,9];
// let even = [];
// let j = 0;

// for(let i = 0 ; i < arr.length ; i++){
//     if(arr[i]%2==0){
//         even[j]=arr[i];
//         j++;
//     }
// }

// let reverseEven = [];
// for (let k = 0; k < even.length; k++) {
//     reverseEven[k]=even[even.length-1-k];
// }

// console.log(reverseEven);
// let o=0;
// for(let t = 0;t<arr.length;t++){
//     if(arr[t]%2==0){
//         arr[t]=reverseEven[o];
//         o++;
//     }
// }
// console.log(arr);

// Method 2
// let arr = [2, 5, 8, 7, 10, 3, 12, 9];


// let even = [];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//         even.push(arr[i]);
//     }
// }


// let index = even.length - 1;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//         arr[i] = even[index];
//         index--;
//     }
// }

// console.log(arr);


// --------------------------------------------------------QUESTION 11----------------------------------------------------------------

// Find Pair with Target Sum
// Print YES if any pair sums to the target.
// Input
// 6
// 4 7 1 9 2 5
// Target = 11
// Output
// YES

// let arr = [5,7,1,9,2,5];
// let target = false;
// for(let i = 0 ; i < arr.length ; i++){
//     for(let j = i+1 ; j < arr.length ; j++){
//         if(arr[i]+arr[j]==11){
//             target = true;
//             break;
//         }
//     }
// }
// if(target){
//     console.log("YES");
// }
// else{
//     console.log("No");
// }


// --------------------------------------------------------QUESTION NO 12--------------------------------------------------------

// Find the Difference Between Largest and Smallest
// Input
// 6
// 12 8 25 3 10 15
// Output
// 22

// let arr = [12,8,25,3,10,15];

// largest = -1;
// smallest = 100000;

// for (let index = 0; index < arr.length; index++) {
//     if(arr[index]>largest){
//         largest = arr[index];
//     }
//     else if(arr[index]<smallest){
//         smallest = arr[index];
//     }
// }

// let diff = largest - smallest;

// console.log(diff);


//------------------------------------------------------------ QUESTION 13-----------------------------------------------------

// Count Elements Greater Than Average
// Input
// 5
// 2 6 8 4 10
// Output
// 2

// let arr = [2,6,8,4,10];
// let sum = 0 ;
// let avg;
// let count = 0;

// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
// }
// avg = sum/arr.length;

// for (let j = 0; j < arr.length; j++) {
//     if(arr[j]>avg){
//         count++;
//     }
// }
// console.log(count);

//------------------------------------------------------ QUESTION NO 14-------------------------------------------------------

// Find Common Elements
// Print common elements between two arrays.
// Input
// Array1:
// 1 2 3 4 5

// Array2:
// 3 5 6 7 2
// Output
// 2 3 5


// let arr1 = [1,2,3,4,5];

// let arr2 = [3,5,6,7,2];
// let temp = [];

// for (let i = 0; i < arr1.length; i++) {
//     for(let j = 0; j < arr2.length; j++){
//         if(arr1[i]==arr2[j]){
//             temp.push(arr1[i]);
//         }
//     }
// }

// console.log(temp);

//----------------------------------------------------------QUESTION NO 15-----------------------------------------------

// Rotate Array Left by One Position
// Input
// 6
// 10 20 30 40 50 60
// Output
// 20 30 40 50 60 10


// let arr = [10,20,30,40,50,60];

// let temp =[];
// let index = 0;

// for (let i = 0; i < arr.length-1; i++) {
//     temp[index]=arr[i+1];
//     index++;
// }

// temp[index]=arr[0];

// console.log(temp);


//--------------------------------------------------------- QUESTION NO 16---------------------------------------------------------

// Check if Array is Palindrome
// Determine whether the array reads the same forward and backward.
// Input
// 5
// 1 2 3 2 1
// Output
// YES



// let arr = [1,2,3,2,1];
// let reverse = [];
// let d = arr.length-1

// //reverse an arr
// for (let i = 0; i < arr.length; i++) {
//     reverse[i]=arr[d--];
// }

// let palindrome = true;
// for (let j = 0; j < arr.length; j++) {
//     if(arr[j]!=reverse[j]){
//         palindrome = false;
//         break;
//     }
// }
// if(palindrome){
//     console.log("YES");
// }
// else{
//     console.log("NO");
// }

// -----------------------------------------------------------QUESTION NO 17--------------------------------------------------

// Find the Longest Sequence of Even Numbers
// Print the length of the longest continuous sequence of even numbers.
// Input
// 10
// 2 4 6 1 8 10 12 14 3 2
// Output
// 4


// let arr = [2,4,6,1,8,10,12,14,3,2];
// let count = 0;
// let maxCount = 0;
// for (let i = 0; i < arr.length; i++) {
//     if(arr[i]%2==0){
//         count++;
//         if(count>maxCount){
//             maxCount=count;
//         }
//     }
//     else{
//         count = 0;
//     }
// }
// console.log(maxCount);

// ---------------------------------------------------------QUESTION NO 18-------------------------------------------------------

// Replace Every Element with the Greatest Element on Its Right
// Replace the last element with -1.
// Input
// 6
// 16 17 4 3 5 2
// Output
// 17 5 5 5 2 -1


// let arr = [16,17,4,3,5,2];
// let t = [];
// let index =0;
// let largest=-1; 

// for (let i = 0; i < arr.length; i++) {
//     for(let j = i+1 ; j< arr.length ; j++){
//         if(arr[j]>largest){
//             largest=arr[j];
//         }
//     }
//     t[index]=largest;
//     largest = -1;
//     index++;
// }
// console.log(t);


// ---------------------------------------------------QUESTION NO 19---------------------------------------------------------

// Print the Union of Two Arrays
// Print all unique elements from both arrays.
// Input
// Array1:
// 1 2 3 4

// Array2:
// 3 4 5 6
// Output
// 1 2 3 4 5 6

// let arr1 = [1,2,3,4];
// let arr2 = [3,4,5,6];

// let union = [];
// let index = 0;

// for (let i = 0; i < arr1.length; i++) {
//     union[index]=arr1[i];
//     index++;
// }

// for(let j = 0; j < arr2.length; j++){
//     let found = false;
//     for(let k = 0; k < union.length ;k++){
//         if(arr2[j]==union[k]){
//             found = true;
//             break;
//         }
//     }
//     if(!found){
//         union[index] = arr2[j];
//         index++;
//     }
// }
// console.log(union);



// -------------------------------------------------------QUESTION NO 20------------------------------------------------------------

// Find the Maximum Consecutive Difference
// Find the maximum absolute difference between adjacent elements.
// Input
// 6
// 2 8 3 10 5 15
// Output
// 10

// let arr = [2,8,3,10,5,15];
// let diff ;
// let maxDiff = 0;

// for (let i = 0; i < arr.length-1; i++) {
//     diff = Math.abs(arr[i]-arr[i+1]);
//     if(diff>maxDiff){
//         maxDiff=diff;
//     }
// }
// console.log(maxDiff);


