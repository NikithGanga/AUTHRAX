import React from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

export default function FillFormPage() {
  return (
    <div>
      <Row>
        <Col>
          <Card className="card-plain">
            <CardHeader>
              <h5 className="text-on-back">Basic Details</h5>
              {/* <h1 className="profile-title text-left"></h1> */}
            </CardHeader>
            <CardBody>
              <Form>
                <Row>
                  <Col md="6">
                    <FormGroup>
                      <label>Name</label>
                      <Input type="text" />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <label>Phone Number</label>
                      <Input type="text" />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md="6">
                    <FormGroup>
                      <label>Email-id</label>
                      <Input type="text" />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <label>Work Location</label>
                      <Input type="text" />
                    </FormGroup>
                  </Col>
                </Row>
               
                <Button
                  className="btn-round float-right"
                  color="primary"
                  data-placement="right"
                  id="tooltip341148792"
                  type="button"
                >
                  Submit
                </Button>
                <UncontrolledTooltip
                  delay={0}
                  placement="right"
                  target="tooltip341148792"
                >
                  Click here to submit the form
                </UncontrolledTooltip>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
