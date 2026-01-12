import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import "../assets/css/hero.css";
import profilePic from "../assets/prof_pic.jpg";

export default function Hero() {
  return (
    <section className="hero">
      <div>
        <h1>
          Hi, I'm Pauline Capulong <span>👋</span>
        </h1>

        <p>
          Frontend Developer | UX/UI Designer | Social Media Manager
        </p>

        <div className="socials">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
        </div>

        <div className="buttons">
          {/* CONTACT ME → Footer */}
          <a href="#contact">
            <button>Contact Me</button>
          </a>

          {/* SEE MY RESUME → PDF */}
          <a
            href="https://drive.google.com/file/d/1dYAe9cCEuWywQT6yNlY6aLSX8kuXuxfo/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="outline">See My Resume</button>
          </a>
        </div>
      </div>

      <img src={profilePic} alt="avatar" />
    </section>
  );
}
