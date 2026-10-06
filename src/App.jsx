 import { useState } from "react";
import "./App.css";
import Projects from "./pages/Projects";
import Dataset from "./pages/Dataset";
 import Model from "./pages/Model";
 import Experiment from "./pages/Experiment";
 import ResearchNotes from "./pages/ResearchNotes";
 
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
           <a
  className={currentPage === "dashboard" ? "active" : ""}
  onClick={() => setCurrentPage("dashboard")}
>
  Dashboard
</a>
           <a
  className={currentPage === "projects" ? "active" : ""}
  onClick={() => setCurrentPage("projects")}
>
  Projects
</a>
            <a
  className={currentPage === "dataset" ? "active" : ""}
  onClick={() => setCurrentPage("dataset")}
>
  Datasets
</a>
           <a
  className={currentPage === "models" ? "active" : ""}
  onClick={() => setCurrentPage("models")}
>
  Models
</a>
          <a
  className={currentPage === "experiments" ? "active" : ""}
  onClick={() => setCurrentPage("experiments")}
>
  Experiments
</a>
           <a
  className={currentPage === "researchNotes" ? "active" : ""}
  onClick={() => setCurrentPage("researchNotes")}
>
  Research Notes
</a>
        </nav>
        <div className="sidebar-bottom">
          <a>Settings</a>
        </div>
      </aside>

       {/* Main Content */}
<main className="main">

   {currentPage === "projects" ? (
  <Projects />
 ) : currentPage === "models" ? (
  <Model />
 ) : currentPage === "experiments" ? (
  <Experiment />
) : currentPage === "researchNotes" ? (
  <ResearchNotes />
) : (
    <>
      {/* yahan tumhara pura Dashboard code hai */}
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
<section className="research-overview">
  <div className="overview-header">
    <div>
      <h2>Research Overview</h2>
      <p>Monitor your overall research progress.</p>
    </div>
  </div>

  <div className="overview-grid">
    <div className="overview-card">
      <span>Project Progress</span>
      <strong>72%</strong>
      <div className="overview-bar">
        <div className="overview-fill" style={{ width: "72%" }}></div>
      </div>
      <small>8 of 12 projects progressing</small>
    </div>

    <div className="overview-card">
      <span>Experiments</span>
      <strong>46</strong>
      <small>12 experiments completed this month</small>
    </div>

    <div className="overview-card">
      <span>Research Notes</span>
      <strong>24</strong>
      <small>6 notes added this week</small>
    </div>
  </div>
</section>
{/* Quick Actions */}
<section className="quick-actions">
  <div className="quick-actions-header">
    <div>
      <h2>Quick Actions</h2>
      <p>Start your next research task.</p>
    </div>
  </div>

  <div className="quick-actions-grid">
    <button
  className="quick-action-card"
  onClick={() => setCurrentPage("projects")}
>
      <span className="quick-action-icon">＋</span>
      <div>
        <strong>New Project</strong>
        <small>Create a new research project</small>
      </div>
    </button>

    <button className="quick-action-card">
      <span className="quick-action-icon">📊</span>
      <div>
        <strong>Analyze Dataset</strong>
        <small>Explore and analyze your data</small>
      </div>
    </button>

    <button className="quick-action-card">
      <span className="quick-action-icon">🤖</span>
      <div>
        <strong>Train Model</strong>
        <small>Start a machine learning model</small>
      </div>
    </button>

    <button className="quick-action-card">
      <span className="quick-action-icon">🧪</span>
      <div>
        <strong>Run Experiment</strong>
        <small>Launch a new experiment</small>
      </div>
    </button>
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