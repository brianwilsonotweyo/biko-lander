import React from "react";
import Services from "./Services";

function About() {
  return (
    <section id="about">
      <div class="container">
        <header class="section-header">
          <h3>About BIKO</h3>
          <p>
            Biko Group is a genuine partner that you can always rely on in times
            of trouble. Get to know more of our products and services.
          </p>
        </header>

        <div class="row about-container">
          <div class="col-lg-6 content order-lg-1 order-2">
            <h5>
              Biko group has a wide suite of services and products that range
              from Furniture, Real Estate, Financial Solutions,Tours and Car
              Leasing
            </h5>

            {/* <div class="icon-box wow fadeInUp">
              <div class="icon">
                <i class="fa fa-shopping-bag"></i>
              </div>
              <h4 class="title">
                <a href="">BIKO Real Estates</a>
              </h4>
              <p class="description">
                Now owning your dream house has been make easier with Biko. With
                flexible payment terms, we bring your dream into reality
              </p>
            </div> */}
            <div class="icon-box wow fadeInUp" data-wow-delay="0.4s">
              <div class="icon">
                <i class="fa fa-binoculars"></i>
              </div>
              <h4 class="title">
                <a href="">BIKO Tours</a>
              </h4>
              <p class="description">
                Book with Biko Tours and lets discover the Peal of Africa at
                most friendly rates on the market.
              </p>
            </div>
            <div class="icon-box wow fadeInUp" data-wow-delay="0.2s">
              <div class="icon">
                <i class="fa fa-gears"></i>
              </div>
              <h4 class="title">
                <a href="">BIKO Mechanic</a>
              </h4>
              <p class="description">
                Your genuine partner you can always rely on in times of trouble.
                Get to know more of our products and services.
              </p>
            </div>

            {/* <div class="icon-box wow fadeInUp" data-wow-delay="0.4s">
              <div class="icon">
                <i class="fa fa-bar-chart"></i>
              </div>
              <h4 class="title">
                <a href="">BIKO Furniture</a>
              </h4>
              <p class="description">
                You can now own all the exquisite custom made Furniture for your
                office and home needs.
              </p>
            </div> */}
            <div class="icon-box wow fadeInUp" data-wow-delay="0.4s">
              <div class="icon">
                <i class="fa fa-money"></i>
              </div>
              <h4 class="title">
                <a href="">BIKO Financial Solutions</a>
              </h4>
              <p class="description">
                BIKO provides you with the much needed boost within 24 hr upon
                application with unbeatable interest rates
              </p>
            </div>
            {/* <div class="icon-box wow fadeInUp" data-wow-delay="0.4s">
              <div class="icon">
                <i class="fa fa-bar-chart"></i>
              </div>
              <h4 class="title">
                <a href="">BIKO Car Leasing</a>
              </h4>
              <p class="description">
                We will pick you up! Biko will find you and will lift you to
                become your own boss in the shortest time possible.
              </p>
            </div> */}
          </div>

          <div class="col-lg-6 background order-lg-2 order-1 wow fadeInUp">
            <img src="img/about-img.svg" class="img-fluid" alt="" />
          </div>
        </div>

        <div class="row about-extra">
          <div class="col-lg-6 wow fadeInUp">
            <img src="img/about-extra-1.svg" class="img-fluid" alt="" />
          </div>
          <div class="col-lg-6 wow fadeInUp pt-5 pt-lg-0">
            <h4>
              How to get access all of our flagship services at your convinience
            </h4>
            <p>
              Biko Group has a wide suite of services and products that range
              from Furniture, Real Estate, Financial Solutions,Tours and Car
              Leasing most of these are individual services that are provided
              either on our websites or mobile apps that you can preview in our
              portfolio section
            </p>
          </div>
        </div>

        <div class="row about-extra">
          <div class="col-lg-6 wow fadeInUp order-1 order-lg-2">
            <img src="img/about-extra-2.svg" class="img-fluid" alt="" />
          </div>

          <div class="col-lg-6 wow fadeInUp pt-4 pt-lg-0 order-2 order-lg-1">
            <h4>BIKO group is not just a brand but a community.</h4>
            <p>
              Biko has a broad network ranging from partners to clients all of
              whom are using our services and interacting with each other making
              our platform robust so you'll be at home as everyone is considered
              in our net work as equals
            </p>
            <p>
              As biko group we are constantly improving our services thus we use
              only the latest and fastest technologies thus making sure you as
              the customers and partners dont lag behind while accessing our
              robust and secure services.
            </p>
            <p>
              As biko group we take all contributions from our community
              seriously thus we use all your comments and feedback to constantly
              improve the product adding in the most requested features from you
              our customers as we consider you first before anything else.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
