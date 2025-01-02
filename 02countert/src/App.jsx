import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setcounter]=useState(0); 

 // let counter =15;
  const addvalue=()=>{
    //counter+=1;
    //console.log(counter);
    if(counter>=20){
      setcounter(counter=20);
    }
    else{
    setcounter(counter+1);
    }
  }
  const removevalue=()=>{
    if(counter>0){
      setcounter(counter-1);
    }
    else{
      setcounter(counter=0);
    }
  }
  return (
    <>
    <h1>baig saab</h1>
    <h2>counter value: {counter}</h2>
    
    <button onClick={addvalue}>
      add value</button>
    <br />
    <button onClick={removevalue}
    >remove value</button>
    </>
  )
}

export default App
