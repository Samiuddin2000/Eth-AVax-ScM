import "./App.css";
import { useState, useEffect } from "react";
// import contractABI from "./contract/CoffeeDapp.json";
import { ethers } from "ethers";
import Home from "./components/Home";


function App() {
  const [account, setAccount] = useState("");
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contractInstance: null,
  });

  const ContractAddress = "0xc6e7DF5E7b4f2A278906862b61205850344D4e7d";
  const ABI =[
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_message",
          "type": "string"
        }
      ],
      "name": "buyCoffee",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getList",
      "outputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "orderAddress",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "timestamp",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "message",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "orderId",
              "type": "uint256"
            }
          ],
          "internalType": "struct CoffeeDapp.order[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "orderList",
      "outputs": [
        {
          "internalType": "address",
          "name": "orderAddress",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "timestamp",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "message",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "orderId",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ];

  useEffect(() => {
    const connectWallet = async () => {
      try {
        if (window.ethereum) {
          const Account = await window.ethereum.request({
            method: "eth_requestAccounts",
          });
          setAccount(Account);

          const provider = new ethers.providers.Web3Provider(window.ethereum);
          const signer = provider.getSigner();
          const ContractInstance = new ethers.Contract(
            ContractAddress,
            ABI,
            signer
          );

          
          setState({
            provider: provider,
            signer: signer,
            contractInstance: ContractInstance,
          });
        }
      } catch (error) {
        console.log(error);
      }
    };

    connectWallet();
  }, []);

  return (
    <div >
      <h1>
        Account address: {account}
      </h1>
      <Home state={state} />
     
     
    </div>
  );
}

export default App;