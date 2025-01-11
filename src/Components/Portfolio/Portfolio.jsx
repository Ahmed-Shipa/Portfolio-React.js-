import { NavLink, Outlet } from "react-router-dom";

export default function Portfolio() {
  return (
    <>
      <section className="container portfolio">
        <div className="portfolio-section mt-4">
          <h2 className="text-center text-capitalize">portfolio</h2>
        </div>
        <div className="links d-flex justify-content-center mt-5 pt-3 flex-wrap">
          <NavLink className="btn rounded-5 pt-2 px-5" to="">
            All
          </NavLink>
          <NavLink className="btn rounded-5 pt-2 px-5" to="sectionmarketing">
            Marketing
          </NavLink>
          <NavLink className="btn rounded-5 pt-2 px-5" to="sectiondesign">
            Design
          </NavLink>
          <NavLink className="btn rounded-5 pt-2 px-5" to="sectiondevelopment">
            Development
          </NavLink>
        </div>
        <div>
          <Outlet />
        </div>
      </section>
    </>
  );
}
