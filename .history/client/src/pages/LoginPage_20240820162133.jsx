import { useState } from "react"

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <>
    <form className="login">
    <h1>Login</h1>

        <input type="text" placeholder="username" value={username} onChange={ev => setUsername(ev.target.value)}/>
        <input type="password" placeholder="Password" value={password} onChange={ev=> setPassword(ev.target.value)}/>
        <button type="submit">Login</button>
    </form>
    </>
  )
}

export default LoginPage
