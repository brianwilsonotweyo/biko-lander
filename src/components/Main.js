import React from "react";
import About from "./Sections/About";
import Testimonials from "./Sections/Testimonials";
import Portfolio from "./Sections/Portfolio";
import Services from "./Sections/Services";
import Whyus from "./Sections/Whyus";
import Team from "./Sections/Team";
import Clients from "./Sections/Clients";
import Contact from "./Sections/Contact";
import { Helmet } from "react-helmet";

function Main() {
  return (
    <main id="main">
      <About />
      <Services/>
      <Whyus />
      <Portfolio />
      <Testimonials />
      <Team />
      <Clients />
      <Contact />
      <Helmet>
        <script src="lib/jquery/jquery.min.js"></script>
        <script src="lib/jquery/jquery-migrate.min.js"></script>
        <script src="lib/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script src="lib/easing/easing.min.js"></script>
        <script src="lib/mobile-nav/mobile-nav.js"></script>
        <script src="lib/wow/wow.min.js"></script>
        <script src="lib/waypoints/waypoints.min.js"></script>
        <script src="lib/counterup/counterup.min.js"></script>
        <script src="lib/owlcarousel/owl.carousel.min.js"></script>
        <script src="lib/isotope/isotope.pkgd.min.js"></script>
        <script src="lib/lightbox/js/lightbox.min.js"></script>
      </Helmet>
    </main>
  );
}

export default Main;
