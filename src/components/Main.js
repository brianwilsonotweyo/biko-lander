import React from "react";
import About from "./Sections/About";
import Testimonials from "./Sections/Testimonials";
import Portfolio from "./Sections/Portfolio";
import Services from "./Sections/Services";
import Whyus from "./Sections/Whyus";
import Team from "./Sections/Team";
import Clients from "./Sections/Clients";
import Contact from "./Sections/Contact";

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
    </main>
  );
}

export default Main;
