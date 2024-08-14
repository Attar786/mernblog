import "./App.css";
import Layout from "./components/Layout";
import Post from "./components/Post";
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route path="/post" element={<Post/>} />
        <Route path="/login" element={<div>Login page</div>} />
        <Route path="/register" element={<div>Register</div>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
