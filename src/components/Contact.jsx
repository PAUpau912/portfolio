import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import "../assets/css/contact.css";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2>Reach Out to Me!</h2>

      <p className="contact-title">
        Frontend Developer | UX/UI Designer | Social Media Manager
      </p>

      <p className="location">Laguna, Philippines</p>

      <div className="socials">
        <a href="https://www.linkedin.com/in/pauline-capulong-75a4b4302" target="_blank" rel="noopener noreferrer">
          LinkedIn <FaLinkedin className="icon" />
        </a>
        <a href="https://github.com/PAUpau912" target="_blank" rel="noopener noreferrer">
          GitHub <FaGithub className="icon" />
        </a>
        <a href="https://www.facebook.com/Capulong.Pau.04" target="_blank" rel="noopener noreferrer">
          Facebook <FaFacebook className="icon" />
        </a>
      </div>
    </section>
  );
}
