export default function Services() {
  return (
    <>
      <article className="title container">
        <div className="title-section mt-2">
          <h2 className="text-center">Services</h2>
        </div>
        <div className="skills row d-flex justify-content-center mt-1">
          <div data-aos="flip-left" className="col-lg-3 col-md-5 col-sm-10 text-center box shadow-lg rounded-3 mt-4">
            <i
              className="fab fa-react text-primary me-2 icon mb-3"
              aria-hidden="true"
            ></i>
            <h3 className="text-capitalize mb-3">react.js</h3>
            <p>
              React Building dynamic and responsive user interfaces with React’s
              component-based architecture. Skilled in state management, hooks,
              and integrating modern libraries to enhance functionality.
            </p>
          </div>
          <div data-aos="flip-left" className="col-lg-3 col-md-5 col-sm-10 text-center box shadow-lg rounded-3 mt-4 ">
            <i
              className="fab fa-node-js text-success me-2 icon mb-3"
              aria-hidden="true"
            ></i>
            <h3 className="text-capitalize mb-3">node.js</h3>
            <p>
              Developing scalable server-side applications with Node.js and
              Express. Proficient in building RESTful APIs, managing databases,
              and optimizing performance for high-traffic environments.
            </p>
          </div>

          <div data-aos="flip-left" className="col-lg-3 col-md-5 col-sm-10 text-center box shadow-lg rounded-3">
          <i className="fa-brands fa-square-js text-warning icon mb-3"></i>
            <h3 className="text-capitalize mb-3">javascript</h3>
            <p>
            Expert in modern JavaScript (ES6+) for creating interactive and
              dynamic web applications. Proficient in DOM manipulation,
              asynchronous programming, and utilizing frameworks and libraries
              to enhance functionality.
            </p>
          </div>
          <div data-aos="flip-left" className="col-lg-3 col-md-5 col-sm-10 text-center box shadow-lg rounded-3">
            <i className="fa-solid fa-database text-info icon mb-3"></i>
            <h3 className="text-capitalize mb-3">mongoDB & MySQL</h3>
            <p>
              Designing and managing scalable NoSQL databases with MongoDB for
              flexible and efficient data storage. Developing and maintaining
              robust relational databases using MySQL. Skilled in writing
              complex SQL queries, optimizing database performance.
            </p>
          </div>
          <div data-aos="flip-left" className="col-lg-3 col-md-5 col-sm-10 text-center box shadow-lg rounded-3">
          <i className="fa-solid fa-crop icon mb-3"></i>
            <h3 className="text-capitalize mb-3">responsive design</h3>
            <p>
            Adaptable user interfaces to ensure seamless experiences across
              all devices and screen sizes. Proficient in using CSS frameworks,
              media queries, and modern design principles to enhance usability
              and accessibility.
            </p>
          </div>
          <div data-aos="flip-left" className="col-lg-3 col-md-5 col-sm-10 text-center box shadow-lg rounded-3">
            <i className="fa-solid fa-code icon mb-3"></i>
            <h3 className="text-capitalize mb-3">clean code</h3>
            <p>
              Writing readable, maintainable, and efficient code by adhering to
              industry best practices and design principles. Skilled in
              refactoring, code optimization, and ensuring high-quality
              software.
            </p>
          </div>
        </div>
      </article>
    </>
  );
}
