import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="not-found-container">
      <h1 className="not-found-title">404</h1>
      <h2 className="not-found-subtitle">Page Not Found</h2>
      <p className="not-found-message">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link to="/" className="not-found-link btn btn-danger p-4 fs-5">
        Go back to the homepage
      </Link>
    </div>
  );
}
