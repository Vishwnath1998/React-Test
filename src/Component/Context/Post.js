import React,{useState,useEffect} from 'react'
import A from './A'
import axios from 'axios'
import myContext from './Context'

export default function Post() {
  const[state,setState]=useState([])
    useEffect(() => {
      axios.get("https://jsonplaceholder.typicode.com/posts").then((res)=>{
           setState(res.data)
        
      },(error)=>{
          alert("Error fetching the data")
          console.log(error)
      })
        
    }, [])

    return (
         <div>
          
            <myContext.Provider value={state}>
               <A/>
            </myContext.Provider>           
        </div>
    )
}
