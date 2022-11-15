import "./LandingPage.scss";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="landing__container">
        <section className="landing__text">
            <h1 className="landing__title">PlanEasy.</h1>
            <h2 className="landing__copy">You and your friends can never seem to decide on a date and time?</h2>
            <h2 className="landing__copy">Worry not, PlanEasy has you covered.</h2>
        </section>
        <Link to="/create">
          <button className="landing__button">Create a new plan!</button>
        </Link>
    </div>
  )
}
