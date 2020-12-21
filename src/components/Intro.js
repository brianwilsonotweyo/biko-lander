import React from "react";
import Modal from "./Sections/Modal";

function Intro() {
  return (
    <section id="intro" class="clearfix">
      <div class="container">
        <div class="intro-img">
          <img src="img/41831-santa-claus-1--unscreen.gif" alt="" class="img-fluid" />
        </div>

        <div class="intro-info">
          <h2>
            We provide
            <br />
            <span>solutions</span>
            <br />
            for your business!
          </h2>
          {/* <div>
            <a  class="btn-get-started" data-toggle="modal" data-target="#loginModal">
              Get Started
            </a>
            <a href="#services" class="btn-services scrollto">
              Our Services
            </a>
            <Modal/>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default Intro;
