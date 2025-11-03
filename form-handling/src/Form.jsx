import React from 'react'   

const Form = () => {


  const[firstName,setFirstName]=React.useState(' ');
  const[lastName,setLastName]=React.useState(' ');
  const[email,setEmail]=React.useState(' ');
  const[password,setPassword]=React.useState(' ');

  const changeHandler=(e)=>{
    const{name,value}=e.target;

    if(name==="firstName"){
      setFirstName(value);
    }
    else if(name==="lastName"){
      setLastName(value);
    }
    else if(name==="email"){
      setEmail(value);
    }
    else if(name==="password"){
      setPassword(value);
    }


  }

   const [submittedData, setSubmittedData] = React.useState(null);

  const submithandler=(e)=>{
    e.preventDefault();
     console.log(firstName,lastName,email,password);
     setSubmittedData({firstName,lastName,email,password});
  }



  return (
   

  <div>

    <div className='FormContainer'>
      <h3>
      Submit Form
      </h3>

      <form onSubmit={submithandler}>
      <label>First Name</label><br/>
      <input type="text" name="firstName" placeholder='Enter First Name' onChange={changeHandler}/> <br/>
     
       <label >Last Name</label><br/>
      <input type="text" name="lastName" placeholder='Enter Last Name'  onChange={changeHandler}/><br/>

       <label >Email</label><br/>
      <input type="email" name="email" placeholder='Enter Email'  onChange={changeHandler}/><br/>

      <label >Password</label><br/>
      <input type="password" name="password" placeholder='Enter Password'  onChange={changeHandler}/><br/>
      <br/>
      <button type='submit'>Submit</button> 

      </form>


     
    </div>

    <div>

       <h3>submitted data</h3>
       <h4>First Name : {submittedData && submittedData.firstName}</h4>
       <h4>Last Name : {submittedData && submittedData.lastName}</h4>
       <h4>Email : {submittedData && submittedData.email}</h4>
       <h4>Password : {submittedData && submittedData.password}</h4>  
    </div>

  </div>


  
    
  )
}

export default Form;