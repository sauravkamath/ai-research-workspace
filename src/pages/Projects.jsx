import { useState } from "react";
import "./Projects.css";

function Projects() {
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [projectName, setProjectName] = useState("");
const [projectCategory, setProjectCategory] = useState("");
const [projectDescription, setProjectDescription] = useState("");
const handleCreateProject = () => {
  if (!projectName || !projectCategory) {
    alert("Please enter project name and category");
    return;
  }

  const newProject = {
    name: projectName,
    category: projectCategory,
    status: "Active",
    progress: 0,
  };

  setProjects([...projects, newProject]);

  setProjectName("");
  setProjectCategory("");
  setProjectDescription("");
  setShowModal(false);
};

   const [projects, setProjects] = useState([
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
   ]);

  const filteredProjects = projects.filter((project) =>
    project.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-box">
            <h2>Create New Project</h2>
            <p>Start a new AI research project.</p>

             <input
  type="text"
  placeholder="Project name"
  value={projectName}
  onChange={(e) => setProjectName(e.target.value)}
/>

            <input
               type="text"
  placeholder="Category"
   value={projectCategory}
onChange={(e) => setProjectCategory(e.target.value)}
            />

            <textarea
               placeholder="Project description"
  value={projectDescription}
  onChange={(e) => setProjectDescription(e.target.value)}
            ></textarea>

            <div className="modal-actions">
              <button onClick={() => setShowModal(false)}>
                Cancel
              </button>

              <button  
               onClick={() => {
    if (!projectName || !projectCategory) {
      alert("Please enter project name and category");
      return;
    }

    alert(`Project "${projectName}" created successfully!`);

    setProjectName("");
    setProjectCategory("");
    setProjectDescription("");
    setShowModal(false);
  }}
>
                Create Project
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="projects-page">
        <div className="projects-header">
          <div>
            <h1>Research Projects</h1>
            <p>Manage and track your AI research projects.</p>
          </div>

          <button
            className="new-project-btn"
            onClick={() => setShowModal(true)}
          >
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

          <input
            type="text"
            placeholder="Search projects..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="project-search"
          />

          {filteredProjects.map((project, index) => (
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

              <button
                className="view-btn"
                onClick={() =>
                  alert(
                    `Project: ${project.name}\nCategory: ${project.category}\nStatus: ${project.status}\nProgress: ${project.progress}%`
                  )
                }
              >
                View
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Projects;