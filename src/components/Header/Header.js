import "./Header.scss";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="nav">
        <Link to="/" className="nav__title">
            <div className="nav_title">PlanEasy - BETA v1.06</div>
        </Link>
        <div className="nav__menu">Menu</div>
    </header>
  )
}
