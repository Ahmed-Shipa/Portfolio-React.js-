import { NavLink } from "react-router-dom";
import img from "../../assets/favicon.png";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg container">
        <div className="img-fluid">
          <img className="" src={img} alt="" />
        </div>
        <button
          onClick={() => {
            console.log("done");
          }}
          className="navbar-toggler bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon bg-light" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <NavLink className="nav-link" to="">
                Home
              </NavLink>
            </li>
            <li className="nav-item active">
              <NavLink className="nav-link" to="about">
                About
              </NavLink>
            </li>
            <li className="nav-item active">
              <NavLink className="nav-link" to="services">
                Services
              </NavLink>
            </li>
            <li className="nav-item active">
              <NavLink className="nav-link" to="portfolio">
                Portfolio
              </NavLink>
            </li>
            <li className="nav-item active">
              <NavLink className="nav-link" to="testimonials">
                Testimonials
              </NavLink>
            </li>
            <li className="nav-item active">
              <NavLink className="nav-link" to="blog">
                Blog
              </NavLink>
            </li>
            <li className="nav-item active">
              <NavLink className="nav-link" to="contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
