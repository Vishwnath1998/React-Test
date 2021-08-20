import React, { useContext } from 'react'
import myContext from './Context'

export default function D() {

    const myContextData = useContext(myContext)
     console.log(myContextData)

    return (
         <div className="container">
            <div className="row">
            <div className="col mt-3">

                {
                    myContextData.map((data, index) => {
                        return <div className="card">
                                <div className="card-header bg-primary text-white">
                                    Card-Information
                                </div>
                                <div className="card-body">
                                    <h4>{data.id}</h4>
                                    <h4>{data.title}</h4>
                                    <p>{data.body}</p>
                                </div>

                            </div>
                    })
                }
            </div>
        </div>
        </div>
      
     )
}
    
