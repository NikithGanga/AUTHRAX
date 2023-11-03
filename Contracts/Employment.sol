// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

contract Employment {

    struct PersonalDetails {
        string employeeName;
        address employeeAddress;
    }

    struct EmploymentContractDetails {
        address employerAddress;
        string employerName;
        string employmentType;
        uint256 employmentStartDate;
        uint256 employmentEndDate;
        string workLocation;
        string position;
        uint256 salary;
        string workingHours;
        uint256 noticePeriod;
    }

    struct EmploymentDetails {
        PersonalDetails personal;
        EmploymentContractDetails employmentContract;
    }

    mapping (address => mapping(address => EmploymentDetails)) public employmentContract;
    mapping (address => mapping(address => bool)) public isEmployed;
    mapping (address => bool) public employeeAgree;
    mapping (address => bool) public employerAgree;

    function employeeAgrees (address _employeeAddress) public {
        employeeAgree[_employeeAddress] = true;
    }

    function employerAgrees (address _employerAddress) public {
        employerAgree[_employerAddress] = true;
    }
    

    // Function to create and store an employment contract
    function createContract(
        string memory _employeeName,
        address _employeeAddress,
        address _employerAddress,
        string memory _employerName,
        string memory _employmentType,
        uint256 _employmentStartDate,
        uint256 _employmentEndDate,
        string memory _workLocation,
        string memory _position,
        uint256 _salary,
        string memory _workingHours,
        uint256 _noticePeriod
    ) public {
        require(employeeAgree[_employeeAddress] && employerAgree[_employerAddress], "Both parties need to agree.");
        EmploymentDetails storage newContract = employmentContract[_employeeAddress][_employerAddress];
        newContract.personal = PersonalDetails(_employeeName, _employeeAddress);
        newContract.employmentContract = EmploymentContractDetails(
            _employerAddress, 
            _employerName, 
            _employmentType, 
            _employmentStartDate, 
            _employmentEndDate, 
            _workLocation, 
            _position, 
            _salary, 
            _workingHours, 
            _noticePeriod
        );
        isEmployed[_employeeAddress][_employerAddress] = true;
    }

    // Function to terminate an employment contract
    function terminateContract(address _employeeAddress, address _employerAddress) public {
        require(isEmployed[_employeeAddress][_employerAddress], "Employee is not employed");
        isEmployed[_employeeAddress][_employerAddress] = false;
    }
}
