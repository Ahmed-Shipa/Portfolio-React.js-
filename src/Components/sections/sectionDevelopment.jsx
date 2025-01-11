import { useState } from "react";
import img3 from "../../assets/images/port/port3.jpg";
import img6 from "../../assets/images/port/port6.jpg";

export default function SectionDevelopment() {
  const [backGround, setbackGround] = useState({});
  const [hideImg, setHideImg] = useState({});
  let [hovered, setHovered] = useState(false);
  const [hoveredDiv, setHoveredDiv] = useState(false);

  // handle the hover effect on the images
  function handleMouseOver(color, index) {
    setbackGround({
      backgroundColor: color,
      cursor: "pointer",
      overflow: "hidden",
    });
    setHideImg({ visibility: "hidden" });
    setHoveredDiv(index);
  }
  // handle the blur effect
  function handleMouseOut() {
    setbackGround({ backgroundColor: "" });
    setHideImg({ visibility: "visible" });
  }
  return (
    <>
      <div className="row container pt-5 mt-2 d-flex justify-content-center section-all gx-2 gy-2">
        <div
          style={hoveredDiv == 3 ? backGround : {}}
          onMouseOver={() => {
            handleMouseOver("#f4aacb", 3);
            setHovered(true);
          }}
          onMouseOut={() => {
            handleMouseOut();
            setHovered(false);
          }}
          className="col-lg-4 col-md-6 col-12 hove"
        >
          {hovered && hoveredDiv == 3 ? (
            <div className="hovered">
              <h2>Brand Logo</h2>
              <p>Brand</p>
              <i className="fa-solid fa-eye"></i>
            </div>
          ) : null}
          <img
            style={hoveredDiv == 3 ? hideImg : {}}
            className="img-fluid shadow"
            src={img3}
            alt=""
          />
        </div>
        <div
          style={hoveredDiv == 6 ? backGround : {}}
          onMouseOver={() => {
            handleMouseOver("#4bc6ce", 6);
            setHovered(true);
          }}
          onMouseOut={() => {
            handleMouseOut();
            setHovered(false);
          }}
          className="col-lg-4 col-md-6 col-12 hove"
        >
          {hovered && hoveredDiv == 6 ? (
            <div className="hovered">
              <h2>Brand Logo</h2>
              <p>Brand</p>
              <i className="fa-solid fa-eye"></i>
            </div>
          ) : null}
          <img
            style={hoveredDiv == 6 ? hideImg : {}}
            className="img-fluid shadow"
            src={img6}
            alt=""
          />
        </div>
      </div>
    </>
  );
}
