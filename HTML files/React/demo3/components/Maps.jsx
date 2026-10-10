import React, { useState } from "react";

function Maps(){
    const [Value,setValue]=useState([
    {id : 1, value : "Ajay"},
    {id : 2, value : "Bhanu"},
    {id : 3, value : "Nandu"},
    {id : 4, value : "Veteesh"}
]);
return(
    <>
    <h1>Details</h1>
    <ul>
        {Value.map((val)=>(
            <li key={val.id}> value :{val.value}</li>
        ))}
    </ul>
    </>
);
}
export default Maps;