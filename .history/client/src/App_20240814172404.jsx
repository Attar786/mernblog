import "./App.css";
import Layout from "./components/Layout";
import { Routes, Route } from 'react-router-dom';
import Indexpage from "./pages/Indexpage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route path="/" element={<Indexpage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/register" element={<RegisterPage/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
