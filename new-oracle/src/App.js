import logo from './logo.svg';
import './App.css';
import Web3 from 'web3';


function App() {
 
 async function clickHandler(e) {
 e.preventDefault(); 
 let web3Provider = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8545"));
 web3Provider.eth.getAccounts((error,result) => {
  console.log("Address", result);
 });

 let result = await fetch("http://localhost:8000/");
 
 let stock = {};
 let json = await result.json();
 console.log(`Price: ${json.price}`);
 console.log(`Volume: ${json.volume}`);
 console.log(json);
console.log(typeof(parseInt(json.price)))

 let abi = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "bytes4",
				"name": "symbol",
				"type": "bytes4"
			}
		],
		"name": "getStockPrice",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes4",
				"name": "symbol",
				"type": "bytes4"
			}
		],
		"name": "getStockVolume",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes4",
				"name": "symbol",
				"type": "bytes4"
			},
			{
				"internalType": "uint256",
				"name": "price",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "volume",
				"type": "uint256"
			}
		],
		"name": "setStock",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];
 

 let ownerAddress = "0x1a9dE7C352ca0B2AA43D2EC2e2D7a2f79909F6aB";
 let contractAddress = "0x9953De7cF4306FdaF7A2e45f593a6d411CBDe35a";
 let contractInstance = new web3Provider.eth.Contract(abi, contractAddress);

 contractInstance.methods.getStockPrice("0x41424344").send({from: ownerAddress}).then( output => {
  console.log("get stock price", output);
});
  contractInstance.methods.getStockVolume("0x41424344").send({from: ownerAddress}).then( output => {
  console.log("get stock volume", output);
 });

 contractInstance.methods.setStock("0x41424344",parseInt(json.price),parseInt(json.volume)).send({from: ownerAddress}).then( output => {
  console.log("set stock", output);
 });
}
 
 return (
 
 <div className="value">
 <button onClick={clickHandler}> Click me! </button>
 </div>
 );
}
 
export default App;