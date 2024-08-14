import { Link } from "react-router-dom"

const Header = () => {
  return (
    <>
          <header>
          <a href="" className='logo'>My-BLog</a>
<nav>
  <Link to="/login">Login</Link>
  <a href="">Register</a>
</nav>
        </header> 
    </>
  )
}

export default Header
