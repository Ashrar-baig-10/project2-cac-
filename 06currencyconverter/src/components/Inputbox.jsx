import React from 'react'

function Inputbox({
    label,
    amount,
    onamountchange,
    oncurrencychange,
    currencyoptions=[],
    selectedcurrency="usd",
    amountdisabled=false,
    currencydisabled=false,
    classname=""
}) {
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${classname}`}>
        <div className='w-1/2'>
            <label htmlFor='currency' className='text-black/40 mb-2 inline-block'>{label}</label>
            <input
            id='currency'
             type="number"
             className='outline-none w-full bg-transparent py-1.5'
             placeholder='Amount'
             disabled={amountdisabled}
             value={amount}
             onChange={(e)=>onamountchange && onamountchange (Number(e.target.value))}
             
             />
             </div>
               <div className='w-1/2 flex flex-wrap justify-end text-right'> 
               <p className='text-black/40 mb-2 w-full'>currency type </p>  
                <select
                className='rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none'
                value={selectedcurrency}
                onChange={(e)=>{oncurrencychange && oncurrencychange(e.target.value)}}
                disabled={currencydisabled}

                 id="">
                    {currencyoptions.map((currency)=>(
                        <option value={currency} key={currency}>{currency}</option>
                    ))}
                    </select>              
        </div>
    </div>
  )
}

export default Inputbox;