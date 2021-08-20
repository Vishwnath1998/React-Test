import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
    return (
        <div className="container-fluid ">
            <div className="row">
                <nav className="navbar navbar-dark bg-dark">
           <a href="#" className="navbar-brand">Geekster</a>
           <ul className="nav">
               <li className="nav=item">
            <Link className="nav-link text-white" to='/'>Home</Link> 
               </li>
               <li className="nav=item">
            <Link className="nav-link text-white" to='/counter'>Counter</Link> 
               </li>
               <li className="nav=item">
            <Link className="nav-link text-white" to='/user'>User</Link> 
               </li>
               <li className="nav=item">
            <Link className="nav-link text-white" to='/post'>Post</Link> 
               </li>
           </ul>
                </nav>

            </div>
          
        </div>
    )
}

//why we use {} bases it import multiple components 