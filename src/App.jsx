import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./Pages/Navbar";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";

function App() {
  return (
    <div>
      {/* https://dummyjson.com/products/categories */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
