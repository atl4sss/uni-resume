import { NavLink } from "react-router-dom";

const linkClass = ({ isActive }) => (isActive ? "active" : "");

export default function Nav() {
  return (
    <nav className="nav">
      <NavLink className={linkClass} to="/">Home</NavLink>
      <NavLink className={linkClass} to="/resume">Resume</NavLink>
      <NavLink className={linkClass} to="/projects">Projects</NavLink>
      <NavLink className={linkClass} to="/awards">Awards</NavLink>
      <NavLink className={linkClass} to="/activities">Activities</NavLink>
      <NavLink className={linkClass} to="/contact">Contact</NavLink>
    </nav>
  );
}
