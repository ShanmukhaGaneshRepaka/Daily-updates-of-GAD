import React, { useState } from 'react';

const UseStateDemo = () => {
  const style = {
    color: 'darkblue',
    padding: '10px',
    margin: '10px',
    backgroundColor: 'lightgray',
    fontWeight: 'bold',
  };

  // 🟩 The counter box style
  const ganesh = {
    backgroundColor: 'lightgray',
    padding: '20px',
    borderRadius: '8px',
    textAlign: 'center',
    width: '200px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    marginBottom: 0,
  };

  // 🟩 Parent wrapper to center the box (no effect on buttons inside)
  const wrapper = {
    display: 'flex',
   
     flexDirection: 'column', // stack vertically (box → buttons)
    justifyContent: 'center', // centers horizontally
    alignItems: 'center',     // centers vertically
    height: '100vh',          // full viewport height
  };

  const but={
    display: 'flex',
    justifyContent: 'center',
   
   
  }
const butonstyle={
    padding: '10px 20px',
    margin: '10px', 
    borderRadius: '8px',
    border: 'none', 
    cursor: 'pointer',  
}
  const [count, setCount] = useState(0);

  const handleClick = () => setCount((prev) => prev + 1);
  const handleClickBack = () => {
    if (count > 0) setCount((prev) => prev - 1);
  };

  return (
    <div style={wrapper}>
      <div style={ganesh}>
        <p style={style}>Count: {count}</p>
        {/* Buttons remain in same position inside the box */}
      
      </div>
      <div style={but}>
 <button style={butonstyle} onClick={handleClick}>Increment</button>
        <button style={butonstyle} onClick={handleClickBack}> 

          Decrement
        </button>
      </div>
       
    </div>
  );
};

export default UseStateDemo;
