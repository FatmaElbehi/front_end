import Home from "./pages/Home";
import Hi from "./pages/Hi";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "./style.scss"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import { useContext } from "react";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Login />} />
          <Route path="welcome" element={<Hi />} />
          <Route path="Home" element={<Home />} />
          <Route path="register" element={<Register />} />
        </Route> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
