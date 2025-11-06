import React from 'react'

const FormEventExample = () => {

    const[name,setName]=React.useState(' ');
    const[details,setDetails]=React.useState(' ');


    const changeHandler=(event)=>{
       
        setName(event.target.value);
    }

    const clickEventFun=(e)=>{
        e.preventDefault();
        console.log(name);
        setDetails(name);
    }
  return (
    <div className='container'>

        <form onSubmit={clickEventFun}>
 <div className="inputfield">
           <h3>Name is {details}</h3>
            <input type="text" placeholder='Enter your name' backgroundColor='lightgray' onChange={changeHandler}></input><br/>
            
            <button className="submitBtn"  type="submit" >Submit</button>
        </div>

        </form>
       
       
    </div>
  )
}

export default FormEventExample