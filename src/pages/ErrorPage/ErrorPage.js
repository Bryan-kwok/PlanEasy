import "./ErrorPage.scss";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <section className="errorpage">
      <h1 className="errorpage__header">Opps! It seems like this event no longer exists.</h1>
      <h2 className="errorpage__descripton">Please click <Link to="/" className="errorpage__return">here</Link> to return.</h2>
    </section>
  )
}
