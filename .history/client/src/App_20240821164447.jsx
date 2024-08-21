import "./App.css";
import Layout from "./components/Layout";
import { Routes, Route } from 'react-router-dom';
import Indexpage from "./pages/Indexpage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { UserContextProvider } from "./UserContext";

const App = () => {
  return (
    <>
    <UserContextProvider>
    <Routes>
        <Route path="/" element={<Layout/>}>
        <Route path="/" element={<Indexpage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/register" element={<RegisterPage/>} />
        </Route>
      </Routes>
    </UserContextProvider>

    
      
    </>
  );
}

export default App;
