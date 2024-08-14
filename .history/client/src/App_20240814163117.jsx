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
        <Route path="/login" element={<div>login</div>} />
      </Routes>
    </>
  );
}

export default App;
