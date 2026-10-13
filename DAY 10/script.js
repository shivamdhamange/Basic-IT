let k=10;
// console.log(++k)
// console.log(--k)
// console.log(k++)
// console.log(--k)
// console.log(k--)
// console.log(k++)
// console.log(--k)

let b= (++k) + (--k) + (k++) - (--k) + (k--) + (k++) - (--k)
console.log(b)

// ---------------logical operator ---------- //
// && AND      
// || OR
// ! NOT

// AND = if both the 
// 
//condition are true and then the output is true otherwise the output false

// Truth table
// A  B  output
// T  T    T
// T  F    F
// F  T    F
// F  F    F

console.log(true && true)
console.log(true && false)
console.log(false && true)
console.log(false && false)

// OR = if one of the condition is true and then the output is true otherwise the output false

// Truth table
// A  B  output
// T  T    T
// T  F    T
// F  T    T
// F  F    F

console.log(true || true)
console.log(true || false)
console.log(false || true)
console.log(false || false)


// NOT = if true is there then false will be the output
//       if false is there then true will be the output

// Truth table
// A   output
// T     F
// F     T

console.log(!true)
console.log(!false)


