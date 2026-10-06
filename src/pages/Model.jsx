function Models() {
  return (
    <div className="page">

      <header className="header">
        <div>
          <h1>AI Models</h1>
          <p>Manage and explore your AI research models.</p>
        </div>

        <button className="primary-btn">
          + New Model
        </button>
      </header>

      <section className="stats">

        <div className="card">
          <span>Total Models</span>
          <h2>8</h2>
          <p>Available models</p>
        </div>

        <div className="card">
          <span>Trained Models</span>
          <h2>5</h2>
          <p>Successfully trained</p>
        </div>

        <div className="card">
          <span>Fine-tuned</span>
          <h2>3</h2>
          <p>Fine-tuned models</p>
        </div>

        <div className="card">
          <span>Experiments</span>
          <h2>24</h2>
          <p>Total model experiments</p>
        </div>

      </section>

      <section className="content-card">

        <div className="section-header">
          <div>
            <h2>All Models</h2>
            <p>Your AI models</p>
          </div>
        </div>

        <div className="project-list">

          <div className="project">
            <div>
              <h3>Medical Image Classifier</h3>
              <p>Computer Vision • ResNet50</p>
            </div>

            <span className="status active-status">
              Trained
            </span>
          </div>

          <div className="project">
            <div>
              <h3>Customer Review Analyzer</h3>
              <p>NLP • BERT</p>
            </div>

            <span className="status">
              Fine-tuned
            </span>
          </div>

          <div className="project">
            <div>
              <h3>Recommendation Engine</h3>
              <p>Machine Learning • Neural Network</p>
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

export default Models;