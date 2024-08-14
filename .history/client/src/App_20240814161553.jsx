import "./App.css"
import Post from "./components/Post"

const App = () => {
  return (
    <div>
      <main>
        <header>
          <a href="" className='logo'>My-BLog</a>
<nav>
  <a href="">Login</a>
  <a href="">Register</a>
</nav>
        </header>
       <Post/>
        
      </main>
    </div>
  )
}

export default App
