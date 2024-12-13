import React, { useState, useEffect } from "react";
import "./Projects.css";
import axios from 'axios';
import Swal from 'sweetalert2';

const Projects = ({ language }) => {
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState({
    name: "",
    description: "",
    link: "",
    date: "",
    languages: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [isViewModalOpen, setIsViewModalOpen] = useState(false); 
  const [projectToEdit, setProjectToEdit] = useState(null); 
  const [projectToView, setProjectToView] = useState(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/projects');
      console.log('Proyectos cargados:', response.data);
      setProjects(response.data);
    } catch (error) {
      console.error('Error al cargar proyectos:', error);
    }
  };

  const deleteProject = async (projectId) => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: 'This action cannot be undone!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
    });

    if (result.isConfirmed) {
      try {
        await axios.delete(`http://localhost:4000/api/proyecto/${projectId}`);
        console.log(`Proyecto con ID ${projectId} eliminado con éxito`);

        const response = await axios.get('http://localhost:4000/api/projects');
        setProjects(response.data);

        Swal.fire('Deleted!', 'Your project has been deleted.', 'success');
      } catch (error) {
        console.error('Error al eliminar el proyecto:', error);
        Swal.fire('Error!', 'There was an error deleting the project.', 'error');
      }
    } else {
      Swal.fire('Cancelled', 'Your project is safe!', 'info');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProject({ ...newProject, [name]: value });
  };

  const editProject = (projectId) => {
    const project = projects.find(p => p.id === projectId);
    setProjectToEdit(project);
    setIsModalOpen(true); // Abrir el modal de edición
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsViewModalOpen(false); 
    setProjectToEdit(null);
    setProjectToView(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (projectToEdit) {
        await axios.put(`http://localhost:4000/api/proyecto/${projectToEdit.id}`, projectToEdit);
        console.log('Proyecto actualizado');
      } else {
        await axios.post('http://localhost:4000/api/proyecto', newProject);
        console.log('Nuevo proyecto creado');
      }
      fetchProjects();
      closeModal();
    } catch (error) {
      console.error('Error al agregar o actualizar el proyecto:', error);
    }
  };

  const seeProject = (projectId) => {
    const project = projects.find(p => p.id === projectId);
    setProjectToView(project);
    setIsViewModalOpen(true);
  };

  return (
    <div className="height-pro">
      <div className="title-pro">
        <p>{language === "EN" ? "Projects" : "Proyectos"}</p>
        
        <button className="add-btn" onClick={() => setIsModalOpen(true)}>
          + Add New Project
        </button>
      </div>

      <div className="pro-container">
        {projects.length === 0 ? (
          <p>No results</p>
        ) : (
          projects.map((project) => (
            <div className="card-container" key={project.id}>
              <div className="card">
                <div className="front">
                  <h1>{project.name}</h1>
                  <p className="info-pro">{project.description}</p>
                </div>
                <div className="back">
                  <p className="titles">Herramientas:</p>
                  {project.languages}
                  <p className="titles">Links: {project.link}</p>
                  <p className="titles">Fecha: {project.date}</p>
                  <button target="_blank" rel="noopener noreferrer" onClick={() => seeProject(project.id)}>
                    <img src="/img/see.png" alt="Link" className="img-links" />
                  </button>
                  <button target="_blank" rel="noopener noreferrer" onClick={() => editProject(project.id)}>
                    <img src="/img/edit.png" alt="Link" className="img-links" />
                  </button>
                  <button target="_blank" rel="noopener noreferrer" onClick={() => deleteProject(project.id)}>
                    <img src="/img/delete.png" alt="Link" className="img-links" />
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>


      {isViewModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>View Project</h2>
            {projectToView ? (
              <div>
                <p><strong>Name:</strong> {projectToView.name}</p>
                <p><strong>Description:</strong> {projectToView.description}</p>
                <p><strong>Languages:</strong> {projectToView.languages}</p>
                <p><strong>Link:</strong> <a href={projectToView.link} target="_blank" rel="noopener noreferrer">{projectToView.link}</a></p>
                <p><strong>Date:</strong> {projectToView.date}</p>
              </div>
            ) : (
              <p>Loading...</p>
            )}
            <button type="button" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}

    
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>{projectToEdit ? "Edit Project" : "Add New Project"}</h2>
            <form onSubmit={handleSubmit}>
              <div>
                <label>Name:</label>
                <input
                  type="text"
                  name="name"
                  value={newProject.name || projectToEdit?.name || ''}
                  onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}
                />
              </div>
              <div>
                <label>Description:</label>
                <textarea
                  name="description"
                  value={newProject.description || projectToEdit?.description || ''}
                  onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
                />
              </div>
              <div>
                <label>Link:</label>
                <input
                  type="text"
                  name="link"
                  value={newProject.link || projectToEdit?.link || ''}
                  onChange={(e) => setNewProject({ ...newProject, link: e.target.value })}
                />
              </div>
              <div>
                <label>Date:</label>
                <input
                  type="date"
                  name="date"
                  value={newProject.date || projectToEdit?.date || ''}
                  onChange={(e) => setNewProject({ ...newProject, date: e.target.value })}
                />
              </div>
              <div>
                <label>Languages:</label>
                <input
                  type="text"
                  name="languages"
                  value={newProject.languages || projectToEdit?.languages || ''}
                  onChange={(e) => setNewProject({ ...newProject, languages: e.target.value })}
                />
              </div>
              <button type="submit">{projectToEdit ? "Save" : "Add Project"}</button>
              <button type="button" onClick={closeModal}>Close</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
