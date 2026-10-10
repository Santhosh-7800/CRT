import React ,{useEffect, useState} from "react";

function CompTwo() {
    const [value,setValue] = useState(0);
    const [number,setnumber] = useState(0);
    useEffect(() =>{
        alert("hello");
    },[number])
    console.log("printed");
    return(
        <>
        <h1>Value : {value}</h1>
        <button onClick={() => {setValue(value + 1);
        }}>Value Button</button><br />
        <h1>Number : {number}</h1>
        <button onClick={() => {setnumber(number + 1);
        }}>Number Button</button>
        </>
    );
    }
    export default CompTwo;