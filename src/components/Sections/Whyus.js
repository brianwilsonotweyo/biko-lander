import React from "react";

function Whyus() {
  return (
    <section id="why-us" class="wow fadeIn">
      <div class="container">
        <header class="section-header">
          <h3>Why choose us?</h3>
          <p>
            At BIKO we value your contributions as well as we push our selves to
            offer the best services to our customers.
          </p>
        </header>

        <div class="row row-eq-height justify-content-center">
          <div class="col-lg-4 mb-4">
            <div class="card wow bounceInUp">
              <i class="fa fa-diamond"></i>
              <div class="card-body">
                <h5 class="card-title">
                  High Quality services Instant Delivery Dedicated Team
                </h5>
                <p class="card-text">
                  Our services and products are all 5star rated by most of our
                  customers so youll be the judge by trying them out
                </p>
                <a href="#" class="readmore">
                  Read more{" "}
                </a>
              </div>
            </div>
          </div>

          <div class="col-lg-4 mb-4">
            <div class="card wow bounceInUp">
              <i class="fa fa-clock-o"></i>
              <div class="card-body">
                <h5 class="card-title">Instant Delivery</h5>
                <p class="card-text">
                  our dedicated staff ensure that deliver all of our services to
                  clients on time
                </p>
                <a href="#" class="readmore">
                  Read more{" "}
                </a>
              </div>
            </div>
          </div>

          <div class="col-lg-4 mb-4">
            <div class="card wow bounceInUp">
              <i class="fa fa-cog"></i>
              <div class="card-body">
                <h5 class="card-title">Dedicated Team</h5>
                <p class="card-text">
                  our teams are constantly working around the clock to ensure
                  that we offer high qauality services and products{" "}
                </p>
                <a href="#" class="readmore">
                  Read more{" "}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="row counters">
          <div class="col-lg-3 col-6 text-center">
            <span data-toggle="counter-up">27,400</span>
            <p>Customers to date</p>
          </div>

          <div class="col-lg-3 col-6 text-center">
            <span data-toggle="counter-up">6</span>
            <p>Services Offered</p>
          </div>

          <div class="col-lg-3 col-6 text-center">
            <span data-toggle="counter-up">24/7</span>
            <p>Hours Of Support</p>
          </div>

          <div class="col-lg-3 col-6 text-center">
            <span data-toggle="counter-up">15</span>
            <p>Employees</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Whyus;
