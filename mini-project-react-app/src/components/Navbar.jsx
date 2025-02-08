import { Link } from "react-router-dom";
import navLogo from "../assets/images/app-tasks-notes-logo.png"

export default function Navbar() {
  return (
    <nav>
        <Link to="/"><img className="logo-navbar" src={navLogo} alt="Logo"/></Link>
        <span>Task Organiser</span>
    </nav>
  );
}
