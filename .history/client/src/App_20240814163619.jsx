import "./App.css";
import Header from "./components/Header";
import Post from "./components/Post";
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={ 
          <main>
            <Header/>
            <Post/>
            <Post/>
            <Post/>
          </main>
        } /> 
        <Route path="/login" element={
 <main>
 <Header/>
 <div>Loginpage</div>
</main>

        } />
        <Route path="/register" element={<div>Register</div>} />
      </Routes>
    </>
  );
}

export default App;
