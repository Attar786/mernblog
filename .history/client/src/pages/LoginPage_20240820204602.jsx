import  { useState } from "react"
import {Navigate } from 'react-router-dom';
const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [Redirect , setRedirect] = useState(false);
 async function login(ev)
  {
    ev.preventDefault();
   const response =  await fetch('http://localhost:5000/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({username, password}),
    credentials: 'include',
  })
  if(response.ok)
    {
      console.log('Logged in successfully');
      setRedirect(true); 
    }
    else
    {
      alert('Invalid credentials');
    }
  }
  if(Redirect)
    {
      return <Navigate to={'/'}/>
    }
  return (
    <>
    <form className="login" onSubmit={login}>
    <h1>Login</h1>

        <input type="text" placeholder="username" value={username} onChange={ev => setUsername(ev.target.value)}/>
        <input type="password" placeholder="Password" value={password} onChange={ev=> setPassword(ev.target.value)}/>
        <button type="submit">Login</button>
    </form>
    </>
  )
}

export default LoginPage
