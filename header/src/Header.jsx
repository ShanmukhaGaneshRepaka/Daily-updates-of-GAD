import React from 'react'
import imghed3 from './assets/headerimages/imghed3.jpg';
import searchicon from './assets/headerimages/searchicon.jpg';
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

              <div className='navelement'>Home</div>
             <div className='navelement'> Gents</div>
              <div className='navelement'>Ladies</div>
             <div className='navelement'>Kids</div>
           </div>

 <div className="header-center">

    <div className='searchbox'> 
          <input className='searchtextbox' type="text" placeholder='Search Here'>

          
          </input>
          <img className='searchimg' src={searchicon} alt="Icon" width="30px" height="40px" />

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