function ResearchNotes() {
  return (
    <div className="page">
      <header className="header">
        <div>
          <h1>Research Notes</h1>
          <p>Write and manage your AI research notes.</p>
        </div>

        <button className="primary-btn">
          + New Note
        </button>
      </header>

      <section className="stats">
        <div className="card">
          <span>Total Notes</span>
          <h2>24</h2>
          <p>All research notes</p>
        </div>

        <div className="card">
          <span>This Week</span>
          <h2>6</h2>
          <p>Notes added this week</p>
        </div>

        <div className="card">
          <span>Projects</span>
          <h2>8</h2>
          <p>Notes linked to projects</p>
        </div>

        <div className="card">
          <span>Drafts</span>
          <h2>3</h2>
          <p>Notes waiting for review</p>
        </div>
      </section>

      <section className="content-card">
        <h2>Recent Research Notes</h2>
        <p>Your latest research notes</p>

        <div className="project-list">

          <div className="project">
            <div>
              <h3>Medical Image Classification</h3>
              <p>Model accuracy improved after data preprocessing.</p>
            </div>
            <span className="status active-status">
              Updated
            </span>
          </div>

          <div className="project">
            <div>
              <h3>BERT Fine-Tuning</h3>
              <p>Experiment results and hyperparameter observations.</p>
            </div>
            <span className="status">
              Research
            </span>
          </div>

          <div className="project">
            <div>
              <h3>Recommendation System</h3>
              <p>Notes about model performance and dataset quality.</p>
            </div>
            <span className="status completed">
              Completed
            </span>
          </div>

        </div>
      </section>
    </div>
  );
}

export default ResearchNotes;