function f() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let t = true;
            if (t) {
                resolve("success");
            }
            else {
                reject("unseccessful");
            }
        }, 5000);
    })
}
f()
    .then((data)=>{
        console.log("Promise resolved with dat",data);
    })
    .catch((error)=>{
        console.error("Promise rejected with error:",error);
    });