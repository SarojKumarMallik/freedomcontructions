import React from "react";
import Homehero from "../../Components/Homehero/Homehero";
import Homeservice from "../../Components/Homeservice/Homeservice";
import Homeenergyservice from "../../Components/Homeenergyservice/Homeenergyservice";
import Aboutcontent from "../../Components/Aboutcontent/Aboutcontent";
import Homeimageslider from "../../Components/Homeimageslider/Homeimageslider";
import Testimonial from "../../Components/Testimonial/Testimonial";
import Collaboration from "../../Components/Collaboration/Collaboration";
import Ourteam from "../../Components/Ourteam/Ourteam";
import Vendor from "../../Components/Vendor/Vendor";
import RenergyInnovation from "../../Components/RenergyInnovation/RenergyInnovation";
import Pmsuryaghar from "../../Components/Pmsuryaghar/Pmsuryaghar";
import Brands from "../../Components/Brands/Brands";
import Solarservices from "../../Components/Solarservices/Solarservices";
import { Helmet } from "react-helmet";
import Heropopup from "../../Components/Heropopup/Heropopup";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>
          Solar Company in Odisha | Rooftop & Commercial Solar Installation -
          Freedom Contructions
        </title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Freedom Contructions is a leading solar company in Odisha providing rooftop solar installation, on-grid, off-grid & commercial solar systems with government subsidy support."
        />

        {/* Keywords */}
        <meta
          name="keywords"
          content="solar company in Odisha, rooftop solar installation, on grid solar system, off grid solar system, commercial solar installation, solar panel installation in Odisha, Freedom Contructions"
        />

        {/* Robots */}
        <meta name="robots" content="index, follow" />

        {/* Canonical */}
        <link rel="canonical" href="https://www.bspprojectsolutions.co.in/" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Solar Company in Odisha | Freedom Contructions"
        />
        <meta
          property="og:description"
          content="Professional rooftop, on-grid and commercial solar installation services in Odisha."
        />
        <meta
          property="og:url"
          content="https://www.bspprojectsolutions.co.in/"
        />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Solar Company in Odisha | Freedom Contructions"
        />
        <meta
          name="twitter:description"
          content="Professional rooftop, on-grid and commercial solar installation services in Odisha."
        />
        <meta
          name="twitter:image"
          content="https://www.bspprojectsolutions.co.in/logo.png"
        />
      </Helmet>
      <Heropopup/>
      <Homehero />
      <Homeservice />
      <Brands />
      <Pmsuryaghar />
      {/* <Homeenergyservice/> */}

      <Solarservices />
      <Homeimageslider />

      <Testimonial />
      <Vendor />
      <Ourteam />
      <RenergyInnovation />

      {/* <Collaboration/> */}
    </>
  );
};

export default Home;
