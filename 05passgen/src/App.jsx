import { useState,useCallback,useEffect ,useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length,setlength]=useState(8)
  const [numberAllowed,setNumberAllowed]=useState(false)
  const [charAllowed,setcharAllowed]=useState(false)
  const [password,setPassword]=useState('')

  const passwordref=useRef(null);

  const generatePassword= useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed)str+="0123456789"
    if(charAllowed) str+= "!@#$%^&*()_+"

    for(let i=1;i<length;i++){
      const char=Math.floor( Math.random()*str.length+1)
      pass+=str.charAt(char);
    }

    setPassword(pass)
  }, [length,numberAllowed,charAllowed])


  useEffect(()=>{
    generatePassword();
  },[length,numberAllowed,charAllowed])

  const copyPasswordToClipboard=()=>{
    window.navigator.clipboard.writeText(password);
    passwordref.current?.select()
  }

  return (
   <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
    <h1 className='text-white my-3 text-center'>Password generator</h1>
    <div className='flex shadow rounded-lg overflow-hidden mb-4'>
      <input type="text"  value={password} className='outline-none w-full py-1 px-3' readOnly
        ref={passwordref}
      />
      <button
        onClick={copyPasswordToClipboard}
       className='bg-blue-700 outline none text-white px-3 py-0.5 shrink-0'>Copy</button>
      </div>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
      <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input type="range" min={6} max={100} value={length} className='cursor-pointer'
          onChange={(e)=>setlength(e.target.value)}
          />
        <label htmlFor="length">length: {length}</label>
          </div>
      <div className='flex items-center gap-x-1'>
        <input type='checkbox' name='' id=''
          defaultChecked={numberAllowed}
          onChange={()=>{
            setNumberAllowed((prev)=>!prev)
          }}
          />
        <label htmlFor="number">Numbers</label>
          </div>
      <div className='flex items-center gap-x-1'>
        <input type='checkbox' name='' id=''
          defaultChecked={charAllowed}
          onChange={()=>{
            setcharAllowed((prev)=>!prev)
          }}
          />
        <label htmlFor="charInput">Character</label>
          </div>
      </div>
      </div>
    </div>
   
  )
}

export default App
