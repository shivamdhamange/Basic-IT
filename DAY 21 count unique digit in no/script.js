// Count unique digits in no
let num = 33557257829;
let temp;
let remainder;
let count;

console.log("digit |" + "  count");
for(let digit = 0 ; digit <= 9 ; digit++){
	temp = num;
	count = 0;
	while(temp != 0){
		remainder = temp % 10;
		if(remainder == digit){
			count ++;
		}
		temp = Math.floor(temp/10);
	}
	if(count>=1){
		console.log(digit +"         " + count);
	}
}
