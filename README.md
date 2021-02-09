# smartcontract-oracles-demo
a demonstration of blockchain oracles fetching data from outside into the blockchain using a simple stock smartcontract

# folder schema:
root folder = express app,
new-oracle = react app
Solidity-contract = smart contract file

This repository is a demo of oracles in blockchain. To set this up, we need the following apps and components set up:

# ganache for running a blockchain locally
both CLI and GUI are okay, what's important is the port number the ganache runs on the same port as the remix and the metamask. For this project, I am using http://127.0.0.1:8545

# express for fetching data from an api
express server running on port 8000 fetching data from a third party website. For this project, I have used: 
https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=IBM&apikey=demo
2 variables are fetched from this api: 05 price and 06 volume which will be used to manipulate the blockchain

# Stock smartcontract deployed via remix on Web3 with url http://127.0.0.1:8545 

# Metamask: import the ganache account in metamask to link the same. A tutorial for the same is given here:
https://medium.com/@kacharlabhargav21/using-ganache-with-remix-and-metamask-446fe5748ccf

# react app: start the react app



## Configuring changes as per local enviornment:
in the app.js file of react app. Update lines 94 and 95.

# What happens upon clicking the "Click here" option of the react app
1. values of price and volume are fetched from alphavantage.
2. getStockPrice and getStockVolume functions of the stock Smart contract are called to display memory 
3. setStock is called with the values of (1) as arguments.

