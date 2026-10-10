function getData(dataId){
    return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                console.log("Fetching data for id:",dataId);
            })
        })
}