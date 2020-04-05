/** @format */

import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-6 institutionsFooter">
                <div className="footerTitle">
                  <div>Contact</div>
                </div>
                <div className="footerContent">
                  <div>
                    <i className="fa fa-map-marker"></i>
                    <span className="footerContentName">
                      Matuga Kampala Uganda
                    </span>
                  </div>
                </div>
                <div className="line"></div>
                <div className="footerContent">
                  <div>
                    <i className="fa fa-phone"></i>
                  </div>
                  <div>
                    <span className="footerContentName">0414670292</span>
                  </div>
                </div>
                <div className="line"></div>
                <div className="footerContent">
                  <div>
                    <i className="fa fa-envelope"></i>
                    <span className="footerContentName">greateducators@gmail.com</span>
                  </div>
                </div>
                <div className="line"></div>
              </div>
              <div className="col-md-6 institutionsFooter">
                <div className="footerTitle">
                  <div>More</div>
                </div>
                <div className="footerContent">
                  <div>
                    <i className="fa fa-home"></i>
                    <span className="footerContentName">Schools</span>
                  </div>
                </div>
                <div className="line"></div>
                <div className="footerContent">
                  <div>
                    <i className="fa fa-university"></i>
                  </div>
                  <div>
                    <span className="footerContentName">Universities</span>
                  </div>
                </div>
                <div className="line"></div>
                <div className="footerContent">
                  <div>
                    <i className="fa fa-graduation-cap"></i>
                    <span className="footerContentName">Doctorates</span>
                  </div>
                </div>
                <div className="line"></div>
              </div>
              <div className="col-md-12 social">
                <div className="icon">
                <div><i className="fa fa-facebook"></i></div>
                </div>
                <div>
                  <span className="">facebook</span>
                </div>
                <div className="icon">
                <div><i className="fa fa-twitter"></i></div>
                </div>
                <div>
                  <span className="">twitter</span>
                </div>
                <div className="icon">
                  <div><i className="fa fa-youtube"></i></div>
                </div>
                <div>youtube</div>
              </div>
            </div>
          </div>
          <div className="col-md-4 contactUs">
            <div>
              <div className="contactUsWidgetTitle"><div>Contact us</div></div>
              <div className="contactUsWidget">
                <input
                  type="text"
                  className="form-control"
                  placeholder="email"
                />
              </div>
              <div className="contactUsWidget">
                <textarea cols="25" rows="5" placeholder="message"></textarea>
              </div>
              <div className="contactUsWidget">
                <input
                  type="submit"
                  value="submit"
                  className="btn btn-primary"
                  style={{ width: "100%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
