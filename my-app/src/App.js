import React, { useState } from "react";
import "./App.css";
import Table from "./Component/Table";
import Button from "./Component/Button";


function App(){

  // Task 1
  let [value,getvalue]= useState();
  let [display,setvalue]=useState();
  let inputvalue =(elem) =>{
    getvalue(elem.target.value);
  }
  let fetchvalue=() =>{
        setvalue(display=value);
  }

  // Task 2

   let students=[{Name:"Aditya" ,Age:"28"},{Name:"Rajnish" ,Age:"26"},{Name:"Shayam" ,Age:"25"},{Name:"Abhishek" ,Age:"27"}];
   let columns=["Name","Age"];

  // Task 3

  let [arr,setdata]=useState([]);
  let [value1,takevalue]=useState('');
  let sendData =(elem1) =>
  {
    takevalue(elem1.target.value);
  }
  let addData =() =>{
    setdata([value1.toUpperCase(),...arr]); 
    takevalue(value1='') 
  } 
  let removeData =() =>{
    arr.pop();
    setdata([...arr]);
  } 
  
  return (
    <>
    {/* Task 1 */}
    <div className="Task1">
       <h3> Task 1</h3>     
        <input type="text" value={value} onChange={inputvalue} />
        <button onClick={fetchvalue}>Submit</button>
      <div>{display}</div>
    </div>

    {/* Task 2 */}
    <div className="Task2">
      <h3 className="T2">Task 2</h3>
    <Table students={students} colNames={columns}/>
    </div>
    <br />

    {/* Task 3 */}
    <div className="Task3">
      <h3 className="T3">Task 3</h3>
      <input type="text" value={value1} onChange={sendData} />
       <div>
          <button onClick={addData}>Add</button>
          <button onClick={removeData}>Remove</button>
        </div>
      <div className="Arrayreturn">
        {arr.map((elem2)=>
        {
          return(
            <div>{elem2}</div>
          )
        })
        }</div>
        <br />
    </div>

    {/* Task 4 */}
    <div className="Task4">
        <h3 className="T4">Task 4</h3>
        <Button  buttonName={"Submit"}/>
        <br />
      </div>

    </>
    
  );
}
export default App;
