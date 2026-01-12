import { Link } from "react-scroll";
import "../assets/css/navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2>{"<Pauline Capulong />"}</h2>
      <ul>
        {["skills","projects","certifications","contact"].map(item => (
          <li key={item}>
            <Link to={item} smooth={true} duration={500}>
              {item.toLocaleUpperCase()}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
