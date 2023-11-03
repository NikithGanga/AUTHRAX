import React from "react";
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

export default function NucleoIcons() {
  return (
    <div className="section section-nucleo-icons">
      <img alt="..." className="path" src={require("assets/img/path3.png")} />
      <Container>
        <Row className="justify-content-center">
          <Col lg="8" md="12">
            <h2 className="title">Authrax</h2>
            <h4 className="description">
            Simplify the process of creating legal contracts with Authrax. Our intuitive platform
             empowers you to generate customized, legally sound contracts quickly and easily. Save time,
              reduce costs, and ensure compliance with our user-friendly tools. Welcome to a 
              hassle-free contract creation experience.
            </h4>
            <div className="btn-wrapper">
              <Button
                className="btn-round"
                color="primary"
                href="#"
                rel="noopener noreferrer"
                target="_blank"
              >
                Watch Video
              </Button>
            </div>
          </Col>
        </Row>
        <div className="blur-hover">
          <a href="/register-page">
            <div className="icons-container blur-item on-screen mt-5">
              {/* Center */}
              <i className="icon tim-icons icon-coins" />
              {/* Right 1 */}
              <i className="icon icon-sm tim-icons icon-spaceship" />
              <i className="icon icon-sm tim-icons icon-money-coins" />
              <i className="icon icon-sm tim-icons icon-link-72" />
              {/* Right 2 */}
              <i className="icon tim-icons icon-send" />
              <i className="icon tim-icons icon-mobile" />
              <i className="icon tim-icons icon-wifi" />
              {/* Left 1 */}
              <i className="icon icon-sm tim-icons icon-key-25" />
              <i className="icon icon-sm tim-icons icon-atom" />
              <i className="icon icon-sm tim-icons icon-satisfied" />
              {/* Left 2 */}
              <i className="icon tim-icons icon-gift-2" />
              <i className="icon tim-icons icon-tap-02" />
              <i className="icon tim-icons icon-wallet-43" />
            </div>
            <span className="blur-hidden h5 text-primary">
              Get started with Authrax
            </span>
          </a>
        </div>
        <div className="d-flex justify-content-center align-items-center">
              <Button
              className="btn-round"
              color="primary"
              href="/register-page"
              rel="noopener noreferrer"
              target="_blank"
            >
              Register here
            </Button>
        </div>

      </Container>
    </div>
  );
}
