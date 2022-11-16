import "./LandingPage.scss";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="landing__container">
        <section className="landing__entry">
          <section className="landing__text">
              <h1 className="landing__title">PlanEasy.</h1>
              <h2 className="landing__copy">You and your friends can never seem to decide on a date and time?</h2>
              <h2 className="landing__copy">Worry not, PlanEasy has you covered.</h2>
          </section>
          <Link to="/create">
            <button className="landing__button">Create a new plan!</button>
          </Link>
        </section>
        <section className="landing__instructions">
        <h2 className="landing__instructions--label">How does this work?</h2>
          <div className="landing__instructions--1">
            <h2 className="landing__instructions--copy">1. Select a range of dates that your event could be on, then click next.</h2>
            <div className="landing__instructions--image1"></div>
          </div>
          <div className="landing__instructions--2">
            <h2 className="landing__instructions--copy">2. You can add a new participant by clicking on a date you'll be free on, and selecting a time that fits you.</h2>
            <div className="landing__instructions--image2"></div>
          </div>
          <div className="landing__instructions--3">
            <h2 className="landing__instructions--copy">3. Under the Participant Overview is an easy way to see who wants to come.</h2>
            <div className="landing__instructions--image3"></div>
          </div>
          <div className="landing__instructions--4">
            <h2 className="landing__instructions--copy">4. The Availability section visualizes which date and time most participants can come on.</h2>
            <div className="landing__instructions--image4"></div>
          </div>
        </section>
    </div>
  )
}
