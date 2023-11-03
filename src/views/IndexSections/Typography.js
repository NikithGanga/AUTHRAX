import React from "react";
// reactstrap components
import { Container, Row, Col } from "reactstrap";

export default function Typography() {
  return (
    <div className="section section-typo">
      <img alt="..." className="path" src={require("assets/img/path1.png")} />
      <img
        alt="..."
        className="path path1"
        src={require("assets/img/path3.png")}
      />
      <Container>
        <h1 className="title">Team Authrax</h1>
        <div className="space-50" />
        <div id="images">
          <Row className="d-flex justify-content-center mb-4">
          <Col sm="3" xs="6">
              <h3 className="d-block text-uppercase font-weight-bold mb-4">
                Nikith Ganga
              </h3>
              <img
                alt="..."
                className="img-fluid rounded-circle shadow"
                src={require("assets/img/nikith.jpeg")}
                style={{ width: "150px" }}
              />
            </Col>
            
            <Col sm="3" xs="6">
              <h3 className="d-block text-uppercase font-weight-bold mb-4">
              Shubham Soni
              </h3>
              <img
                alt="..."
                className="img-fluid rounded-circle shadow"
                src={require("assets/img/shubham.jpeg")}
                style={{ width: "150px" }}
              />
            </Col>
            <Col sm="3" xs="6">
              <h3 className="d-block text-uppercase font-weight-bold mb-4">
                Pranay
              </h3>
              <img
                alt="..."
                className="img-fluid rounded-circle shadow"
                src={require("assets/img/pranay.jpg")}
                style={{ width: "150px" }}
              />
            </Col>
          </Row>

          <Row className="d-flex justify-content-center mb-4">
          <Col sm="3" xs="6">
              <h3 className="d-block text-uppercase font-weight-bold mb-4">
                Nishitha
              </h3>
              <img
                alt="..."
                className="img-fluid rounded-circle shadow"
                src={require("assets/img/nishitha.jpeg")}
                style={{ width: "150px" }}
              />
            </Col>
            
            <Col sm="3" xs="6">
              <h3 className="d-block text-uppercase font-weight-bold mb-4">
                Akash Badadani
              </h3>
              <img
                alt="..."
                className="img-fluid rounded-circle shadow"
                src={require("assets/img/akash.jpeg")}
                style={{ width: "150px" }}
              />
            </Col>
            
          </Row>
        </div>
      </Container>
    </div>
  );
}
