function Experiments() {
  return (
    <div className="page">
      <header className="header">
        <div>
          <h1>Experiments</h1>
          <p>Run and track your AI research experiments.</p>
        </div>

        <button className="primary-btn">
          + New Experiment
        </button>
      </header>

      <section className="stats">
        <div className="card">
          <span>Total Experiments</span>
          <h2>46</h2>
          <p>All experiments</p>
        </div>

        <div className="card">
          <span>Running</span>
          <h2>5</h2>
          <p>Currently running</p>
        </div>

        <div className="card">
          <span>Completed</span>
          <h2>35</h2>
          <p>Successfully completed</p>
        </div>

        <div className="card">
          <span>Failed</span>
          <h2>6</h2>
          <p>Requires attention</p>
        </div>
      </section>

      <section className="content-card">
        <h2>Recent Experiments</h2>
        <p>Your latest research experiments</p>

        <div className="project-list">

          <div className="project">
            <div>
              <h3>Medical Image Model Training</h3>
              <p>ResNet50 • Accuracy: 94.2%</p>
            </div>
            <span className="status active-status">
              Running
            </span>
          </div>

          <div className="project">
            <div>
              <h3>BERT Fine-Tuning</h3>
              <p>NLP • Accuracy: 91.8%</p>
            </div>
            <span className="status completed">
              Completed
            </span>
          </div>

          <div className="project">
            <div>
              <h3>Recommendation Experiment</h3>
              <p>Random Forest • Accuracy: 88.6%</p>
            </div>
            <span className="status">
              Research
            </span>
          </div>

        </div>
      </section>
    </div>
  );
}

export default Experiments;