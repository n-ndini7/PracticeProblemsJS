//PP2 - check if the given date is in range 
let month = Math.floor(((Math.random()*10)%6)+1);
console.log("Month: "+month);
let day = Math.floor(((Math.random()*100)%31)+1);
console.log("Day: "+day);
if((month>=3 && month<=6) && (day>=1 && day<=31) ){
    if(month==3 || month ==5){
        if(month==3){
            if(day<20){
                console.log("False");
            }
            if(day>=20 && day<=31)
            {
                console.log("True");
            }
        }
        if(month==5 && (day>=1 && day<=31))
       { console.log("True");
    }
}
    if(month==4 || month==6){
        if(month==4 &&(day>=1 && day<=30)){
        console.log("True");
        }
        if(month==6){
            if(day>20)
         {   console.log("False");
        } 
         if(day<20 && day>=1)
         {   console.log("True");
        }
    }
    }
}else 
{
    console.log("False");
}