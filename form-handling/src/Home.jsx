import React from 'react'
import './Home.css'
import home from './images/home.jpg'
const Home = () => {
  return (
    <div>

   <div className="home">
    <h1>Home chalta</h1>
    <div className="imgstyling">
     < img src={home} alt="Hello image"   />
    </div>
   </div>

    </div>
  )
}

export default Home