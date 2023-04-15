const doSleep = false;
const sleepTime = 3000;

function sleep(ms) {
  console.log(`\nSleeping for ${ms}ms...\n`);
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
  const accounts = await hre.ethers.getSigners();
  const deployer = accounts[0];

  const admin = deployer.address;
  const baseURI = 'https://example.com/';

  const sampleNFT = await hre.mbDeployer.deployProxy(deployer, 'SampleNFT', [admin, baseURI], {
    /**
     * Overwrite the default address label. If set and a duplicate is found,
     * the address is instead updated (or returned with an error, chosen by global setting `allowUpdateAddress`).
     *
     *   The auto-generated address label is never a duplicate.
     */
    addressLabel: 'sample_nft',
    /**
     * Overwrite the default contractLabel. If set and a duplicate is found,
     * the contract is assigned a newer version.
     */
    contractLabel: 'sample_nft',

    /**
     * Version override. Will fail if another binary with the same version is found.
     */
    // contractVersion: '1.0',

    /**
     * Override the default deploy transaction arguments
     * (gasLimit, gasPrice, etc)
     **/
    // overrides: { gasPrice: 2000000000, gasLimit: 2000000 },

    /**
     * The block to start syncing the contract from.
     *
     * empty string: disable the MultiBaas Event Monitor
     *  0: sync from the first block
     * <0: sync from this number of blocks prior to the current block
     * >0: sync from a specific block number
     *
     * Defaults to -100, or 100 blocks prior to the current block.
     **/
    // startingBlock: '10',
  });

  console.log(`Deployed SampleNFT.sol to ${sampleNFT.mbAddress.address}`);

  if (doSleep) await sleep(sleepTime);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
