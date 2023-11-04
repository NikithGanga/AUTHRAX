import abi from "../Contracts/abi.js";
import bytecode from "../Contracts/bytecode.js";
import { ContractFactory } from "ethers";

async function contractDeployFcn(walletData) {
	console.log(`\n=======================================`);
	console.log(`- Deploying smart contract on Hedera...🟠`);

	// ETHERS PROVIDER AND SIGNER
	const provider = await walletData[1];
	const signer = await provider.getSigner();

	// DEPLOY SMART CONTRACT
	let contractAddress;
	try {
		const gasLimit = 4000000;

		const myContract = new ContractFactory(abi, bytecode, signer);
		const contractDeployTx = await myContract.deploy({ gasLimit: gasLimit });
		console.log(contractDeployTx);
		const contractDeployRx = await contractDeployTx.waitForDeployment();
		console.log(contractDeployRx)
		contractAddress = contractDeployRx.target;
		console.log(`- Contract deployed to address: \n${contractAddress} ✅`);
	} catch (deployError) {
		console.log(`- ${deployError.message.toString()}`);
	}
	return contractAddress;
}
export default contractDeployFcn;