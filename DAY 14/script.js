//<---------------ladder if else---------------->

//1 -7 
// 1 monday
//2 tuesday
// ---7 sunday

let day = 5 ;

if(day==1){
    console.log("monday");
}else if(day==2){
    console.log("tuesday");
}else if(day==3){
    console.log("wednesday");
}else if(day==4){
    console.log("thrusday");
}else if(day==5){
    console.log("friday");
}else if(day==6){
    console.log("saturday");
}else if(day==7){
    console.log("sunday")
}
else{
    console.log("wrong input put it between 1-7")
}
// month question 1 -12

let month = 5 ;

if(month==1){
    console.log("january");
}else if(month==2){
    console.log("feb");
}else if(month==3){
    console.log("march");
}else if(month==4){
    console.log("april");
}else if(month==5){
    console.log("may");
}else if(month==6){
    console.log("june");
}else if(month==7){
    console.log("july");
}else if(month==8){
    console.log("augest");
}else if(month==9){
    console.log("sep");
}else if(month==10){
    console.log("oct");
}else if(month==11){
    console.log("nov");
}else if(month==12){
    console.log("dec");
}
else{
    console.log("wrong input put it between 1-12")
}

//SWITCH CASE

let dayNumber = 5;

switch(dayNumber){
    case 1: 
        console.log("monday");
        break;
    case 2:
        console.log("tuesday");
        break;
    case 3:
        console.log("wednesday");
        break;
    case 4: 
        console.log("thrusday");
        break;
    case 5:
        console.log("friday");
        break;
    case 6:
        console.log("saturday");
        break;
    case 7:
        console.log("sunday");
        break;
    default:
        console.log("invalid input")
}

let monthNumber = 5;

switch(monthNumber){
    case 1: 
        console.log("jan");
        break;
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("march");
        break;
    case 4: 
        console.log("april");
        break;
    case 5:
        console.log("may");
        break;
    case 6:
        console.log("june");
        break;
    case 7:
        console.log("july");
        break;
    case 8: 
        console.log("aug");
        break;
    case 9:
        console.log("sep");
        break;
    case 10:
        console.log("oct");
        break;
    case 11:
        console.log("november");
        break;
    case 12:
        console.log("dec");
        break;
    default:
        console.log("invalid input")
}
