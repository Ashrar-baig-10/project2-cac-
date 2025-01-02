import React, { useEffect, useState } from 'react'
import { data, useLoaderData } from 'react-router'

function Github() {
  const data=useLoaderData()
  // const [data,setData]=useState([])
  //   useEffect(()=>{
  //       fetch('https://api.github.com/users/Ashrar-baig-10')
  //       .then(response=>response.json())
  //       .then(data=>{
  //           console.log(data)
  //           setData(data)
  //       })
  //   }, [])
  return (
    <div className='m-5 text-center text-white bg-gray-400 p-4 text-3xl'> Github Followers: {data.followers}
        <img className="" src={data.avatar_url} alt="Git picture" width={300} />
     </div>
  )
}

export default Github 
 export const githubInfoLoader=async()=>{
   const response=await fetch('https://api.github.com/users/Ashrar-baig-10')
  return response.json()
 }