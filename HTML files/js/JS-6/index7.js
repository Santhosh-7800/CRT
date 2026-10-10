//for loop
for (let i=0;i<5;i++){
    console.log("For Loop Iteration:"+i);
}
//while loop
let j=0;
while(j<5){
    console.log("While Loop Iteration:"+j);
}
//do while loop
let k=0;
do{
    console.log("Do While Iteration:"+k);
    k++;
}
while(k<5);
//for..of loop
let arr=[10,20,30,40,50];
for (let value of arr){
    console.log("For ..loop Value:"+ value);
}
// for..in loop
let obj={a:1, b:2, c:3};
for (let key in obj){
    console.log("For..in Loop Keys:"+key+",value:"+obj[key]);
}
//forEach loop
arr.forEach((value,index)=>{
    console.log("ForEach Loop Index:"+index+",value:"+value);
})