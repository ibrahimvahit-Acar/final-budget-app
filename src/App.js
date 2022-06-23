import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Login from "./Login/Login";
import About from "./About/About";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;