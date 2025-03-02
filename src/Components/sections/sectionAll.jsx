import { useState } from "react";
import img1 from "../../assets/images/port/port1.jpg";
import img2 from "../../assets/images/port/port2.jpg";
import img3 from "../../assets/images/port/port3.jpg";
import img4 from "../../assets/images/port/port4.jpg";
import img5 from "../../assets/images/port/port5.jpg";
import img6 from "../../assets/images/port/port6.jpg";

export default function SectionAll() {
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
    // handle the blur effect on the images
  function handleMouseOut() {
    setbackGround({ backgroundColor: "" });
    setHideImg({ visibility: "visible" });
  }
  return (
    <>
      <div className="row container pt-5 mt-2 d-flex justify-content-center section-all gx-2 gy-2">
        <div
          style={hoveredDiv == 1 ? backGround : {}}
          onMouseOver={() => {
            handleMouseOver("rgb(237 93 155)", 1);
            setHovered(true);
          }}
          onMouseOut={() => {
            handleMouseOut();
            setHovered(false);
          }}
          className="col-lg-4 col-md-6 col-12 hove"
        >
          {hovered && hoveredDiv == 1 ? (
            <div className="hovered">
              <h2>Brand Logo</h2>
              <p>Brand</p>
              <i className="fa-solid fa-eye"></i>
            </div>
          ) : null}
          <img
            style={hoveredDiv == 1 ? hideImg : {}}
            className="img-fluid shadow"
            src={img1}
            alt=""
          />
        </div>
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
          style={hoveredDiv == 4 ? backGround : {}}
          onMouseOver={() => {
            handleMouseOver("#aadcdb", 4);
            setHovered(true);
          }}
          onMouseOut={() => {
            handleMouseOut();
            setHovered(false);
          }}
          className="col-lg-4 col-md-6 col-12 hove"
        >
          {hovered && hoveredDiv == 4 ? (
            <div className="hovered">
              <h2>Brand Logo</h2>
              <p>Brand</p>
              <i className="fa-solid fa-eye"></i>
            </div>
          ) : null}
          <img
            style={hoveredDiv == 4 ? hideImg : {}}
            className="img-fluid shadow"
            src={img4}
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
