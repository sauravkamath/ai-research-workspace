function Projects() {
  const projects = [
    {
      name: "Medical Image Classification",
      category: "Computer Vision",
      status: "Active",
      progress: 72,
    },
    {
      name: "Natural Language Processing",
      category: "NLP",
      status: "Research",
      progress: 48,
    },
    {
      name: "Recommendation System",
      category: "Machine Learning",
      status: "Completed",
      progress: 100,
    },
  ];

  return (
    <div className="projects-page">
      <div className="projects-header">
        <div>
          <h1>Research Projects</h1>
          <p>Manage and track your AI research projects.</p>
        </div>

        <button className="new-project-btn">
          + New Project
        </button>
      </div>

      <div className="project-stats">
        <div className="project-stat-card">
          <h3>12</h3>
          <p>Total Projects</p>
        </div>

        <div className="project-stat-card">
          <h3>5</h3>
          <p>Active Projects</p>
        </div>

        <div className="project-stat-card">
          <h3>3</h3>
          <p>Completed</p>
        </div>
      </div>

      <div className="projects-list">
        <h2>All Projects</h2>

        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-info">
              <h3>{project.name}</h3>
              <p>{project.category}</p>
            </div>

            <div className="project-progress">
              <div className="progress-text">
                <span>{project.status}</span>
                <span>{project.progress}%</span>
              </div>

              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${project.progress}%` }}
                ></div>
              </div>
            </div>

            <button className="view-btn">
              View
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects; 