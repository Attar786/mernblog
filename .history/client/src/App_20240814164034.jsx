import "./App.css";
import Header from "./components/Header";
import Post from "./components/Post";
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={
<Post/>
        }
        /> 
        <Route path="/login" element={

 <div>Login page</div>

        }/>
        <Route path="/register" element={<div>Register</div>} />
      </Routes>
    </>
  );
}

export default App;
