import { useEffect, useState } from "react";
import About from "../About/About";
import Services from "../Services/Services";
import { NavLink, Outlet } from "react-router-dom";
import Testimonials from "../Testimonials/Testimonials";
import Blog from "../Blog/Blog";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

export default function Home() {
  const titles = [
    "FULLSTACK DEVELOPER",
    "REACT.JS DEVELOPER",
    "NODE.JS DEVELOPER",
  ];

  const [index, setIndex] = useState(0); // Tracks the current title index
  const [displayedText, setDisplayedText] = useState(""); // Holds the text to display
  const [typing, setTyping] = useState(true); // Indicates if typing is in progress

  useEffect(() => {
    let typingTimeout;

    if (typing) {
      if (displayedText.length < titles[index].length) {
        // Add one character at a time
        typingTimeout = setTimeout(() => {
          setDisplayedText(
            titles[index].substring(0, displayedText.length + 1)
          );
        }, 100); // Adjust typing speed here (milliseconds)
      } else {
        // Once typing is complete, wait before moving to the next title
        typingTimeout = setTimeout(() => {
          setTyping(false); // Stop typing
          // Wait for 2 seconds before clearing the text and moving to the next title
          setTimeout(() => {
            setDisplayedText("");
            setIndex((prevIndex) => (prevIndex + 1) % titles.length);
            setTyping(true); // Restart typing for the next title
          }, 500); // Display duration for the full title
        }, 500); // Additional delay after typing completes
      }
    }

    // Clean up the timeout when the component unmounts or updates
    return () => clearTimeout(typingTimeout);
  }, [displayedText, typing, index, titles]);

  return (
    <>
      {/* header section */}
      <section className="home">
        <div className="home-section">
          <p className="text-uppercase">Hello, I am</p>
          <h2 className="text-uppercase fs-1 mb-3">{displayedText}</h2>
          <p className="mb-4 paragraph-home">
            Software Developer with a strong foundation in frontend development
            using React.js, adept at creating responsive and dynamic user
            interfaces, Next.js to build server-rendered React applications with
            improved performance. Possesses good experience as a Backend
            Developer specializing in Node.js, with a proven ability to build
            scalable and robust applications. Proficient in Express.js for
            efficient server-side logic, MongoDB for data management, and
            Mongoose for data modeling and schema validation.
          </p>
          <button className="btn btn-info rounded-5 pt-2 px-5">
            Download CV
          </button>
        </div>
      </section>
      {/* about section */}
      <About />
      {/* services section */}
      <Services />
      {/* portfolio section */}
      <section className="container portfolio">
        <div className="portfolio-section mt-4">
          <h2 className="text-center text-capitalize">portfolio</h2>
        </div>
        <div className="links d-flex justify-content-center mt-5 pt-3">
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
      {/* testimonials section */}
      <Testimonials />
      {/* blog section */}
      <Blog />
      {/* contact section */}
      <Contact />
      {/* footer section */}
      <Footer />
    </>
  );
}
