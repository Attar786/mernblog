import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
const Header = () => {

const [username , setUsername] = useState(null)

  useEffect(() => {
    fetch('http://localhost:5000/profile',{
      credentials: 'include',
    }).then(response => {
response.json().then(userInfo => {
  setUsername(userInfo.username);
})
    })
  }, []);
  
  
  return (
    <>
          <header>
          <Link to="/" className='logo'>My-BLog</Link>
<nav>
  {username && (
    <>
    <Link to="/create">Create New Post</Link>
    <a href="">Logout</a>
    </>
  )}
  {!username && (
    <>
    <Link to="/login">Login</Link>
  <Link to="/register">Register</Link>
    </>
  )}
  
</nav>
        </header> 
    </>
  )
}

export default Header
