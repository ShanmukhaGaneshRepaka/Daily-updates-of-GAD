import React from 'react'
import './SideNavbar.css'
import {Link} from "react-router-dom"
const SideNavbar = () => {
  return (
    <div>

        <div className="navbarContainer">

            <div className="navbar">

                     <ul>
                <li>
                  <Link to="/Home">Home</Link></li>
             
              <li>   <Link to="/Women">  Women</Link></li>
                <li>  <Link to="/Men"> Men</Link>
                </li>
                <li> <Link to="/Kids">Kids </Link>  </li>
                <li> <Link to="/Beauty">Beauty</Link></li>
            </ul>

            </div>

          
        </div>
    </div>
  )
}

export default SideNavbar