# MultiBaas Sample Hardhat Project

This project is boilerplate for a Solidity smart contract project that will be deployed to MultiBaas. By setting up a project that uses Hardhat, the Hardhat MultiBaas Plugin, and Solidity Coverage, we have the foundation for an smart contract suite with robust test coverage and easy deployment.

# Requirements

This project requires node v16 `lts/gallium `. If you use `nvm`, it should automatically switch to the right version.

# Development

Start by writing smart contract in a `.sol` file in the `/contracts` folder.

To test the smart contract, add a `.test.js` or `.test.ts` file to the `/test` folder. Run the test via `yarn test`.

You may also confirm coverage via `yarn coverage`. For a detailed view of the code coverage, open the outputted `coverage/index.html` file in your browser.

# Deployment

When you're ready to upload your contract to MultiBaas, create a copy of the `deployment-config.template.js` file, and rename it to `deployment-config.template.js`, or `deployment-config.development.js`, or `deployment-config.testing.js`, or `deployment-config.staging.js`, or `deployment-config.production.js`. These environment names are defined in the `networks` variable of the `hardhat.config.js` file.

Fill in the required variables in the template.

In `package.json`, create a new entry in the `"scripts"` that sets the appropriate `HARDHAT_NETWORK` variable and runs the appropriate deploy script.

Executing this script will upload your smart contract to MultiBaas and deploy it to the blockchain.

# Hardhat usage


Also, since this is at its core a Hardhat project, you may try running some of the default tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/sample-script.js
npx hardhat help
```
