import React, { useState, useEffect } from 'react'
import axios from 'axios'
import TestGraph from './TestGraph';

function Test() {
    let [stat, setStat] = useState([])
    let [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        axios.get (`http://localhost:8000/api/statistique`)
        .then((res)=>{
          setIsLoading(true)
          setTimeout(() => {
            console.log(res.data);
            setStat(res.data)
            setIsLoading(false)
          }, 2000);
           
        })
    }, []);
  return (
    <div>
       {(isLoading)? 
      <h1>Loading...</h1>
      :
      <TestGraph stat={stat}/>
      }
     
    </div>
  )
}

export default Test
