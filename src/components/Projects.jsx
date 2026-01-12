import { FaGithub } from "react-icons/fa";
import "../assets/css/projects.css";

// TODO: replace with your actual GitHub URLs and thumbnail images
const projects = [
  {
    title: "Coffee POS System",
    description: "A point of sale system for coffee shops.",
    github: "https://github.com/PAUpau912/maki_kape_pos_system.git",
  },
  {
    title: "E-commerce Website",
    description: "An online platform for buying and selling products.",
    github: "https://github.com/danmtndn/Interllux.git",
  },
  {
    title: "Gym System",
    description: "A management system for gym memberships and classes.",
    github: "https://github.com/PAUpau912/gym_system.git",
  },
  {
    title: "IT Help Desk",
    description: "A ticketing system for IT support requests.",
    github: "https://github.com/PAUpau912/Assistechx-Malungcat.git",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            className="project-card"
            key={index}
            onClick={() => window.open(project.github, "_blank")}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <FaGithub className="github-icon" />
          </div>
        ))}
      </div>

      <button
        className="more-projects"
        onClick={() =>
          window.open("https://github.com/PAUpau912", "_blank")
        }
      >
        More Projects
      </button>
    </section>
  );
}