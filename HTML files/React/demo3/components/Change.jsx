import React ,{useState} from "react";

function Change(){
    const [value,setValue]=useState("");
    const changename = (e)=>{
        setValue(e.target.value);
    }
    return(
        <>
        <input type="text" onChange={changename}
        placeholder="Enter Your Name" value={value}>
        </input>
        <p>{value}</p>
        </>
    );
}
export default Change;