 function Datasets() {
  return (
    <div className="page">

      {/* Header */}
      <header className="header">
        <div>
          <h1>Research Datasets</h1>
          <p>Manage and explore your AI research datasets.</p>
        </div>

        <button className="primary-btn">
          + New Dataset
        </button>
      </header>

      {/* Statistics */}
      <section className="stats">

        <div className="card">
          <span>Total Datasets</span>
          <h2>18</h2>
          <p>Available datasets</p>
        </div>

        <div className="card">
          <span>Active Datasets</span>
          <h2>12</h2>
          <p>Currently in use</p>
        </div>

        <div className="card">
          <span>Processed</span>
          <h2>6</h2>
          <p>Successfully processed</p>
        </div>

        <div className="card">
          <span>Total Records</span>
          <h2>56K</h2>
          <p>Across all datasets</p>
        </div>

      </section>

      {/* Search */}
      <section className="content-card">

        <div className="section-header">
          <div>
            <h2>All Datasets</h2>
            <p>Browse your research datasets</p>
          </div>

          <input
            type="text"
            placeholder="Search datasets..."
            className="search"
          />
        </div>

        {/* Dataset List */}
        <div className="project-list">

          <div className="project">
            <div>
              <h3>Medical Images Dataset</h3>
              <p>Computer Vision • 12,500 images</p>
            </div>

            <span className="status active-status">
              Ready
            </span>
          </div>

          <div className="project">
            <div>
              <h3>Customer Reviews Dataset</h3>
              <p>Natural Language Processing • 25,000 records</p>
            </div>

            <span className="status">
              Processing
            </span>
          </div>

          <div className="project">
            <div>
              <h3>Recommendation Dataset</h3>
              <p>Machine Learning • 18,750 records</p>
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

export default Datasets;