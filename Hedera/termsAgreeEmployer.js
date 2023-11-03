import abi from "../Contracts/abi.js";
import axios from "axios";
import { ethers } from "ethers";

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

async function contractExecuteTermsEmployerFcn(walletData, contractAddress) {
	console.log(`\n=======================================`);
	console.log(`- Executing the smart contract...🟠`);

	// ETHERS PROVIDER AND SIGNER
	const provider = walletData[1];
	const signer = provider.getSigner();

	console.log(provider, signer);
	// EXECUTE THE SMART CONTRACT
	let txHash;
	try {
		// CHECK SMART CONTRACT STATE

		// EXECUTE CONTRACT FUNCTION
		const gasLimit = 100000;
		const myContract = new ethers.Contract(contractAddress, abi, signer);
		const createTx = await myContract.employerAgrees( "0xD38ef5e1cdFd4E49e57e43B21F6B7576E1861B16", { gasLimit: gasLimit });
		console.log(createTx);
		const createRx = await createTx.wait();
		console.log(createRx);
		txHash = createRx.transactionHash;

		// CHECK SMART CONTRACT STATE AGAIN
		await delay(5000); // DELAY TO ALLOW MIRROR NODES TO UPDATE BEFORE QUERYING

		console.log(`- Contract executed. Transaction hash: \n${txHash} ✅`);
	} catch (executeError) {
		console.log(`- ${executeError.message.toString()}`);
	}

	return [txHash];
}

export default contractExecuteTermsEmployerFcn;