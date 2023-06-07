import Home from "./pages/Home";
import About from "./pages/About";
import { Routes, Route } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </>
  );
};

export default App;
