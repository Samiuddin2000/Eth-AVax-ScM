# Eth-AVax-ScM

# CoffeeDapp

CoffeeDapp is a decentralized application (DApp) built on the Ethereum blockchain using Solidity and React.js.

## Smart Contract

The CoffeeDapp smart contract is implemented in Solidity and can be found in the `CoffeeDapp.sol` file. The contract allows users to buy coffee by sending a payment along with a message. The contract keeps track of the total number of orders and maintains a list of all orders.

### Contract Functions

#### `buyCoffee`

The `buyCoffee` function allows users to buy coffee by sending a payment. The function takes a string parameter `_message` which represents the message associated with the order. The payment sent must be greater than zero. The function creates a new order with the sender's address, the current timestamp, the provided message, and a unique order ID.

#### `getList`

The `getList` function returns an array of all orders stored in the contract.

## Development Environment

To set up the development environment for CoffeeDapp, follow these steps:

1. Install Node.js and npm if they are not already installed on your machine.
2. Clone the repository and navigate to the project's root directory.
3. Install the required dependencies by running the following command:
   ```shell
   npm install   
4. Compile the Solidity smart contract using Hardhat by running the following command :
    ```shell
   npx hardhat compile
5.Deploy the smart contract to a local or test network using Hardhat. Update the deployment configuration in the hardhat.config.js file if necessary.

6.Start the React.js frontend by running the following command:

    
    npm start
    
This will launch the CoffeeDapp in your browser.
## Contributing
Contributions to CoffeeDapp are welcome! If you have any ideas, suggestions, or bug reports, please open an issue or submit a pull request on the GitHub repository.

# License
CoffeeDapp is licensed under the MIT License.



 

