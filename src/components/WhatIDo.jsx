import "../assets/css/whatido.css";
import HeroImg from "../assets/developerActivity.svg"; 

export default function WhatIDo() {
  const services = [
    "Frontend Development – Building responsive and interactive websites using React, HTML, CSS, and JavaScript.",
    "UI/UX Design – Designing clean and user-friendly interfaces with Figma.",
    "Social Media Management – Creating engaging content and managing social platforms to grow brand presence.",
  ];

  return (
    <section className="whatido">
      <div className="container">
        <div className="image-side">
          <img src={HeroImg} alt="What I Do Illustration" />
        </div>

        <div className="text-side">
          <h2>What I Do</h2>
          <ul>
            {services.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
