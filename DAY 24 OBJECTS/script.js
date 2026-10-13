// Objects --> Objects are the entities that stores the data in key and value format

// --------------------- CURLY BRACKETS -----------------------------------
//------------------------ EXAMPLE 1----------------------------
let abc = {
    name : "shivam",
    age : 24,
    email : "shivam@gmail.com",
    city : "chandrapur",
    pNumber : 7434563278,
    bloodGroup : "B+",
    maritalstatus : "single",
    addharNo : 134256374859
}
console.log(typeof(abc)); //object
console.log(abc);

// get data from objects [] and . operator
console.log(abc["name"])
console.log(abc["age"])
console.log(abc["email"])

console.log("name of the student is "+abc["name"] + "\nage of the student is "+abc["age"]);

// template literals -> it allows to add data to a continuous string

console.log(`name of the student is ${abc["name"]}\nage of the student is ${abc["age"]}`);

//---------------------EXAMPLE 2 ------------------------------
let car = {
    name : "maruti",
    color : "yellow",
    price : 3456734
}
console.log(car["name"]);

console.log(`car name is ${car["name"]} \ncolor of the car is ${[car["color"]]}`);

console.log(car);
car["name"]="kia";
// car.name="kia";
car["price"]=4256378493;
console.log(car);

// -------------------EXAMPLE 3 ----------------------------
let details = {
    name: "shivam",
    email: "shivam@gmail.com",
    phone : 2123453674,
    city : "chandrapur",
    maritalStatus : "single"
}

console.log(details);

details["bloodGroup"]="B+";
details.age = 24;

console.log(details);

// ----------------- DOT OPERATOR -----------------------------
console.log("---------------------------------------")
let person = {
    name : "rohit",
    age : 38,
    proff : "cricketer",
    wife : "rewt",
    mobile : 323456478
}
console.log(person.name);
console.log(person.age);
person.score = 183;
console.log(person);

console.log(`name of person is ${person.name}\nage of person ${person.age}`);