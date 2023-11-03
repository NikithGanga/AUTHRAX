const abi =
    [
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_employeeName",
                    "type": "string"
                },
                {
                    "internalType": "address",
                    "name": "_employeeAddress",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_employerAddress",
                    "type": "address"
                },
                {
                    "internalType": "string",
                    "name": "_employerName",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_employmentType",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "_employmentStartDate",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_employmentEndDate",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "_workLocation",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_position",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "_salary",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "_workingHours",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "_noticePeriod",
                    "type": "uint256"
                }
            ],
            "name": "createContract",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_employeeAddress",
                    "type": "address"
                }
            ],
            "name": "employeeAgrees",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_employerAddress",
                    "type": "address"
                }
            ],
            "name": "employerAgrees",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_employeeAddress",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_employerAddress",
                    "type": "address"
                }
            ],
            "name": "terminateContract",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "employeeAgree",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "employerAgree",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "employmentContract",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "string",
                            "name": "employeeName",
                            "type": "string"
                        },
                        {
                            "internalType": "address",
                            "name": "employeeAddress",
                            "type": "address"
                        }
                    ],
                    "internalType": "struct Employment.PersonalDetails",
                    "name": "personal",
                    "type": "tuple"
                },
                {
                    "components": [
                        {
                            "internalType": "address",
                            "name": "employerAddress",
                            "type": "address"
                        },
                        {
                            "internalType": "string",
                            "name": "employerName",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "employmentType",
                            "type": "string"
                        },
                        {
                            "internalType": "uint256",
                            "name": "employmentStartDate",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "employmentEndDate",
                            "type": "uint256"
                        },
                        {
                            "internalType": "string",
                            "name": "workLocation",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "position",
                            "type": "string"
                        },
                        {
                            "internalType": "uint256",
                            "name": "salary",
                            "type": "uint256"
                        },
                        {
                            "internalType": "string",
                            "name": "workingHours",
                            "type": "string"
                        },
                        {
                            "internalType": "uint256",
                            "name": "noticePeriod",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct Employment.EmploymentContractDetails",
                    "name": "employmentContract",
                    "type": "tuple"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "isEmployed",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ]

    export default abi;