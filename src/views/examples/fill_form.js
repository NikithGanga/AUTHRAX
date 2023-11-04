import React, { useState } from "react";
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

import walletConnectFcn from "../../Hedera/walletConnect.js";
import contractDeployFcn from "../../Hedera/contractDeploy.js";
import contractExecuteTermsEmployerFcn from "../../Hedera/termsAgreeEmployer.js"
import contractExecuteTermsEmployeeFcn from "../../Hedera/termsAgreeEmployee.js"

export default function FillFormPage() {

  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [collapseOut, setCollapseOut] = React.useState("");
  const [color, setColor] = React.useState("navbar-transparent");

  const [walletData, setWalletData] = useState();
	const [account, setAccount] = useState();
	const [network, setNetwork] = useState();
	const [contractAddress, setContractAddress] = useState();

	const [connectTextSt, setConnectTextSt] = useState("🔌 Connect here...");
	const [contractTextSt, setContractTextSt] = useState();
	const [executeTextSt, setExecuteTextSt] = useState();

	const [connectLinkSt, setConnectLinkSt] = useState("");
	const [contractLinkSt, setContractLinkSt] = useState();
	const [executeLinkSt, setExecuteLinkSt] = useState();

  async function connectWallet() {
		if (account !== undefined) {
			setConnectTextSt(`🔌 Account ${account} already connected ⚡ ✅`);
		} else {
			const wData = await walletConnectFcn();

			let newAccount = wData[0];
			let newNetwork = wData[2];
			if (newAccount !== undefined) {
				setConnectTextSt(`🔌 Account ${newAccount} connected ⚡ ✅`);
				setConnectLinkSt(`https://hashscan.io/${newNetwork}/account/${newAccount}`);

				setWalletData(wData);
				setAccount(newAccount);
				setNetwork(newNetwork);
				setContractTextSt();
        console.log()
			}
		}
	}

  async function contractDeploy() {
		if (account === undefined) {
			setContractTextSt("🛑 Connect a wallet first! 🛑");
		} else {
      // console.log(contractDeployFcn(walletData))
			const cAddress = await contractDeployFcn(walletData);
      console.log(cAddress);
      
			if (cAddress === undefined) {
			} else {
				setContractAddress(cAddress);
				setContractTextSt(`Contract ${cAddress} deployed ✅`);
				setExecuteTextSt(``);
				setContractLinkSt(`https://hashscan.io/${network}/address/${cAddress}`);
			}
		}
	}

  async function contractExecuteEmployerFcn() {
		if (contractAddress === undefined) {
			// setExecuteTextSt("🛑 Deploy a contract first! 🛑");
      console.log("🛑 Deploy a contract first! 🛑");
		} else {
			const [txHash] = await contractExecuteTermsEmployerFcn(walletData, contractAddress);
      console.log(txHash);

			if (txHash === undefined) {
			} else {
				setExecuteTextSt(txHash);
				setExecuteLinkSt(`https://hashscan.io/${network}/tx/${txHash}`);
			}
		}
	}

  async function contractExecuteEmployeeFcn() {
		if (contractAddress === undefined) {
			// setExecuteTextSt("🛑 Deploy a contract first! 🛑");
      console.log("🛑 Deploy a contract first! 🛑");
		} else {
			const [txHash] = await contractExecuteTermsEmployeeFcn(walletData, contractAddress);
      console.log(txHash);

			if (txHash === undefined) {
			} else {
				setExecuteTextSt(txHash);
				setExecuteLinkSt(`https://hashscan.io/${network}/tx/${txHash}`);
			}
		}
	}

  const [formValues, setFormValues] = useState({
    EmployeeName: "",
    EmployeeAddress: "",
    EmployerName: "",
    EmployerAddress: "",
    EmploymentType: "",
    WorkLocation: "",
    StartDate: "",
    EndDate: "",
    Position: "",
    Salary: "",
    WorkingHours: "",
    NoticePeriod: "",
  });

  const [contractText, setContractText] = useState(""); // State for the contract preview

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  

  const previewContract = () => {
    // Generate the contract preview using template literals
    const preview = `
This contract is entered into between ${formValues.EmployerName} and ${formValues.EmployeeName}. 
The Employee will hold the position of ${formValues.Position} under the terms of this agreement. 
The type of employment is ${formValues.EmploymentType}, with the work location being ${formValues.WorkLocation}. 
The employment is set to begin on ${formValues.StartDate} and is expected to conclude on ${formValues.EndDate}.
    
The compensation for the Employee's services will be a salary of ${formValues.Salary} per [hour/annum], 
with a working schedule of ${formValues.WorkingHours} per week. 
The notice period for termination is ${formValues.NoticePeriod}. 
Both parties agree that a written notice of ${formValues.NoticePeriod} will be given if the employment relationship is to be terminated.

The Employee affirms their legal authorization to work in ${formValues.WorkLocation} and agrees to comply with all relevant employment laws. 
This contract is subject to the laws of [state, province or territory]. 
In witness and agreement, both parties have signed this contract.
`;

    setContractText(preview); // Update the contract preview state
  }

  const handleButtonClick = () => {
    // Call the functions you want to run
    previewContract();
    connectWallet();
  };

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
                {/* Form input fields with name attributes */}

                <Row>
                  <Col md="6">
                    <FormGroup>
                      <label>Employee Name</label>
                      <Input type="text" name="EmployeeName" onChange={handleInputChange} />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <label>Employee Address</label>
                      <Input type="text" name="EmployeeAddress" onChange={handleInputChange} />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md="6">
                    <FormGroup>
                      <label>Employer Name</label>
                      <Input type="text" name="EmployerName" onChange={handleInputChange} />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <label>Employer Address</label>
                      <Input type="text" name="EmployerAddress" onChange={handleInputChange} />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md="6">
                    <FormGroup>
                      <label>Employment Type</label>
                      <Input type="text" name="EmploymentType" onChange={handleInputChange} />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <label>Work Location</label>
                      <Input type="text" name="WorkLocation" onChange={handleInputChange} />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md="6">
                    <FormGroup>
                      <label>Employment Start Date</label>
                      <Input type="date" name="StartDate" onChange={handleInputChange} />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <label>Employment End Date</label>
                      <Input type="date" name="EndDate" onChange={handleInputChange} />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md="6">
                    <FormGroup>
                      <label>Position</label>
                      <Input type="text" name="Position" onChange={handleInputChange} />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <label>Salary</label>
                      <Input type="text" name="Salary" onChange={handleInputChange} />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md="6">
                    <FormGroup>
                      <label>Working Hours</label>
                      <Input type="text" name="WorkingHours" onChange={handleInputChange} />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <label>Notice Period</label>
                      <Input type="text" name="NoticePeriod" onChange={handleInputChange} />
                    </FormGroup>
                  </Col>
                </Row>

                <Button
                  className="btn-round float-right"
                  color="primary"
                  data-placement="right"
                  id="tooltip341148792"
                  type="button"
                  onClick={contractDeploy}
                >
                  
                  Deploy
                </Button>
                <Button
                  className="btn-round float-right"
                  color="primary"
                  data-placement="right"
                  id="tooltip341148792"
                  type="button"
                  onClick={handleButtonClick}
                >
                  Submit
                </Button>
                <UncontrolledTooltip
                  delay={0}
                  placement="right"
                  target="tooltip341148792"
                >
                  Click here to preview the contract
                </UncontrolledTooltip>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <h2>Employment Contract</h2>
      <p>{contractText}
      <br/> <br/> <br/>
      <Button
                   className="btn-round float-left" 
                  color="primary"
                  data-placement="right"
                  id="tooltip341148792"
                  type="button"
                  onClick={contractExecuteEmployeeFcn}
                >
                  Employee Signature
                </Button>
                <Button
                   className="btn-round float-right" 
                  color="primary"
                  data-placement="right"
                  id="tooltip341148792"
                  type="submit"
                  onClick={contractExecuteEmployerFcn}
                >
                  Employer Signature
                </Button>
                
      </p> {/* Display the contract preview */}
    </div>
  );
}
