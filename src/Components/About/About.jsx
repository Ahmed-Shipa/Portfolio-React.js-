import img1 from "../../assets/images/man.png";

export default function About() {
  return (
    <>
      <section
      data-aos="fade-up"
        className="about container d-flex justify-content-center
      align-items-center" 
      >
        <div className="img img-fluid">
          <img src={img1} alt="image" />
        </div>
        <aside className="w-50 h-50">
          <h2 className="mb-3">About Me</h2>
          <p className="mb-4">
            Software Developer with a strong foundation in frontend development
            using React.js, adept at creating responsive and dynamic user
            interfaces, Next.js to build server-rendered React applications with
            improved performance. Possesses good experience as a Backend
            Developer specializing in Node.js, with a proven ability to build
            scalable and robust applications. Proficient in Express.js for
            efficient server-side logic, MongoDB for data management, and
            Mongoose for data modeling and schema validation.
          </p>
          <button className="btn btn-info rounded-5 pt-2 px-5">Download CV</button>
        </aside>
      </section>
    </>
  );
}
