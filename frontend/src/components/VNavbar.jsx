import React, { useState, useEffect } from "react";
import { 
  Moon, 
  Sun, 
  Globe, 
  Zap, 
  Menu 
} from "lucide-react";
import "./VNavbar.css";

const VNavbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-left">
        <div className="brand-wrapper">
          <div className="logo-icon-box">
            <Zap size={24} fill="white" />
          </div>
          <div className="logo-text">
            <span className="brand-title">Cloudburst</span>
            <span className="brand-subtitle">Detection System</span>
          </div>
        </div>

        <ul className="nav-links">
          <li className="nav-item active">
            Home
            <div className="active-dot"></div>
          </li>
          <li className="nav-item">Dashboard</li>
          <li className="nav-item">Prediction</li>
          <li className="nav-item">Data & Graphs</li>
          <li className="nav-item">Analytical Panel</li>
          <li className="nav-item">Alerts</li>
          
          {/* Updated & Added Items */}
          <li className="nav-item">Register Node</li>
          <li className="nav-item">Contacts</li>
          
          <li className="nav-item">Settings</li>
          <li className="nav-item">About</li>
        </ul>
      </div>

      <div className="nav-right">
        <div 
          className={`theme-switch ${darkMode ? "active" : ""}`} 
          onClick={() => setDarkMode(!darkMode)}
        >
          <div className="switch-handle">
            {darkMode ? <Moon size={14} /> : <Sun size={14} />}
          </div>
        </div>

        <div className="divider"></div>

        <div className="language-selector">
          <Globe size={20} />
          <span>EN</span>
        </div>
        
        <button className="mobile-menu-btn">
          <Menu size={28} />
        </button>
      </div>
    </nav>
  );
};

export default VNavbar;