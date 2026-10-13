let arr = [2,8,3,10,5,15];
let diff ;
let maxDiff = 0;

for (let i = 0; i < arr.length-1; i++) {
    diff = Math.abs(arr[i]-arr[i+1]);
    if(diff>maxDiff){
        maxDiff=diff;
    }
}
console.log(maxDiff);


