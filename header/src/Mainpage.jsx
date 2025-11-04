import React from 'react'
import image1 from './assets/image1.jpg';
import image2 from './assets/image2.jpg';
import image3 from './assets/image3.jpg';
import image4 from './assets/image4.jpg';
import image5 from './assets/image5.png';


const Mainpage = () => {
  return (
    
  <div className='mainpage'>
   
   
        <div className='image-container'>
        <div className="imgstyle">
        <img src={image1} alt="Hello image"   />
                <h2>Casual shirt @500/-</h2>
      </div>
    
      <div className="imgstyle">
        <img src={image3} alt="Hello image" />
         <h2>Casual shirt @500/-</h2>
      </div>
        <div className="imgstyle">
        <img src={image5} alt="Hello image"  />
         <h2>Casual shirt @500/-</h2>
      </div>
        <div className="imgstyle">
        <img src={image2} alt="Hello image"   />
         <h2>Casual shirt @500/-</h2>
      </div>
      <div className="imgstyle">
        <img src={image4} alt="Hello image" />
         <h2>Casual shirt @500/-</h2>
      </div>

      
     </div>

     
        <div className='image-container'>
        
      <div className="imgstyle">
        <img src={image2} alt="Hello image"   />
         <h2>Casual shirt @500/-</h2>

      </div>
      <div className="imgstyle">
        <img src={image3} alt="Hello image" />
         <h2>Casual shirt @500/-</h2>
      </div>
      <div className="imgstyle">
        <img src={image1} alt="Hello image"   />
         <h2>Casual shirt @500/-</h2>
      </div>
        <div className="imgstyle">
        <img src={image5} alt="Hello image"  />
         <h2>Casual shirt @500/-</h2>
      </div>
      <div className="imgstyle">
        <img src={image4} alt="Hello image" />
         <h2>Casual shirt @500/-</h2>
      </div>

      
     </div>
   </div>

    
 
  )
}

export default Mainpage;