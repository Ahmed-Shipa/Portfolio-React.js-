import img1 from "../../assets/images/blog/b1.png";
import img2 from "../../assets/images/blog/b2.png";
import img3 from "../../assets/images/blog/b3.png";
export default function Blog() {
  return (
    <>
      <section className="container text-center blog">
        <h2 className="p-3 mb-5">Blog</h2>
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div className="card text-white h-100">
              <img src={img1} className="card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title text-capitalize">
                  Master these awesome
                </h5>
                <p className="card-title target-p text-capitalize">
                  by dorian gray jun 27,2022
                </p>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                  aut ipsum minima magni assumenda provident quasi, sequi non
                  numquam tempore.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="card text-white h-100">
              <img src={img2} className="card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title text-capitalize">
                  best design items to appeal
                </h5>
                <p className="card-title target-p text-capitalize">
                  by dorian gray jun 27,2022
                </p>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                  aut ipsum minima magni assumenda provident quasi, sequi non
                  numquam tempore.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="card text-white h-100">
              <img src={img3} className="card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title text-capitalize">
                  the 20 best lightroom presets
                </h5>
                <p className="card-title target-p text-capitalize">
                  by dorian gray jun 27,2022
                </p>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                  aut ipsum minima magni assumenda provident quasi, sequi non
                  numquam tempore.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
