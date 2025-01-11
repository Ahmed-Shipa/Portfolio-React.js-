import { useState } from "react";

import img2 from "../../assets/images/port/port2.jpg";

import img5 from "../../assets/images/port/port5.jpg";

export default function SectionDesign() {
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
    // handle the hover effect on the images
  function handleMouseOut() {
    setbackGround({ backgroundColor: "" });
    setHideImg({ visibility: "visible" });
  }
  return (
    <>
      <div className="row container pt-5 mt-2 d-flex justify-content-center section-all gx-2 gy-2">
        <div
          style={hoveredDiv == 2 ? backGround : {}}
          onMouseOver={() => {
            handleMouseOver("#29a9ff", 2);
            setHovered(true);
          }}
          onMouseOut={() => {
            handleMouseOut();
            setHovered(false);
          }}
          className="col-lg-4 col-md-6 col-12 hove"
        >
          {hovered && hoveredDiv == 2 ? (
            <div className="hovered">
              <h2>Brand Logo</h2>
              <p>Brand</p>
              <i className="fa-solid fa-eye"></i>
            </div>
          ) : null}
          <img
            style={hoveredDiv == 2 ? hideImg : {}}
            className="img-fluid shadow"
            src={img2}
            alt=""
          />
        </div>
        <div
          style={hoveredDiv == 5 ? backGround : {}}
          onMouseOver={() => {
            handleMouseOver("#161622", 5);
            setHovered(true);
          }}
          onMouseOut={() => {
            handleMouseOut();
            setHovered(false);
          }}
          className="col-lg-4 col-md-6 col-12 hove"
        >
          {hovered && hoveredDiv == 5 ? (
            <div className="hovered">
              <h2>Brand Logo</h2>
              <p>Brand</p>
              <i className="fa-solid fa-eye"></i>
            </div>
          ) : null}
          <img
            style={hoveredDiv == 5 ? hideImg : {}}
            className="img-fluid shadow"
            src={img5}
            alt=""
          />
        </div>
      </div>
    </>
  );
}
