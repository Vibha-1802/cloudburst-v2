import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import VApp from "./pages/VApp"
import "./index.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<div className="page">Dashboard Page</div>} />
        <Route path="/prediction" element={<div className="page">Prediction Page</div>} />
        <Route path="/register-node" element={<div className="page">Register Node</div>} />
        <Route path="/alerts" element={<div className="page">Alerts Page</div>} />
        <Route path="/vapp" element={<VApp />} />
      </Routes>
    </Router>
  );
}

export default App;
