import "./App.css"
import Header from "./components/Header"
import Post from "./components/Post"
import {Routes, Route} from 'react-router-dom'
const App = () => {
  return (
    <Routes>
      <Route path= "/" element={ 
      <main>
   <Header/>
       <Post/>
       <Post/>
       <Post/>
      </main>
    } /> 
      </Routes>
  )
}

export default App
