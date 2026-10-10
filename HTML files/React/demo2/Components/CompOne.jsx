import React, {Component} from "react";
function CompOne(props){
  return(
    <div className="details">
      <h1>Name :{props.name}</h1>
      <h1>Age :{props.age}</h1>
      <h1>RollNo :{props.rollno}</h1>
      <h1>{props.imgsrc && (<img className="das" src={props.imgsrc}/>)}</h1>
    </div>
  );
}
export default CompOne;
