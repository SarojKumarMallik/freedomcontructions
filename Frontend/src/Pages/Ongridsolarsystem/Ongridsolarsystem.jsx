import React from "react";
import Ongridbreadcrum from "../../Components/Ongridbreadcrum/Ongridbreadcrum";
import Ongridherosection from "../../Components/Ongridherosection/Ongridherosection";
import Ongridwhyongridsolarsystem from "../../Components/Ongridwhyongridsolarsystem/Ongridwhyongridsolarsystem";
import Ongridsolarsavings from "../../Components/Ongridsolarsavings/Ongridsolarsavings";
import Ourserviceswhy from "../../Components/Ourserviceswhy/Ourserviceswhy";
import Howtoinstall from "../../Components/Howtoinstall/Howtoinstall";
import Ongridfaq from "../../Components/Ongridfaq/Ongridfaq";
import { Helmet } from "react-helmet";

const Ongridsolarsystem = () => {
  return (
    <>
      <Helmet>
        {/* Page Title */}
        <title>On Grid Solar System in Odisha | Freedom Contructions</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Professional On Grid Solar System installation in Odisha. Save electricity bills with government subsidy support from Freedom Contructions. Call today!"
        />

        {/* Meta Keywords */}
        <meta
          name="keywords"
          content="on grid solar system, grid tied solar system, solar installation in Odisha, rooftop solar Odisha, solar company in Odisha, Freedom Contructions"
        />

        {/* Robots */}
        <meta name="robots" content="index, follow" />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://www.bspprojectsolutions.co.in/services/on-grid-solar-system"
        />
      </Helmet>
      <Ongridbreadcrum />
      <Ongridherosection />
      <Ongridwhyongridsolarsystem />
      <Ongridsolarsavings />
      <Ourserviceswhy />

      <Howtoinstall />
      <Ongridfaq />
    </>
  );
};

export default Ongridsolarsystem;
