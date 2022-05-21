import React, { useState } from 'react'
import { useNavigate} from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import {  toast } from 'react-toastify';

const Loigin = () => {
    const [credentials, setCredentials] = useState({email: "", password: ""})
const onChange = (e) => {
    setCredentials({...credentials, [e.target.name]: e.target.value} )
  }  
let history = useNavigate();
  const handleClick = async (e) => {
      e.preventDefault();
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({email: credentials.email, password: credentials.password})
  
      });
      const json = await response.json();
      console.log(json)
      if(json.success){
          // Save the auth token and redirect
          localStorage.setItem('token', json.authToken)
          toast.success("Login Suceesfuly",{autoClose: 300});
          history('/')
      }
      else{
        history('/login')
        toast.error("Invalid Credentials",{autoClose: 300});
      }

  }
    return (
        <div className='container my-2'>
            <form onSubmit={handleClick}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" value={credentials.email} name='email' onChange={onChange} aria-describedby="emailHelp" />
                    
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" value={credentials.password} id="password" onChange={onChange} name='password'/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Loigin
