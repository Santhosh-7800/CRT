//function
function add(x,y){
    return x+y;
}
let a=10;
let b=20;
let sum=add(a,b);
console.log("Sum of " + a + " and "+ b +" is :"+ sum);

console.log("Parameters :")
//fun with para and with return
function add2(x,y){
    return x+y;
}
let res1=add2(5,6);
console.log("fun with para and with return : "+res1)

//fun without para and with return
function add3(){
    return 5*6;
}
let res2=add3(); 
console.log("fun without para and with return : "+res2)

//fun with para and without return
function add4(x,y){
    console.log("fun with para and without return : "+(x+y))
}
add4(5,6);

//fun without para and without return
function add1(){
    console.log("fun without para and without return : "+(3*5))
}
add1();
