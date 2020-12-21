import React from "react";

function Nav() {
  return (
    <header id="header" class="fixed-top">
      <div class="container">
        <div class="logo float-left">
          <h1 class="text-light">
            <a href="#intro">
              <span>BIKO</span>
            </a>
          </h1>
        </div>

        <nav class="main-nav float-right d-none d-lg-block">
          <ul>
            <li class="active">
              <a href="#intro">Home</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            {/* <li>
              <a href="#portfolio">Portfolio</a>
            </li> */}
            <li>
              <a href="#team">Team</a>
            </li>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Nav;
