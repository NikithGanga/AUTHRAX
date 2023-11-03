import React from "react";
// react plugin used to create charts
import { Line } from "react-chartjs-2";
import { Link } from 'react-router-dom';

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  ListGroupItem,
  ListGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import Footer from "components/Footer/Footer.js";

import bigChartData from "variables/charts.js";

export default function LandingPage() {
  React.useEffect(() => {
    document.body.classList.toggle("landing-page");
    return function cleanup() {
      document.body.classList.toggle("landing-page");
    };
  }, []);
  return (
    <>
      <ExamplesNavbar />
      <div className="wrapper">
        <div className="page-header">
          <img
            alt="..."
            className="path"
            src={require("assets/img/blob.png")}
          />
          <img
            alt="..."
            className="path2"
            src={require("assets/img/path2.png")}
          />
          <img
            alt="..."
            className="shapes triangle"
            src={require("assets/img/triunghiuri.png")}
          />
          <img
            alt="..."
            className="shapes wave"
            src={require("assets/img/waves.png")}
          />
          <img
            alt="..."
            className="shapes squares"
            src={require("assets/img/patrat.png")}
          />
          <img
            alt="..."
            className="shapes circle"
            src={require("assets/img/cercuri.png")}
          />
        <section className="section section-lg section-coins">
          <img
            alt="..."
            className="path"
            src={require("assets/img/path3.png")}
          />
          <Container>
            <Row>
              <Col md="4">
                <hr className="line-info" />
                <h1>
                  Choose the contracts{" "}<span className="text-info">that fits your needs</span>
                </h1>
              </Col>
            </Row>
            <Row>
              <Col md="4">
                <Card className="card-coin card-plain">
                  <CardHeader>
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col className="text-center" md="12">
                        <h2 className="text-uppercase">Employment Contracts</h2>
                        <hr className="line-primary" />
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem md="4" >Agreements between employers and employees 
                        outlining terms and conditions of employment.</ListGroupItem>
                      </ListGroup>
                    </Row>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Link to="/fill-form">
                      <Button className="btn-simple" color="primary">
                        Get Contract
                      </Button>
                    </Link>
                  </CardFooter>

                </Card>
              </Col>

              <Col md="4">
                <Card className="card-coin card-plain">
                  <CardHeader>
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col className="text-center" md="12">
                        <h2 className="text-uppercase">Service <br/> Contracts</h2>
                        <hr className="line-primary" />
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem md="4" >Contracts that define the scope of services to be
                         provided and the terms of the service provider's work.</ListGroupItem>
                      </ListGroup>
                    </Row>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button className="btn-simple" color="primary">
                      Get Contract
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
          
              <Col md="4">
                <Card className="card-coin card-plain">
                  <CardHeader>
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col className="text-center" md="12">
                        <h2 className="text-uppercase">Sales <br/> Contracts</h2>
                        <hr className="line-primary" />
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem md="4" >Agreements that detail the sale of
                         goods or services, including price, delivery, and payment terms..</ListGroupItem>
                      </ListGroup>
                    </Row>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button className="btn-simple" color="primary">
                      Get Contract
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
        
        </div>
       
      </div>
      <Container>
            <Row>
              <Col md="4">
                <Card className="card-coin card-plain">
                  <CardHeader>
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col className="text-center" md="12">
                        <h2 className="text-uppercase">Lease<br/>  Agreements</h2>
                        <hr className="line-primary" />
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem md="4" >Legal documents that govern the rental of real property,
                         such as apartments or commercial spaces.</ListGroupItem>
                      </ListGroup>
                    </Row>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button className="btn-simple" color="primary">
                      Get Contract
                    </Button>
                  </CardFooter>
                </Card>
              </Col>

              <Col md="4">
                <Card className="card-coin card-plain">
                  <CardHeader>
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col className="text-center" md="12">
                        <h2 className="text-uppercase">Real Estate<br/>  Contracts</h2>
                        <hr className="line-primary" />
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem md="4" > Contracts used in real estate transactions, including sales 
                        contracts, leases, and purchase agreements</ListGroupItem>
                      </ListGroup>
                    </Row>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button className="btn-simple" color="primary">
                      Get Contract
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
          
              <Col md="4">
                <Card className="card-coin card-plain">
                  <CardHeader>
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col className="text-center" md="12">
                        <h2 className="text-uppercase">Partnership<br/>  Agreements</h2>
                        <hr className="line-primary" />
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem md="4" >Legal contracts that establish the terms of a 
                        business partnership, including responsibilities and profit-sharing.</ListGroupItem>
                      </ListGroup>
                    </Row>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button className="btn-simple" color="primary">
                      Get Contract
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
            
          </Container>

          <br/> <br/> 
                    <Footer />
    </>
  );
}
