import React from "react";
import Helmet from "react-helmet";

function Services() {
  return (
    <>
      <section id="services" class="section-bg">
        <div class="container">
          <header class="section-header">
            <h3>Services</h3>
            <p>
              Biko Group's suite of services and products currently available
            </p>
          </header>

          <div class="row">
            <div
              class="col-md-6 col-lg-5 offset-lg-1 wow bounceInUp"
              data-wow-duration="1.4s"
            >
              <div class="box">
                <div class="icon">
                </div>
                <h4 class="title">
                  <a href="">BIKO Car Leasing</a>
                </h4>
                <p class="description">
                  We will pick you up! Biko will find you and will lift you to
                  become your own boss in the shortest time possible.
                </p>
              </div>
            </div>

            <div
              class="col-md-6 col-lg-5 wow bounceInUp"
              data-wow-duration="1.4s"
            >
              <div class="box">
                {/* <div class="icon">
                <i
                  class="ion-ios-bookmarks-outline"
                  style="color: #e9bf06;"
                ></i>
              </div> */}
                <h4 class="title">
                  <a href="">BIKO Real Estates</a>
                </h4>
                <p class="description">
                  Now owning your dream house has been make easier with Biko.
                  With flexible payment terms, we bring your dream into reality
                </p>
              </div>
            </div>

            <div
              class="col-md-6 col-lg-5 offset-lg-1 wow bounceInUp"
              data-wow-delay="0.1s"
              data-wow-duration="1.4s"
            >
              <div class="box">
                {/* <div class="icon">
                <i class="ion-ios-paper-outline" style="color: #3fcdc7;"></i>
              </div> */}
                <h4 class="title">
                  <a href="">BIKO Furniture</a>
                </h4>
                <p class="description">
                  BIKO Furniture You can now own all the exquisite custom made
                  Furniture for your office and home needs.
                </p>
              </div>
            </div>
            <div
              class="col-md-6 col-lg-5 wow bounceInUp"
              data-wow-delay="0.1s"
              data-wow-duration="1.4s"
            >
              <div class="box">
                {/* <div class="icon">
                <i
                  class="ion-ios-speedometer-outline"
                  style="color:#41cf2e;"
                ></i>
              </div> */}
                <h4 class="title">
                  <a href="">BIKO Tours</a>
                </h4>
                <p class="description">
                  BIKO Tours lets you Book with Biko Tours and lets discover the
                  Peal of Africa at most friendly rates on the market.
                </p>
              </div>
            </div>

            <div
              class="col-md-6 col-lg-5 offset-lg-1 wow bounceInUp"
              data-wow-delay="0.2s"
              data-wow-duration="1.4s"
            >
              <div class="box">
                {/* <div class="icon">
                <i class="ion-ios-world-outline" style="color: #d6ff22;"></i>
              </div> */}
                <h4 class="title">
                  <a href="">BIKO Financial Solutions</a>
                </h4>
                <p class="description">
                  BIKO provides you with the much needed boost within 24 hr upon
                  application with unbeatable interest rates
                </p>
              </div>
            </div>
            <div
              class="col-md-6 col-lg-5 wow bounceInUp"
              data-wow-delay="0.2s"
              data-wow-duration="1.4s"
            >
              <div class="box">
                {/* <div class="icon">
                <i class="ion-ios-clock-outline" style="color: #4680ff;"></i>
              </div> */}
                <h4 class="title">
                  <a href="">BIKO Mechanic</a>
                </h4>
                <p class="description">
                  Your genuine partner you can always rely on in times of
                  trouble. Get to know more of our products and services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Helmet>
        <link href="lib/ionicons/css/ionicons.min.css" rel="stylesheet" />
      </Helmet>
    </>
  );
}

export default Services;
