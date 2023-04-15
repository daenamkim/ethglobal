// Copyright (c) 2023 Curvegrid Inc.

// Copy and rename this file with the network name (development, test, staging, production) in
// place of "template", as appropriate. For example: deployment-config.staging.js
// DO NOT check credentials into source control.

const config = {
  // Private key of the deployer account, beginning with 0x
  deployerPrivateKey: '<DEPLOYER PRIVATE KEY>',

  // Full URL such as https://abc123.multibaas.com,
  // or just 'development' to access http://localhost:8080
  deploymentEndpoint: '<MULTIBAAS DEPLOYMENT FULL URL>',

  // 3rd party web3 endpoint (Infura, Chainstack, etc.)
  // BSC Testnet sample URL: https://data-seed-prebsc-1-s1.binance.org:8545/
  // BSC Mainnet sample URL: https://bsc-dataseed.binance.org/
  web3Endpoint: '<WEB3 ENDPOINT FULL URL>',

  // API key to access MultiBaas from deployer
  // Note that the API key MUST be part of the "Administrators" group
  // Create one on MultiBaas via navigation bar > Admin > API Keys
  apiKey: '<MULTIBAAS API KEY>',

  // The chain ID of the blockchain network
  // For example: Curvegrid test network = 2017072401, Ethereum Mainnet = 1, BSC Testnet = 97, BSC Mainnet = 56
  // Only required if not specified in hardhat.config.js
  ethChainID: 2017072401,
};

module.exports = {
  config: config,
};
