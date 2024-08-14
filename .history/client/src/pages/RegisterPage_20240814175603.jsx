import { useState } from "react"

const RegisterPage = () => {
  const [username , setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <>
    <form className="login">
    <h1>Register </h1>
        <input type="text" placeholder="username" value={username}
        onChange={ev =>setUsername(ev.target.value)}/>
        <input type="password" placeholder="Password" value={password} 
        onChange={ev=> setPassword(ev.target.value)}/>
        <button type="submit">Login</button>
    </form>
    </>
  )
}

export default RegisterPage
