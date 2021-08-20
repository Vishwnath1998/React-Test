import React,{useState}from 'react'

const Counter = ()=>{
  const[state, setState]= useState(0)

    return<div>
        <h1 className="text-danger">count the{state} Number</h1>
        <button className="btn btn-primary" onClick={()=>{setState(state+1)}}>updated the Number</button>
        <button className="btn btn-primary m-2" onClick={()=>{setState(state-1)}}>decrement the Number</button>
    </div>
}
export default Counter
//state is variable
//setState is normal function
//in setstate is update the state it will rerender whole components    