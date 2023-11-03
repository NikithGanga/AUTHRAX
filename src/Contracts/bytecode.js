const bytecode = 
        "608060405234801561000f575f80fd5b50610dd88061001d5f395ff3fe608060405234801561000f575f80fd5b5060043610610085575f3560e01c8063671d008611610058578063671d00861461010c5780637b1d0c831461013e578063c37b23ee1461016b578063e9be02251461019c575f80fd5b8063085539401461008957806313c53776146100b357806334c3ec3f146100c85780633a484f92146100f9575b5f80fd5b61009c6100973660046108c9565b6101be565b6040516100aa92919061093d565b60405180910390f35b6100c66100c13660046108c9565b6105a8565b005b6100c66100d6366004610a41565b6001600160a01b03165f908152600260205260409020805460ff19166001179055565b6100c6610107366004610afe565b610651565b61012e61011a366004610a41565b60036020525f908152604090205460ff1681565b60405190151581526020016100aa565b61012e61014c3660046108c9565b600160209081525f928352604080842090915290825290205460ff1681565b6100c6610179366004610a41565b6001600160a01b03165f908152600360205260409020805460ff19166001179055565b61012e6101aa366004610a41565b60026020525f908152604090205460ff1681565b5f602052815f5260405f20602052805f5260405f205f9150915050805f016040518060400160405290815f820180546101f690610c5e565b80601f016020809104026020016040519081016040528092919081815260200182805461022290610c5e565b801561026d5780601f106102445761010080835404028352916020019161026d565b820191905f5260205f20905b81548152906001019060200180831161025057829003601f168201915b5050509183525050600191909101546001600160a01b03908116602092830152604080516101408101909152600285018054909216815260038501805494959491938401916102bb90610c5e565b80601f01602080910402602001604051908101604052809291908181526020018280546102e790610c5e565b80156103325780601f1061030957610100808354040283529160200191610332565b820191905f5260205f20905b81548152906001019060200180831161031557829003601f168201915b5050505050815260200160028201805461034b90610c5e565b80601f016020809104026020016040519081016040528092919081815260200182805461037790610c5e565b80156103c25780601f10610399576101008083540402835291602001916103c2565b820191905f5260205f20905b8154815290600101906020018083116103a557829003601f168201915b5050505050815260200160038201548152602001600482015481526020016005820180546103ef90610c5e565b80601f016020809104026020016040519081016040528092919081815260200182805461041b90610c5e565b80156104665780601f1061043d57610100808354040283529160200191610466565b820191905f5260205f20905b81548152906001019060200180831161044957829003601f168201915b5050505050815260200160068201805461047f90610c5e565b80601f01602080910402602001604051908101604052809291908181526020018280546104ab90610c5e565b80156104f65780601f106104cd576101008083540402835291602001916104f6565b820191905f5260205f20905b8154815290600101906020018083116104d957829003601f168201915b505050505081526020016007820154815260200160088201805461051990610c5e565b80601f016020809104026020016040519081016040528092919081815260200182805461054590610c5e565b80156105905780601f1061056757610100808354040283529160200191610590565b820191905f5260205f20905b81548152906001019060200180831161057357829003601f168201915b50505050508152602001600982015481525050905082565b6001600160a01b038083165f9081526001602090815260408083209385168352929052205460ff166106215760405162461bcd60e51b815260206004820152601860248201527f456d706c6f796565206973206e6f7420656d706c6f796564000000000000000060448201526064015b60405180910390fd5b6001600160a01b039182165f9081526001602090815260408083209390941682529190915220805460ff19169055565b6001600160a01b038b165f9081526002602052604090205460ff16801561068f57506001600160a01b038a165f9081526003602052604090205460ff165b6106db5760405162461bcd60e51b815260206004820152601b60248201527f426f74682070617274696573206e65656420746f2061677265652e00000000006044820152606401610618565b5f805f8d6001600160a01b03166001600160a01b031681526020019081526020015f205f8c6001600160a01b03166001600160a01b031681526020019081526020015f20905060405180604001604052808e81526020018d6001600160a01b0316815250815f015f820151815f0190816107559190610ce2565b50602091820151600190910180546001600160a01b039283166001600160a01b0319918216179091556040805161014081018252928f168084529383018e905282018c9052606082018b9052608082018a905260a0820189905260c0820188905260e0820187905261010082018690526101208201859052600284018054909116909217825590600383016107ea8d82610ce2565b50604082015160028201906107ff9082610ce2565b50606082015160038201556080820151600482015560a082015160058201906108289082610ce2565b5060c0820151600682019061083d9082610ce2565b5060e08201516007820155610100820151600882019061085d9082610ce2565b5061012091909101516009909101555050506001600160a01b039889165f9081526001602081815260408084209b909c1683529990995298909820805460ff19169097179096555050505050505050565b80356001600160a01b03811681146108c4575f80fd5b919050565b5f80604083850312156108da575f80fd5b6108e3836108ae565b91506108f1602084016108ae565b90509250929050565b5f81518084525f5b8181101561091e57602081850181015186830182015201610902565b505f602082860101526020601f19601f83011685010191505092915050565b604081525f835160408084015261095760808401826108fa565b905060018060a01b03602086015116606084015282810360208401526101406109898286516001600160a01b03169052565b60208501518160208401526109a0828401826108fa565b915050604085015182820360408401526109ba82826108fa565b915050606085015160608301526080850151608083015260a085015182820360a08401526109e882826108fa565b91505060c085015182820360c0840152610a0282826108fa565b91505060e085015160e08301526101008086015183830382850152610a2783826108fa565b610120978801519490970193909352509395945050505050565b5f60208284031215610a51575f80fd5b610a5a826108ae565b9392505050565b634e487b7160e01b5f52604160045260245ffd5b5f82601f830112610a84575f80fd5b813567ffffffffffffffff80821115610a9f57610a9f610a61565b604051601f8301601f19908116603f01168101908282118183101715610ac757610ac7610a61565b81604052838152866020858801011115610adf575f80fd5b836020870160208301375f602085830101528094505050505092915050565b5f805f805f805f805f805f806101808d8f031215610b1a575f80fd5b67ffffffffffffffff8d351115610b2f575f80fd5b610b3c8e8e358f01610a75565b9b50610b4a60208e016108ae565b9a50610b5860408e016108ae565b995067ffffffffffffffff60608e01351115610b72575f80fd5b610b828e60608f01358f01610a75565b985067ffffffffffffffff60808e01351115610b9c575f80fd5b610bac8e60808f01358f01610a75565b975060a08d0135965060c08d0135955067ffffffffffffffff60e08e01351115610bd4575f80fd5b610be48e60e08f01358f01610a75565b945067ffffffffffffffff6101008e01351115610bff575f80fd5b610c108e6101008f01358f01610a75565b93506101208d0135925067ffffffffffffffff6101408e01351115610c33575f80fd5b610c448e6101408f01358f01610a75565b91506101608d013590509295989b509295989b509295989b565b600181811c90821680610c7257607f821691505b602082108103610c9057634e487b7160e01b5f52602260045260245ffd5b50919050565b601f821115610cdd57805f5260205f20601f840160051c81016020851015610cbb5750805b601f840160051c820191505b81811015610cda575f8155600101610cc7565b50505b505050565b815167ffffffffffffffff811115610cfc57610cfc610a61565b610d1081610d0a8454610c5e565b84610c96565b602080601f831160018114610d43575f8415610d2c5750858301515b5f19600386901b1c1916600185901b178555610d9a565b5f85815260208120601f198616915b82811015610d7157888601518255948401946001909101908401610d52565b5085821015610d8e57878501515f19600388901b60f8161c191681555b505060018460011b0185555b50505050505056fea26469706673582212201b61ac80384cf52d2fd9953889ef39ba0d4190d9598d035f737934d11fb15e3364736f6c63430008160033";

export default bytecode