import { useState } from 'react'
import './App.css'

import useCurrencyInfo from './hooks/useCurrencyinfo.js'

import {Inputbox} from './components/index.js'

function App() {
  const [amount,setamount]=useState(0)
  const[from,setfrom]=useState('usd')
  const[to,setto]=useState('inr')
  const[convertedAmount,setConvertedAmount]=useState(0)

  const currencyInfo=useCurrencyInfo(from)
  const options=Object.keys(currencyInfo)

  
  const swap=()=>{
    setfrom(to)
    setto(from)
    setConvertedAmount(amount)
    setamount(convertedAmount)
  }
  const convert=()=>{
  setConvertedAmount(amount * currencyInfo[to])
}

  return (
   <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
    style={{backgroundImage: `url(https://images.pexels.com/photos/4497591/pexels-photo-4497591.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`}}>
    
    <div className='w-full '>
      <div className='w-full max-w-md mx-auto
       border border-gray-50 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
      <form onSubmit={(e)=>{
        e.preventDefault()
        convert()
      }}>
        <div className='w-full mb-1'>
          <Inputbox
          label="from"
          amount={amount}
          currencyoptions={options}
          oncurrencychange={(currency)=>setfrom(currency)}
          onamountchange={(amount)=>setamount(amount)}
          selectedcurrency={from} />
        </div>
        <div className='relative w-full h-0.5'></div>
        <button
        onClick={swap}
        className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5'>
          swap
        </button>
        <div className='w-full mb-1'>
          <Inputbox
          label="to"
          amount={convertedAmount}
          currencyoptions={options}
          oncurrencychange={(currency)=>setto(currency)}
          onamountchange={(amount)=>setConvertedAmount(amount)}
          selectedcurrency={to}
          amountdisabled/>
        </div>
        <button
         type='submit'
         className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'>convert {from} to {to}</button>
      </form>
      </div>
    </div>
   </div>
  )
}

export default App
