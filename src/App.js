import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomeComp from "./components/homeComp";
import Coins from "./components/Coins";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeComp />} />
        <Route path="/home" element={<HomeComp />} />
        <Route path="/coins" element={<Coins />} />
      </Routes>
    </div>
  );
}

export default App;
