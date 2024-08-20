import { useState } from "react";

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function Register(ev) {
    ev.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        alert("Registration successful");
        setUsername(''); // Reset username
        setPassword(''); // Reset password
      } else {
        alert("Error, Registration Failed");
      }
    } catch (e) {
      alert("Error, Registration Failed");
    }
  }

  return (
    <>
      <form className="register" onSubmit={Register}>
        <h1>Register</h1>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={ev => setUsername(ev.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={ev => setPassword(ev.target.value)}
        />
        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default RegisterPage;
