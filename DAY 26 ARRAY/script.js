// ARRAY --> [] they are used to store multiple data in a consecutive memory location under a single variable name 
// array follows the rules of indexing
// index always start from zero

// EXAMPLE 1
console.log("Example 1")
let name = ["shivam","harshit","viraj","sanjay","danish"]

console.log(name[0]);
console.log(name[1]);

// for loop all values printing
for (let index = 0; index < name.length; index++) {
    console.log(name[index]);
    //document.getElementById("demo").innerHTML+=name[index]+" ";
}

// EXAMPLE 2
console.log("Example 2");
let arr = ["shivam","harshit","viraj","sanjay","danish","dafsdg","hjsaghjjsa","sadjbas"];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}


// EXAMPLE 3
console.log("Example 3");
let fruits = [];
console.log(fruits);
fruits[0]="apple";
fruits[1]="banana";
fruits[2]="mango";
fruits[3]="grapes";

console.log(fruits);

fruits[1]="orange";
console.log(fruits);

// EXAMPLE 4
console.log("Example 4");
// Numbers,array boolean can also be added
let arr1 = ["shivam","harshit","viraj","sanjay",45,false,["falguni","mohini"]];
for (let j = 0; j < arr1.length; j++) {
    console.log(arr1[j]);
}

// EXAMPLE 5
// take an arr and add name of places and print each of them using loop
console.log("Example 5");
arr2 = ["chandrapur","nagpur","delhi","noida","punjab","himachal"];
for (let k = 0; k < arr2.length; k++) {
    console.log(arr2[k]);
}