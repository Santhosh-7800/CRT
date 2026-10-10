function getdata(data,nextdata){
    setTimeout(()=>{
        console.log(data);
        if(nextdata){
            nextdata();
        }
    },5000);
}
getdata(1,()=>{
    console.log("fetching data 1");
    });
    getdata(2,()=>{
        console.log("fetching data 2");
    });
