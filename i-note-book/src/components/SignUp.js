import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
  const [users, setUsers] = useState({ name: "", email: "", password: "", cpassword: "" })
  const onChange = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value })
  }
  let history = useNavigate();
  const handleClick = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/registeruser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: users.name, email: users.email, password: users.password })

    });
    const json = await response.json();
    console.log(json)

    // Save the auth token and redirect
    localStorage.setItem('token', json.authToken)
    history('/')

  }
  return (
    <div className='container my-2'>
      <form onSubmit={handleClick}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" value={users.name} name='name' onChange={onChange} aria-describedby="emailHelp" />

        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" value={users.email} name='email' onChange={onChange} aria-describedby="emailHelp" />

        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" value={users.password} id="password" onChange={onChange} name='password' required minLength={5} />
        </div>
        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label">Confirm Password</label>
          <input type="cpassword" className="form-control"  id="cpassword" onChange={onChange} name='password' required minLength={5}/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default SignUp
