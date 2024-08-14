import "./App.css"

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
          <div className="post">
            <div className="img">
            <img src="https://www.mindinventory.com/blog/wp-content/uploads/2023/11/react-vs-vue.webp" alt="" />
            </div>
          
            <div className="texts">
            <h2>React vs Vue: Comparison of the Best JavaScript Frameworks at a Glance</h2>
            <p className="info">
              <span className="name"> Nihar
              </span>
              <time>Dec:18,2024</time>
            </p>
<p className='summary'>React and Vue are the most popular technologies for developing JavaScript web applications. But which one will you choose for your project? Let’s clear your doubts about knowing the difference between React and Vue. We will talk about the upsides and downsides of each, providing tips for choosing which to use.</p> 
            </div>
        </div>
        
      </main>
    </div>
  )
}

export default App
