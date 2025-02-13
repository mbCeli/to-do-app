import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside>
        <ul>
            <Link to="/">Home</Link>
            <hr />
            <Link to="/about">About</Link>
        </ul>
    </aside>
  )
}