"use client"
import {  useState, useEffect } from 'react'
import * as React from 'react';
import axios from 'axios'


// Connect to RandomUsers endpoint to gather display a Racer in the marquee

export function RandomPlayer(){
  const [data, setData] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [check, setCheck] = useState(0)
  
 async function fetchPlayer(){
     const response = await axios.get(`/api/players/random_player`)
      setData(response.data.data)
      typeof data.name == "undefined"? isLoading : setLoading(false)
       
  }
  
  useEffect(() => {  
    
    const id = setInterval(() => {
                  fetchPlayer()
                  setCheck(check + 1)
                }, 3000);
    return () => clearInterval(id);            
  },[check])   

  
    return (
    <div>
      <div>{isLoading? 
        
        <h1>loading</h1>

        : 

        <div className= "columns-1" >
          <h2 className="" >{data.name} from {data.pod.name} </h2>

        </div> 

      }</div>
    </div>
       

    )
}
