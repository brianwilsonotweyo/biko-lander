import React from "react";

function Footer() {
  return (
    <footer id="footer">
      <div class="footer-top">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-md-6 footer-info">
              <h3>BIKO</h3>
              <p>
                Biko group offers the suite of services and products that range
                from Furniture, Real Estate, Financial Solutions,Tours and Car
                Leasing.
              </p>
            </div>

            <div class="col-lg-2 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Terms of service</a>
                </li>
                <li>
                  <a href="#">Privacy policy</a>
                </li>
              </ul>
            </div>

            <div class="col-lg-3 col-md-6 footer-contact">
              <h4>Contact Us</h4>
              <p>
                123 Fifth Avenue,
                <br />
                Kampala
                <br />
                Uganda <br />
                <strong>Phone:</strong> +256 800-123-456
                <br />
                <strong>Email:</strong> info@biko.com
                <br />
              </p>

              <div class="social-links">
                <a href="#" class="twitter">
                  <i class="fa fa-twitter"></i>
                </a>
                <a href="#" class="facebook">
                  <i class="fa fa-facebook"></i>
                </a>
                <a href="#" class="instagram">
                  <i class="fa fa-instagram"></i>
                </a>
                <a href="#" class="google-plus">
                  <i class="fa fa-google-plus"></i>
                </a>
                <a href="#" class="linkedin">
                  <i class="fa fa-linkedin"></i>
                </a>
              </div>
            </div>

            <div class="col-lg-3 col-md-6 footer-newsletter">
              <h4>Our Newsletter</h4>
              <p>
                Signup to our weekly newsletter to get access to discounts on
                upcoming products and services as well as get weekly briefs on
                our product features.
              </p>
              <form action="" method="post">
                <input type="email" name="email" />
                <input type="submit" value="Subscribe" />
              </form>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="copyright">
          &copy; Copyright <strong>BIKO</strong>. All Rights Reserved
        </div>
        <div class="credits">
          Designed by <a href="https://theclan.com/">theclan😋</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
