import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">🌧️ Cloudburst Detection</div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/prediction">Prediction</Link>
        <Link to="/register-node">Register Node</Link>
        <Link to="/alerts">Alerts</Link>
      </div>
    </nav>
  );
}
