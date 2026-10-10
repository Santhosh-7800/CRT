function async() {
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
async()
    .then((data) => {
        console.log("promise resolved with data:", data);
    })
    .catch((error) => {
        console.log("promise rejected with error:", error);
    });
function asyncFunc1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let t = false;
            if (t) {
                resolve("asyncFunc1 success");
            } else {
                reject("asyncFunc1 unsuccessful");
            }
        }, 3000);
    });
}
asyncFunc1()
    .then((data) => {
        console.log("asyncFunc1 resolved with data:", data);
    })
    .catch((error) => {
        console.log("asyncFunc1 rejected with error:", error);
    }); 