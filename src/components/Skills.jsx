import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaPhp, FaDatabase, FaFigma, FaPaintBrush, FaBootstrap, FaFileAlt } from "react-icons/fa";
import { SiSupabase, SiReact } from "react-icons/si"; // React Native icon not directly, we use SiReact as placeholder
import "../assets/css/skills.css";

export default function Skills() {
  const skills = [
    { name: "UX/UI Design", icon: <FaFigma style={{ color: "#F24E1E" }} /> }, // Figma orange
    { name: "React", icon: <FaReact style={{ color: "#61DAFB" }} /> }, // React blue
    { name: "React Native", icon: <SiReact style={{ color: "#61DAFB" }} /> }, // same React color
    { name: "HTML", icon: <FaHtml5 style={{ color: "#E34F26" }} /> }, // HTML orange
    { name: "CSS", icon: <FaCss3Alt style={{ color: "#1572B6" }} /> }, // CSS blue
    { name: "JavaScript", icon: <FaJs style={{ color: "#F7DF1E" }} /> }, // JS yellow
    { name: "PHP", icon: <FaPhp style={{ color: "#777BB4" }} /> }, // PHP purple
    { name: "MySQL", icon: <FaDatabase style={{ color: "#4479A1" }} /> }, // MySQL blue
    { name: "Supabase", icon: <SiSupabase style={{ color: "#3ECF8E" }} /> }, // Supabase green
    { name: "Graphic Design", icon: <FaPaintBrush style={{ color: "#FF6F61" }} /> }, // generic red
    { name: "MS Office", icon: <FaFileAlt style={{ color: "#D83B01" }} /> }, // Office orange/red
    { name: "Bootstrap", icon: <FaBootstrap style={{ color: "#7952B3" }} /> }, // Bootstrap purple
  ];

  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div className="skill-item" key={index}>
            <div className="icon">{skill.icon}</div>
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
