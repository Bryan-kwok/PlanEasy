import "./Header.scss";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="nav">
        <Link to="/">
            <div className="nav_title">PlanEasy</div>
        </Link>
        <div className="nav_menu">Menu</div>
    </header>
  )
}
