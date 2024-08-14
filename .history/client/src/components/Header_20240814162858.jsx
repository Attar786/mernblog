import { Link } from "react-router-dom"

const Header = () => {
  return (
    <>
          <header>
          <a href="" className='logo'>My-BLog</a>
<nav>
  <Link to="/login">Login</Link>
  <Link to="">Register</Link>
</nav>
        </header> 
    </>
  )
}

export default Header
