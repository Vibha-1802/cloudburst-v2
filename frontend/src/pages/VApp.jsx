import React from "react";
import VNavbar from "../components/VNavbar"; 
import "./VApp.css"; 

import { 
  Cpu, 
  SignalHigh, 
  Activity, 
  AlertTriangle, 
  ArrowRight, 
  ChevronRight,
  CloudLightning 
} from "lucide-react";

export default function VApp() {
  return (
    <div className="app-wrapper">
      <VNavbar />

      <main className="main-content">
        <div className="home-container">
          
          {/* HERO SECTION */}
          <section className="hero">
            <div className="hero-content">
              <div className="hero-badge">
                <CloudLightning size={16} className="pulse-icon" /> 
                <span>Live Monitoring System</span>
              </div>
              
              <h1>Cloudburst Detection System</h1>
              <p className="subtitle">Early Warning System for Flash Flood Prevention</p>

              <p className="hero-text">
                Real-time monitoring and AI-powered anomaly detection to protect communities 
                from sudden cloudbursts in hilly regions. Our distributed sensor network 
                provides hyperlocal rainfall and atmospheric data for timely alerts.
              </p>

              <div className="hero-buttons">
                <button className="primary-btn">
                  View Dashboard <ArrowRight size={20} />
                </button>
                <button className="outline-btn">
                  Learn More <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </section>

          {/* STATS SECTION */}
          <section className="stats-section">
            <div className="section-header">
              <h2>Live System Statistics</h2>
              <p>Real-time data from deployed infrastructure</p>
            </div>

            <div className="stats-grid">
              {/* Card 1 */}
              <div className="stat-card">
                <div className="stat-icon-box blue-glow">
                  <Cpu size={28} />
                </div>
                <div className="stat-info">
                  <h3>Total Nodes</h3>
                  <p>Sensor nodes deployed</p>
                </div>
                <strong>4</strong>
              </div>

              {/* Card 2 */}
              <div className="stat-card">
                <div className="stat-icon-box green-glow">
                  <SignalHigh size={28} />
                </div>
                <div className="stat-info">
                  <h3>Active Sensors</h3>
                  <p>Currently online status</p>
                </div>
                <strong>0</strong>
              </div>

              {/* Card 3 */}
              <div className="stat-card">
                <div className="stat-icon-box purple-glow">
                  <Activity size={28} />
                </div>
                <div className="stat-info">
                  <h3>Data Points</h3>
                  <p>Collected readings today</p>
                </div>
                <strong>1.8K</strong>
              </div>

              {/* Card 4 */}
              <div className="stat-card">
                <div className="stat-icon-box orange-glow">
                  <AlertTriangle size={28} />
                </div>
                <div className="stat-info">
                  <h3>Active Alerts</h3>
                  <p>Requires attention</p>
                </div>
                <strong className="alert-text">0</strong>
              </div>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}