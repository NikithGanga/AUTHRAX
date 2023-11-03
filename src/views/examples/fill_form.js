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

import abi from "../../Contracts/abi.js";
// import axios from "axios";
import { ethers } from "ethers";

const delay = (ms) => new Promise((res) => setTimeout(res, ms));



  async function contractExecuteFcn(walletData, contractAddress) {
    console.log(`\n=======================================`);
    console.log(`- Executing the smart contract...🟠`);
  
    // ETHERS PROVIDER AND SIGNER
    const provider = walletData[1];
    const signer = provider.getSigner();
  
    // EXECUTE THE SMART CONTRACT
    let txHash;
    try {
      // CHECK SMART CONTRACT STATE


  
      // EXECUTE CONTRACT FUNCTION
      const gasLimit = 100000;
      const myContract = new ethers.Contract(contractAddress, abi, signer);
      const createTx = await myContract.createContract( "0x7a318445c3Fd0b7d247e495B005a0dc63405c17B", { gasLimit: gasLimit });
      const createRx = await createTx.wait();
      txHash = createRx.transactionHash;
  
      // CHECK SMART CONTRACT STATE AGAIN
      await delay(5000); // DELAY TO ALLOW MIRROR NODES TO UPDATE BEFORE QUERYING
  
      console.log(`- Contract executed. Transaction hash: \n${txHash} ✅`);
    } catch (executeError) {
      console.log(`- ${executeError.message.toString()}`);
    }
  
    return [txHash];

    return (
      <div>
        <Row>
          <Col>
            <Card className="card-plain">
              <CardHeader>
                <h5 className="text-on-back">Fill the Form</h5>
                <h1 className="profile-title text-left">Employee contract</h1>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <label>Employer Name</label>
                        <Input type="text" />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <label>Employee Address</label>
                        <Input type="text" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <label>Employment Type</label>
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
                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <label>Employment Start Date</label>
                        <Input type="date" />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <label>Employment End Date</label>
                        <Input type="date" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <label>Position</label>
                        <Input type="text" />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <label>Salary</label>
                        <Input type="text" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <label>Working Hours</label>
                        <Input type="text" />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <label>Notice Period</label>
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
                    Click here to submit the contract
                  </UncontrolledTooltip>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }

  

  export default contractExecuteFcn;