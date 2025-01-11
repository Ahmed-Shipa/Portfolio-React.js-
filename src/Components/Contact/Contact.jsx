export default function Contact() {
  return (
    <>
      <div className="before2"></div>
      <section className="container contact mt-5">
        <div className="text-center title1 mb-5">
          <h2>Keep in Touch</h2>
        </div>
        <div data-aos="zoom-in" className="row gx-5">
          <div className="col-lg-7">
            <form>
              <div className="mb-3 d-flex inline-input justify-content-between form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                />
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                />
              </div>
              <div className="mb-3 form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                />
              </div>
              <div className="mb-3">
                <textarea className="form-control" />
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Submit
              </button>
            </form>
          </div>
          <aside className="col-lg-3">
            <div className="aside-card">
              <i className="fa-solid fa-location-dot mb-4"></i>
              <p className="mb-4">2651 Main Street, Cairo</p>
              <p>Egypt, WA, 98101</p>
            </div>
            <div className="aside-card mt-5">
              <i className="fa-solid fa-mobile"></i>
              <p className="mt-3">+201065668899</p>
            </div>
            <div className="aside-card mt-5">
              <i className="fa-regular fa-envelope"></i>
              <p className="mt-3">ahmedshipa37@gmail.com</p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
