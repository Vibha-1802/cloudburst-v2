import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
    <div className="home-container">
      
      {/* HERO SECTION */}
      <section className="hero">
        <h1>Cloudburst Detection System</h1>
        <p className="subtitle">Early Warning System for Flash Flood Prevention</p>

        <p className="hero-text">
          Real-time monitoring and AI-powered anomaly detection to protect communities from sudden 
          cloudbursts in hilly regions. Our distributed sensor network provides hyperlocal rainfall 
          and atmospheric data for timely alerts.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">View Dashboard</button>
          <button className="outline-btn">Learn More</button>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="stats-section">
        <h2>Live System Statistics</h2>

        <div className="stats-grid">

          <div className="stat-card">
            <div className="stat-icon">☁️</div>
            <h3>Total Nodes</h3>
            <p>Sensor nodes deployed</p>
            <strong>4</strong>
          </div>

          <div className="stat-card">
            <div className="stat-icon">📡</div>
            <h3>Active Sensors</h3>
            <p>Currently online</p>
            <strong>0</strong>
          </div>

          <div className="stat-card">
            <div className="stat-icon">📊</div>
            <h3>Data Points</h3>
            <p>Collected readings</p>
            <strong>1.8K</strong>
          </div>

          <div className="stat-card">
            <div className="stat-icon">⚠️</div>
            <h3>Active Alerts</h3>
            <p>Unacknowledged</p>
            <strong>0</strong>
          </div>

        </div>
      </section>

    </div>
    </div>
  );
}
