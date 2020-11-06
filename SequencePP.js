//PP4 - read five random two digit values and then print the sum and average
let num1 = Math.floor(Math.random()*100);
let num2 = Math.floor(Math.random()*100);
let num3 = Math.floor(Math.random()*100);
let num4 = Math.floor(Math.random()*100);
let num5 = Math.floor(Math.random()*100);
let sum = num1+num2+num3+num4+num5;
let average = (num1+num2+num3+num4+num5)/5;
console.log("Sum : "+sum);
console.log("Average : "+average);