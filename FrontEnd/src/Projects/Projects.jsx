import React, { useState, useEffect } from "react";
import "./Projects.css";
import axios from "axios";
import Swal from "sweetalert2";

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
      const response = await axios.get("http://localhost:4000/api/projects");
      setProjects(response.data);
    } catch (error) {
      console.error("Error al cargar proyectos:", error);
    }
  };

  const deleteProject = async (projectId) => {
    const result = await Swal.fire({
      title: language === "EN" ? "Are you sure?" : "¿Estás seguro?",
      text:
        language === "EN"
          ? "This action cannot be undone!"
          : "¡Esta acción no se puede deshacer!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText:
        language === "EN" ? "Yes, delete it!" : "Sí, eliminar!",
      cancelButtonText: language === "EN" ? "No, cancel!" : "No, cancelar!",
    });

    if (result.isConfirmed) {
      try {
        await axios.delete(`http://localhost:4000/api/proyecto/${projectId}`);
        fetchProjects();
        Swal.fire(
          language === "EN" ? "Deleted!" : "Eliminado!",
          language === "EN"
            ? "Your project has been deleted."
            : "Tu proyecto ha sido eliminado.",
          "success"
        );
      } catch (error) {
        console.error("Error al eliminar el proyecto:", error);
        Swal.fire(
          language === "EN" ? "Error!" : "¡Error!",
          language === "EN"
            ? "There was an error deleting the project."
            : "Hubo un error al eliminar el proyecto.",
          "error"
        );
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (projectToEdit) {
      setProjectToEdit({ ...projectToEdit, [name]: value });
    } else {
      setNewProject({ ...newProject, [name]: value });
    }
  };

  const editProject = (projectId) => {
    const project = projects.find((p) => p.id === projectId);
    setProjectToEdit(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsViewModalOpen(false);
    setProjectToEdit(null);
    setNewProject({
      name: "",
      description: "",
      link: "",
      date: "",
      languages: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (projectToEdit) {
        await axios.put(
          `http://localhost:4000/api/proyecto/${projectToEdit.id}`,
          projectToEdit
        );
      } else {
        await axios.post("http://localhost:4000/api/proyecto", newProject);
      }
      fetchProjects();
      closeModal();
    } catch (error) {
      console.error("Error al agregar o actualizar el proyecto:", error);
    }
  };

  const seeProject = (projectId) => {
    const project = projects.find((p) => p.id === projectId);
    setProjectToView(project);
    setIsViewModalOpen(true);
  };

  return (
    <div className="height-pro">
      <div className="title-pro">
        <p>{language === "EN" ? "Projects" : "Proyectos"}</p>
        <button className="add-btn" onClick={() => setIsModalOpen(true)}>
          + {language === "EN" ? "Add New Project" : "Agregar Proyecto"}
        </button>
      </div>

      <div className="pro-container">
        {projects.length === 0 ? (
          <p>{language === "EN" ? "No results" : "No hay resultados"}</p>
        ) : (
          projects.map((project) => (
            <div className="card-container" key={project.id}>
              <div className="card">
                <div className="front">
                  <h1>{project.name}</h1>
                  <p className="info-pro">{project.description}</p>
                </div>
                <div className="back">
                  <p className="titles">
                    {language === "EN" ? "Languages:" : "Lenguajes:"}
                  </p>
                  {project.languages}
                  <p className="titles">
                    {language === "EN" ? "Link:" : "Enlace:"} {project.link}
                  </p>
                  <p className="titles">
                    {language === "EN" ? "Date:" : "Fecha:"} {project.date}
                  </p>
                  <button onClick={() => seeProject(project.id)}>
                    <img src="/img/see.png" alt="View" />
                    
                  </button>
                  <button onClick={() => editProject(project.id)}>
                    <img src="/img/edit.png" alt="Edit" />
                   
                  </button>
                  <button onClick={() => deleteProject(project.id)}>
                    <img src="/img/delete.png" alt="Delete" />
                   
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Modal to View Project */}
      {isViewModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>{language === "EN" ? "View Project" : "Ver Proyecto"}</h2>
            {projectToView ? (
              <div>
                <p>
                  <strong>{language === "EN" ? "Name:" : "Nombre:"}</strong>{" "}
                  {projectToView.name}
                </p>
                <p>
                  <strong>
                    {language === "EN" ? "Description:" : "Descripción:"}
                  </strong>{" "}
                  {projectToView.description}
                </p>
                <p>
                  <strong>
                    {language === "EN" ? "Languages:" : "Lenguajes:"}
                  </strong>{" "}
                  {projectToView.languages}
                </p>
                <p>
                  <strong>{language === "EN" ? "Link:" : "Enlace:"}</strong>{" "}
                  <a
                    href={projectToView.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {projectToView.link}
                  </a>
                </p>
                <p>
                  <strong>{language === "EN" ? "Date:" : "Fecha:"}</strong>{" "}
                  {projectToView.date}
                </p>
              </div>
            ) : (
              <p>Loading...</p>
            )}
            <button type="button" onClick={closeModal}>
              {language === "EN" ? "Close" : "Cerrar"}
            </button>
          </div>
        </div>
      )}

      {/* Modal to Add/Edit Project */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>
              {projectToEdit
                ? language === "EN"
                  ? "Edit Project"
                  : "Editar Proyecto"
                : language === "EN"
                ? "Add New Project"
                : "Agregar Proyecto"}
            </h2>
            <form onSubmit={handleSubmit}>
              <div>
                <label>{language === "EN" ? "Name:" : "Nombre:"}</label>
                <input
                  type="text"
                  name="name"
                  value={projectToEdit?.name || newProject.name}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label>
                  {language === "EN" ? "Description:" : "Descripción:"}
                </label>
                <textarea
                  name="description"
                  value={projectToEdit?.description || newProject.description}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label>{language === "EN" ? "Link:" : "Enlace:"}</label>
                <input
                  type="text"
                  name="link"
                  value={projectToEdit?.link || newProject.link}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label>{language === "EN" ? "Date:" : "Fecha:"}</label>
                <input
                  type="date"
                  name="date"
                  value={projectToEdit?.date || newProject.date}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label>{language === "EN" ? "Languages:" : "Lenguajes:"}</label>
                <input
                  type="text"
                  name="languages"
                  value={projectToEdit?.languages || newProject.languages}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <button type="submit">
                  {language === "EN" ? "Save" : "Guardar"}
                </button>
                <button type="button" onClick={closeModal}>
                  {language === "EN" ? "Cancel" : "Cancelar"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
