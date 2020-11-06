//PP4
let start = Math.ceil(Math.random()*10); 
let end = Math.ceil(Math.random()*100);
console.log("Start Range: "+start);
console.log("End Range: "+end);
if(end>start){
        console.log("Prime numbers are: ");
        for(let i=start;i<=end;i++){
            for(let j=2;j<=i;j++){
                if(j==i){
                    console.log(i);
                }
                if(i%j==0)
                    break;   
            }
    }
}
else 
{
    console.log("Invalid range!");
}