import Slider from "react-slick";
import img1 from "../../assets/images/testimonials/team-1.png";
import img2 from "../../assets/images/testimonials/team-2.png";
import img3 from "../../assets/images/testimonials/team-3.png";
export default function Testimonials() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <>
      <div className="background">
        <div className="container">
          <Slider {...settings}>
            <section className=" test">
              <div className="row w-75 m-auto position-relative top-50 translate-middle-y">
                <div className="col-lg-11 text-center">
                  <i className="fa-brands fa-slack icon1"></i>
                  <p className="mb-3 p-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tempora voluptates excepturi magni, voluptatibus voluptatem
                    doloremque tempore.
                  </p>
                  <div className="card1 h-50">
                    <div className="img-fluid">
                      <img
                        className="shadow-lg m-auto special1"
                        src={img1}
                        alt=""
                      />
                    </div>
                    <h3 className="mt-3 p-2">Alamin musa</h3>
                    <p>Frontend Developer</p>
                  </div>
                </div>
              </div>
            </section>
            <section className=" test">
              <div className="row w-75 m-auto position-relative top-50 translate-middle-y">
                <div className="col-lg-11 text-center">
                  <i className="fa-brands fa-slack icon1"></i>
                  <p className="mb-3 p-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tempora voluptates excepturi magni, voluptatibus voluptatem
                    doloremque tempore.
                  </p>
                  <div className="card1 h-50">
                    <div className="img-fluid">
                      <img
                        className="shadow-lg m-auto special2"
                        src={img2}
                        alt=""
                      />
                    </div>
                    <h3 className="mt-3 p-2">Alex Ander</h3>
                    <p>Backend Developer</p>
                  </div>
                </div>
              </div>
            </section>
            <section className=" test">
              <div className="row w-75 m-auto position-relative top-50 translate-middle-y">
                <div className="col-lg-11 text-center">
                  <i className="fa-brands fa-slack icon1"></i>
                  <p className="mb-3 p-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tempora voluptates excepturi magni, voluptatibus voluptatem
                    doloremque tempore.
                  </p>
                  <div className="card1 h-50">
                    <div className="img-fluid">
                      <img
                        className="shadow-lg m-auto special2"
                        src={img3}
                        alt=""
                      />
                    </div>
                    <h3 className="mt-3 p-2">Sara Coder</h3>
                    <p>React Developer</p>
                  </div>
                </div>
              </div>
            </section>
          </Slider>
        </div>
      </div>
    </>
  );
}
