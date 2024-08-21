import { Link } from "react-router-dom"
import { useEffect } from "react"
const Header = () => {
  useEffect(() => {
    fetch('http://localhost:5000/profile',{
      credentials: 'include',
    })
  }, []);
  
  
  return (
    <>
          <header>
          <Link to="/" className='logo'>My-BLog</Link>
<nav>
  <Link to="/login">Login</Link>
  <Link to="/register">Register</Link>
</nav>
        </header> 
    </>
  )
}

export default Header
