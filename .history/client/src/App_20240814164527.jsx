import "./App.css";
import Layout from "./components/Layout";
// import Header from "./components/Header";
import Post from "./components/Post";
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>} />  {/* Default route */}
        <Route path="/post" element={<Post/>} /> {/* Add path for Post */}
        <Route path="/login" element={<div>Login page</div>} />
        <Route path="/register" element={<div>Register</div>} />
      </Routes>
    </>
  );
}

export default App;
