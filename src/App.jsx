 import { useState } from "react";
import "./App.css";

import Projects from "./pages/Projects";
function App() {
    const [currentPage, setCurrentPage] = useState("dashboard");
  return (
    <div className="app">

      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo">
          AI Research
        </div>

        <nav>
          <a className="active">Dashboard</a>
          <a onClick={() => setCurrentPage("projects")}>Projects</a>
          <a>Datasets</a>
          <a>Models</a>
          <a>Experiments</a>
          <a>Research Notes</a>
        </nav>
        <div className="sidebar-bottom">
          <a>Settings</a>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main">
{currentPage === "projects" ? (
  <Projects />
) : (
  <>
        {/* Header */}
        <header className="header">
          <div>
            <h1>AI Research Workspace</h1>
            <p>Manage your AI research projects in one place.</p>
          </div>

          <button className="profile">SR</button>
        </header>

        {/* Welcome */}
        <section className="welcome">
          <div>
            <h2>Welcome back, Researcher 👋</h2>
            <p>
              Track your projects, datasets, models and experiments.
            </p>
          </div>

          <button className="primary-btn">
            + New Project
          </button>
        </section>

        {/* Statistics */}
        <section className="stats">

          <div className="card">
            <span>Projects</span>
            <h2>12</h2>
            <p>Active research projects</p>
          </div>

          <div className="card">
            <span>Datasets</span>
            <h2>28</h2>
            <p>Available datasets</p>
          </div>

          <div className="card">
            <span>Models</span>
            <h2>8</h2>
            <p>Trained AI models</p>
          </div>

          <div className="card">
            <span>Experiments</span>
            <h2>46</h2>
            <p>Total experiments</p>
          </div>

        </section>

        {/* Recent Projects */}
        <section className="content-card">

          <div className="section-header">
            <div>
              <h2>Recent Projects</h2>
              <p>Your latest research projects</p>
            </div>

            <button className="view-btn">
              View All
            </button>
          </div>

          <div className="project-list">

            <div className="project">
              <div>
                <h3>Medical Image Classification</h3>
                <p>Computer Vision • Updated 2 hours ago</p>
              </div>

              <span className="status active-status">
                Active
              </span>
            </div>

            <div className="project">
              <div>
                <h3>Natural Language Processing</h3>
                <p>NLP • Updated yesterday</p>
              </div>

              <span className="status">
                Research
              </span>
            </div>

            <div className="project">
              <div>
                <h3>Recommendation System</h3>
                <p>Machine Learning • Updated 3 days ago</p>
              </div>

              <span className="status completed">
                Completed
              </span>
            </div>

          </div>

        </section>
        
</>
)}
      </main>
 
    </div>
  );
}

export default App;