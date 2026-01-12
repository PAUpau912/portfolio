import "../assets/css/certifications.css";
import cert1 from "../assets/1.png";
import cert2 from "../assets/2.png";
import cert3 from "../assets/3.png";
import cert4 from "../assets/4.png";
import { useState } from "react";

export default function Certifications() {
  const [modalImage, setModalImage] = useState(null);

  const certifications = [
    { 
      title: "Frontend Development", 
      issuer: "Great Learning", 
      link:"https://www.mygreatlearning.com/certificate/YTRTDSCT?referrer_code=GL4L6AEWKWHWU" 
    },
    { 
      title: "UX/UI for Beginners", 
      issuer: "Great Learning", 
      link:"https://www.mygreatlearning.com/certificate/RWKLTDEH?referrer_code=GL4L6AEWKWHWU" 
    },
    { 
      title: "Social Media Management", 
      issuer: "Social Media Academy", 
      image: cert1,
    },
    { 
      title: "Basic Graphics Editing", 
      issuer: "Social Media Academy", 
      image: cert3,
    },
  ];

 return (
    <section id="certifications" className="certifications-section">
      <h2>Certifications</h2>

      <div className="certifications-grid">
        {certifications.map((cert, index) => (
          <div className="cert-card" key={index}>
            {cert.image && (
              <img
                src={cert.image}
                alt={cert.title}
                className="cert-image"
                onClick={() => setModalImage(cert.image)}
              />
            )}
            <h3>{cert.title}</h3>
            <p>{cert.issuer}</p>
            {cert.link && (
              <a href={cert.link} target="_blank" rel="noopener noreferrer">
                View Certificate
              </a>
            )}
          </div>
        ))}
      </div>

      {/* Modal for large image */}
      {modalImage && (
        <div className="modal" onClick={() => setModalImage(null)}>
          <span className="close">&times;</span>
          <img className="modal-content" src={modalImage} alt="Certificate" />
        </div>
      )}
    </section>
  );
}