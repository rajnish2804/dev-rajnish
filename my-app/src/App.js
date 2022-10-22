import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [value,getvalue]= useState();
  let [display,setvalue]=useState();
  let inputvalue =(elem) =>{
    getvalue(elem.target.value);
  }
  let fetchValue=() =>{
        setvalue(display=value);
  }
 
  return (
    <>
    
    <div className="Task1">
       <h1> TASK 1</h1>     
        <input type="text" value={value} onChange={inputvalue} />
      <div>{display}</div>
      <button onClick={fetchValue}>Submit</button>
    </div>
    </>
  );
}
export default App;