import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Components/About/About";
import Blog from "./Components/Blog/Blog";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";
import Portfolio from "./Components/Portfolio/Portfolio";
import Services from "./Components/Services/Services";
import Testimonials from "./Components/Testimonials/Testimonials";
import NotFound from "./Components/NotFound/NotFound";
import Layout from "./Components/Layout/Layout";
import SectionAll from "./Components/sections/sectionAll";
import SectionMarketing from "./Components/sections/sectionMarketing";
import SectionDesign from "./Components/sections/sectionDesign";
import SectionDevelopment from "./Components/sections/sectionDevelopment";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function App() {
  // using aos for animation
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "linear",
    });
    AOS.refresh();
  }, []);

  // set the routes
  let routes = createBrowserRouter([
    // main layout
    {
      path: "",
      element: <Layout />,
      children: [
        //routing of home
        {
          path: "",
          element: <Home />,
          children: [
            { path: "", element: <SectionAll /> },
            { path: "sectionmarketing", element: <SectionMarketing /> },
            { path: "sectiondesign", element: <SectionDesign /> },
            { path: "sectiondevelopment", element: <SectionDevelopment /> },
          ],
        },
        //routing of portfolio
        {
          path: "portfolio",
          element: <Portfolio />,
          children: [
            { index: true, element: <SectionAll /> },
            { path: "sectionmarketing", element: <SectionMarketing /> },
            { path: "sectiondesign", element: <SectionDesign /> },
            { path: "sectiondevelopment", element: <SectionDevelopment /> },
          ],
        },
        //routing of about
        { path: "about", element: <About /> },
        //routing of blog
        { path: "blog", element: <Blog /> },
        //routing of contact
        { path: "contact", element: <Contact /> },
        //routing of services
        { path: "services", element: <Services /> },
        //routing of testimonials
        { path: "testimonials", element: <Testimonials /> },
        //if no route is found
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
