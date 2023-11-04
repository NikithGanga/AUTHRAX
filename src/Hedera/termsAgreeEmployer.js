import abi from "../Contracts/abi.js";
// import axios from "axios";
import { ethers } from "ethers";

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

async function contractExecuteTermsEmployerFcn(walletData, contractAddress) {
	console.log(`\n=======================================`);
	console.log(`- Executing the smart contract...🟠`);

	// ETHERS PROVIDER AND SIGNER
	const provider = await walletData[1];
	const signer = await provider.getSigner();

	console.log(provider, signer);
	// EXECUTE THE SMART CONTRACT
	let txHash;
	try {
		// CHECK SMART CONTRACT STATE

		// EXECUTE CONTRACT FUNCTION
		const gasLimit = 100000;
		const myContract = new ethers.Contract(contractAddress, abi, signer);
		console.log(myContract);
		const createTx = await myContract.employerAgrees( "0x7a318445c3Fd0b7d247e495B005a0dc63405c17B", { gasLimit: gasLimit });
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