import React, { useState, useEffect } from "react";
import classnames from "classnames";
import PerfectScrollbar from "perfect-scrollbar";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Table,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
} from "reactstrap";
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import Footer from "components/Footer/Footer.js";


let ps = null;

const lawyers = [
  {
    url :"assets/img/lawyer-1.jpg",
    name: "John Doe",
    about: "John Doe is a dedicated legal professional committed to advocating for justice and providing personalized legal solutions to clients.",
    cases: "John Doe has a successful track record in criminal defense, personal injury, family law, contract negotiations, real estate transactions, and intellectual property disputes.",
    rating: "John Doe consistently receives high ratings, including an Avvo Rating of 4.9/5, Martindale-Hubbell Rating of AV Preeminent, and positive client and peer reviews.",
  },
  {
    name: "Sarah Smith",
    about: "Sarah Smith is a skilled attorney known for her expertise in civil litigation, contract law, and business consultancy.",
    cases: "Sarah Smith has successfully represented clients in complex business disputes, contract negotiations, intellectual property matters, and employment law cases.",
    rating: "Sarah Smith is highly regarded, with a 5-star client rating, recognition as a Top Attorney in the field, and a reputation for providing practical legal solutions.",
  },
  {
    name: "Michael Johnson",
    about: "Michael Johnson is an experienced lawyer specializing in criminal law, immigration, and civil rights cases.",
    cases: "Michael Johnson has a proven track record in defending clients in criminal trials, handling immigration matters, and advocating for civil rights.",
    rating: "Michael Johnson has received accolades for his commitment to justice, earning recognition as a Rising Star in the legal community and consistently positive reviews from clients.",
  },
  // Add more lawyers if needed
];

export default function ProfilePage() {
  const [tabs, setTabs] = useState(0);

  useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      document.documentElement.className += " perfect-scrollbar-on";
      document.documentElement.classList.remove("perfect-scrollbar-off");
      let tables = document.querySelectorAll(".table-responsive");
      for (let i = 0; i < tables.length; i++) {
        ps = new PerfectScrollbar(tables[i]);
      }
    }
    document.body.classList.toggle("profile-page");

    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
        document.documentElement.className += " perfect-scrollbar-off";
        document.documentElement.classList.remove("perfect-scrollbar-on");
      }
      document.body.classList.toggle("profile-page");
    };
  }, []);

  const generateLawyerCards = () => {
    const cards = [];

    for (let i = 0; i < 3; i += 3) {
      const row = (
        <Row key={i} className="mt-4">
          {lawyers.slice(i, i + 3).map((lawyer, index) => (
            <Col key={index} className="ml-auto mr-auto" lg="4" md="4">
              <Card className="card-coin card-plain">
                <CardHeader>
                  <img
                    alt="..."
                    className="img-center img-fluid rounded-circle"
                    src={require("assets/img/lawyer-1.jpg")} 
                  />
                  <h4 className="title">{lawyer.name}</h4>
                </CardHeader>
                <CardBody>
                  <Nav className="nav-tabs-primary justify-content-center" tabs>
                    <NavItem>
                      <NavLink
                        className={classnames({ active: tabs === 0 })}
                        onClick={(e) => {
                          e.preventDefault();
                          setTabs(0);
                        }}
                        href="#pablo"
                      >
                        About
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={classnames({ active: tabs === 1 })}
                        onClick={(e) => {
                          e.preventDefault();
                          setTabs(1);
                        }}
                        href="#pablo"
                      >
                        Cases
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={classnames({ active: tabs === 2 })}
                        onClick={(e) => {
                          e.preventDefault();
                          setTabs(2);
                        }}
                        href="#pablo"
                      >
                        Rating
                      </NavLink>
                    </NavItem>
                  </Nav>
                  <TabContent className="tab-subcategories" activeTab={`tab${tabs}`}>
                    <TabPane tabId="tab0">
                      <Table className="tablesorter" responsive>
                        {lawyer.about}
                      </Table>
                    </TabPane>
                    <TabPane tabId="tab1">
                      <Table className="tablesorter" responsive>
                        {lawyer.cases}
                      </Table>
                    </TabPane>
                    <TabPane tabId="tab2">
                      <Table className="tablesorter" responsive>
                        {lawyer.rating}
                      </Table>
                    </TabPane>
                  </TabContent>
                  <Button color="primary" href="/fill-form-lawer" rel="noopener noreferrer" target="_blank" data-mdb-target="#exampleModal">
                    Contact
                  </Button>


<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">...</div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-mdb-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      );
      cards.push(row);
    }

    return cards;
  };

  return (
    <>
      <ExamplesNavbar />
      <div className="wrapper">
        <div className="page-header">
          <img alt="..." className="dots" src={require("assets/img/dots.png")} />
          <img alt="..." className="path" src={require("assets/img/path4.png")} />
          <Container className="align-items-center">
            {generateLawyerCards()}
          </Container>
        </div>
      </div>
      <Footer />
    </>
  );
}
