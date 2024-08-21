import { Link } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../UserContext";
const Header = () => {
const {setUserInfo, userInfo} = useContext(UserContext);
  useEffect(() => {
    fetch('http://localhost:5000/profile',{
      credentials: 'include',
    }).then(response => {
response.json().then(userInfo => {
  setUserInfo(userInfo);
})
    })
  }, []);
  
  function logout()
  {
    fetch('http://localhost:5000/logout',{
      method: 'POST',
      credentials: 'include',
    });
setUserInfo(null);
  }

  const username = userInfo?.username;


  return (
    <>
          <header>
          <Link to="/" className='logo'>My-BLog</Link>
<nav>
  {username && (
    <>
    <Link to="/create">Create New Post</Link>
    <a href="" onClick={logout}>Logout</a>
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
