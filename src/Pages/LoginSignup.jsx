import React, { useState } from 'react';
import './css/LoginSignup.css';

const LoginSignup = () => {

  const [state,setState] = useState("Login");
  const [formData,setFormData] = useState({
    username:"",
    password:"",
    email:""
  })

  const changeHandler = (e) => {
    setFormData({...formData,[e.target.name]:e.target.value})
  }

  const login = async () =>{
  console.log("Login function executed", formData);
  let responseData;
  await fetch('https://zefefrpdoors-backend.onrender.com/login',{
    method:'POST',
    headers:{
      Accept:'application/form-data',
      'Content-Type':'application/json',
    },
    body: JSON.stringify(formData),
  }).then((response)=> response.json()).then((data)=>responseData=data)
  if(responseData.success){
    localStorage.setItem('auth-token',responseData.token);
    window.location.replace("/");
  }
  else{
    alert(responseData.error)
  }
  }
  const signup = async () =>{
    console.log("signup function executed", formData);
    let responseData;
    await fetch('https://zefefrpdoors-backend.onrender.com/signup',{
      method:'POST',
      headers:{
        Accept:'application/form-data',
        'Content-Type':'application/json',
      },
      body: JSON.stringify(formData),
    }).then((response)=> response.json()).then((data)=>responseData=data)
    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace("/");
    }
    else{
      alert(responseData.error)
    }
  }


  
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          {state==="Sign Up"?<input name='username' value={formData.username} onChange={changeHandler} type="text" placeholder="Your Name" />:<></>}
          <input name='email' value={formData.email} onChange={changeHandler} type="email" placeholder="Email Id" />
          <input name='password' value={formData.password} onChange={changeHandler} type="password" placeholder="Password" />
        </div>
        <button onClick={()=>{state==="Login"?login():signup()}}>Continue</button>
        {state==="Sign Up"?<p className="loginsignup-login">
          Already Have An Account? <span onClick={()=>{setState("Login")}}>Login Here</span>
        </p>
        :<p className="loginsignup-login">
        Create An Account? <span onClick={()=>{setState("Sign Up")}}>Click Here</span>
      </p>}
        
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By Continue, I agree to the terms and conditions</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
