//PP4 - prints heads and tails accordingly on flipping a coin
const HEAD = 0;
let toss = Math.ceil(Math.random()*10)%2;
if(toss==HEAD)
    console.log("Heads");
else 
    console.log("Tails");