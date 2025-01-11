import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// import bootstrap
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
// import fontawesome
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
// import react slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

createRoot(document.getElementById("root")).render(<App />);
