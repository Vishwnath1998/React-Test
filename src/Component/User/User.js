import React, { useState,useEffect } from 'react'
import axios from 'axios'


export default function User() {

     const[user,setUser]=useState([])
     useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users ").then((res)=>{
            console.log(res)
            setUser(res.data)
        },(errorMsg)=>{
            alert("error while fetching data")
        })
     }, [])
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>User Details</h1>
                    {
                        user.length > 0 ? <table className="table table-hover">
                            <thead className="table-dark">
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>CITY</th>
                                <th>EMAIL</th>
                               
                            </tr>
                            </thead>
                            <tbody>
                            {
                                
                                user.map(function(data,index){
                                    return <tr>
                                        <td>{data.id}</td>
                                        <td>{data.name}</td>
                                        <td>{data.address.city}</td>
                                        <td>{data.email}</td>

                                    </tr>
                                  
                                })
                                
                            }
                          </tbody>
                        </table>:<h2>Data is not available</h2>
                    }

                </div>

            </div>
            
        </div>
    )
}
