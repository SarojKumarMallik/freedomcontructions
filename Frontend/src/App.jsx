import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer/Footer";
import About from "./Pages/About/About";
import Service from "./Pages/Service/Service";
import Contact from "./Pages/Contact/Contact";
import Ongridsolarsystem from "./Pages/Ongridsolarsystem/Ongridsolarsystem";
import Pagenotfound from "./Components/Pagenotfound/Pagenotfound";
import logo from "./assets/img/logo.png";
import Floatingcontact from "./Components/Floatingcontact/Floatingcontact";
import Hybridsolarsystem from "./Pages/Hybridsolarsystem/Hybridsolarsystem";
import Offgridsolarsystem from "./Pages/Offgridsolarsystem/Offgridsolarsystem";
import Career from "./Pages/Career/Career";
import Solaramc from "./Pages/Solaramc/Solaramc";
import Projects from "./Pages/Projects/Projects";
import Commercialindustrial from "./Pages/Commercialindustrial/Commercialindustrial";
import Blog from "./Pages/Blog/Blog";

function App() {
  const location = useLocation(); // 👈 detect route change
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true); // show loader on route change

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200); // duration for route change loader

    return () => clearTimeout(timer);
  }, [location.pathname]); // 👈 runs on every route change

  // if (loading) {
  //   return (
  //     <div className="preloader">
  //       <div className="preloader-card">
  //         <div className="solar-loader">
  //           <span className="ring ring-one"></span>
  //           <span className="ring ring-two"></span>

  //           <div className="logo-wrapper">
  //             <img src={logo} alt="Logo" />
  //           </div>
  //         </div>

  //         <p className="loading-text">
  //           Powering Your Future With Solar Energy...
  //         </p>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <>
      <Navbar />
      
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service />} />
        <Route path="/blogs" element={<Blog />} />
        <Route
          path="/services/on-grid-solar-system"
          element={<Ongridsolarsystem />}
        />
        <Route
          path="/services/hybrid-solar-system"
          element={<Hybridsolarsystem />}
        />
        <Route
          path="/services/off-grid-solar-system"
          element={<Offgridsolarsystem />}
        />
        <Route
          path="/services/solar-amc"
          element={<Solaramc />}
        />
        <Route
          path="/projects/residential-home-solar-system-installation"
          element={<Projects />}
        />
        <Route
          path="/projects/commercial-industrial-solar-system"
          element={<Commercialindustrial />}
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/career" element={<Career />} />
        <Route path="*" element={<Pagenotfound />} />
      </Routes>

      <Footer />
      <Floatingcontact/>
    </>
  );
}

export default App;