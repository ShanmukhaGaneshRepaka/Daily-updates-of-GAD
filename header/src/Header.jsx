import React from 'react'
import imghed3 from './assets/headerimages/imghed3.jpg';
import './App.css'
const Header = () => {
  return (

    
    <div className='header-section'>


     <div className="header-left" >
        <div className="header-logo">
           <div className="headerlogo">
            <img src={imghed3} alt="Header Image" width="220px" height="60px" />
           </div>


           
        </div>
        
          
     </div>
      <div className="navbar">

              <div className='navelement'>Logo</div>
             <div className='navelement'> Menu</div>
              <div className='navelement'>Logo</div>
             <div className='navelement'>Menu</div>
           </div>

 <div className="header-center">

    <div className='searchbox'> 
          <input className='searchtextbox' type="text" placeholder='Search Here'></input>

    </div>
  
 </div>


     <div className="header-right">
        <div className="header-logo">
        Header Right
         <div>Logo</div>
             <div>Menu</div>
              <div>Logo</div>
              <div>Menu</div></div>
</div>
    
    </div>

  )
}

export default Header