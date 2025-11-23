import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { 
  CloudRain, 
  Activity, 
  MapPin, 
  AlertTriangle, 
  Menu, 
  X, 
  Moon, 
  Sun, 
  Globe, 
  ChevronRight, 
  LayoutDashboard,
  Radio,
  Database,
  Siren
} from 'lucide-react';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  // Updated stats with more relevant icons and types for new styling
  const stats = [
    { title: "Total Nodes", value: "4", sub: "Sensor nodes deployed", icon: Radio, type: "network" },
    { title: "Active Sensors", value: "0", sub: "Currently online", icon: Activity, type: "signal" },
    { title: "Data Points", value: "1.8K", sub: "Collected readings", icon: Database, type: "data" },
    { title: "Active Alerts", value: "0", sub: "Unacknowledged", icon: Siren, type: "alert" },
  ];

  return (
    <Router>
      <div className="app-container">
        
        <nav className="navbar">
          <div className="nav-container">
            <div className="nav-content">
              
              <div className="logo-section">
                <div className="logo-box">
                  <CloudRain size={24} color="white" className="logo-icon" />
                </div>
                <div className="logo-text">
                  <h1>Cloudburst</h1>
                  <span>Detection</span>
                </div>
              </div>

              <div className="desktop-links">
                <Link to="/" className="nav-link active">Home</Link>
                <Link to="/dashboard" className="nav-link">Dashboard</Link>
                <Link to="/prediction" className="nav-link">Prediction</Link>
                <Link to="/register" className="nav-link">Register Node</Link>
                <Link to="/contacts" className="nav-link">Contacts</Link>
                <Link to="/alerts" className="nav-link">Alerts</Link>
                <Link to="/graphs" className="nav-link">Data & Graphs</Link>
                <Link to="/settings" className="nav-link">Settings</Link>
              </div>

              <div className="nav-tools">
                <button onClick={() => setDarkMode(!darkMode)} className="icon-btn">
                  {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>
                <div className="lang-badge">
                  <Globe size={16} />
                  <span>English</span>
                </div>
              </div>

              <div className="mobile-toggle">
                <button onClick={() => setDarkMode(!darkMode)} className="icon-btn">
                  {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="icon-btn">
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>

          {isMenuOpen && (
            <div className="mobile-menu">
              <Link to="/" className="mobile-link active">Home</Link>
              <Link to="/dashboard" className="mobile-link">Dashboard</Link>
              <Link to="/prediction" className="mobile-link">Prediction</Link>
              <Link to="/alerts" className="mobile-link">Alerts</Link>
              <Link to="/settings" className="mobile-link">Settings</Link>
            </div>
          )}
        </nav>

        <main className="main-content">
          <div className="background-particles"></div>
          
          <div className="hero-container">
            
            {/* New Animated Cloudburst Graphic */}
            <div className="hero-graphic">
              <div className="cloud">
                <div className="cloud-puff"></div>
                <div className="cloud-puff"></div>
                <div className="cloud-puff"></div>
              </div>
              <div className="rain-container">
                <div className="rain-drop"></div>
                <div className="rain-drop"></div>
                <div className="rain-drop"></div>
                <div className="rain-drop"></div>
                <div className="rain-drop"></div>
              </div>
              <div className="sensor-network">
                <div className="sensor-node"></div>
                <div className="sensor-node"></div>
                <div className="sensor-node"></div>
                <div className="sensor-connection"></div>
              </div>
            </div>

            <div className="status-badge">
              <span className="pulse-indicator">
                <span className="ping"></span>
                <span className="dot"></span>
              </span>
              System Operational
            </div>

            <h1 className="hero-title">
              Cloudburst Detection System
            </h1>
            
            <p className="hero-subtitle">
              Early Warning System for Flash Flood Prevention
            </p>

            <p className="hero-desc">
              Real-time monitoring and AI-powered anomaly detection to protect communities 
              from sudden cloudbursts in hilly regions. Our distributed sensor network 
              provides hyperlocal rainfall and atmospheric data for timely alerts.
            </p>

            <div className="hero-buttons">
              <Link to="/dashboard" className="btn btn-primary">
                <LayoutDashboard size={20} />
                View Dashboard
              </Link>
              <Link to="/about" className="btn btn-secondary">
                Learn More
              </Link>
            </div>
          </div>

          <div className="stats-container">
            <div className="stats-header">
              <h2>Live System Statistics</h2>
              <Link to="/admin" className="link-arrow">
                View Analytical Dashboard 
                <ChevronRight size={16} />
              </Link>
            </div>

            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className={`stat-card ${stat.type}`}>
                  <div className="card-graphic">
                    {stat.type === 'network' && <div className="network-graphic"><div className="node"></div><div className="node"></div><div className="node"></div><div className="link"></div><div className="link"></div></div>}
                    {stat.type === 'signal' && <div className="signal-graphic"><div className="wave"></div><div className="wave"></div><div className="wave"></div></div>}
                    {stat.type === 'data' && <div className="data-graphic"><div className="bar"></div><div className="bar"></div><div className="bar"></div><div className="bar"></div></div>}
                    {stat.type === 'alert' && <div className="alert-graphic"><div className="beacon"></div></div>}
                  </div>

                  <div className="stat-content">
                    <div className="stat-top">
                      <div className="stat-icon-box">
                        <stat.icon size={24} />
                      </div>
                      <span className="stat-value">{stat.value}</span>
                    </div>
                    
                    <div className="stat-info">
                      <h3>{stat.title}</h3>
                      <p>{stat.sub}</p>
                    </div>
                  </div>
                  
                  <div className="hover-line"></div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;