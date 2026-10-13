//<-------if else nested------------->
// 1-5 tricycle
// 6-15 cycle
// 16 - 17 Activa
// 18 - 60 car 
//61 -70 old activa
// 71 nothing


let age =5;

if (age>=18){
    if(age<60){
        console.log("drive car");
    }
    else{
        if(age<70){
           console.log("old activa"); 
        }
        else{
            console.log("nothing");
        }
    }
}else{
    if(age>16){
        console.log("active");
    }
    else{
        if(age>6){
            console.log("cycle");
        }
        else{
            console.log("tricycle");
        }
    }
}
// marks problem
// 90 - Grade A+
// 80 -89 Grade A
// 70 -79 Garde B
// 60 - 69 Grade C
// 50 - 59 Grade D
// 40 - 49 Grade E
// 40 < Fail

let marks = 85;
if(marks>40){
    if(marks<49){
        console.log("GRADE E");
    }
    else{
        if(marks<59){
            console.log("GRADE D");
        }
        else{
            if(marks<69){
                console.log("GRADE C");
            }
            else{
                if(marks<79){
                    console.log("GRADE B");
                }
                else{
                    if(marks<89){
                        console.log("GRADE A");
                    }
                    else{
                        console.log("GRADE A+");
                    }
                }
            }
        }
    }
}
else{
    console.log("FAIL");
}