//PP1 - max and min among five 3 digit random numbers
let digit1 = Math.floor(Math.random()*1000);
let digit2 = Math.floor(Math.random()*1000);
let digit3 = Math.floor(Math.random()*1000);
let digit4 = Math.floor(Math.random()*1000);
let digit5 = Math.floor(Math.random()*1000);
console.log("Number 1: "+digit1);
console.log("Number 2: "+digit2);
console.log("Number 3: "+digit3);
console.log("Number 4: "+digit4);
console.log("Number 5: "+digit5);
let max = digit1;
let min = digit1;
//max:
if(digit2>max)
    max = digit2;
if(digit3>max)
    max = digit3;
if(digit4>max)
    max = digit4;
if(digit5>max)
    max = digit5;
//min:
if(digit2<min)
    min = digit2;
if(digit3<min)
    min = digit3;
if(digit4<min)
    min = digit4;
if(digit5<min)
    min = digit5;
console.log("MAX: "+max);
console.log("MIN: "+min);