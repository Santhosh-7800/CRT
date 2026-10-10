let p=new Promise((resolve,reject)=>{
    let f=false;
    if (f===true){
        resolve("done");
    }
    else{
        reject("undone");
    }
});
console.log(p);
p
    .then((data)=>{
        console.log("Promise resolved with data:",data);
    })
    .catch((error)=>{
        console.log("Promise rejected with error:",error);
    });