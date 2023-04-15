const { expect } = require('chai');
const { ethers, upgrades } = require('hardhat');

let sampleNFT;

let signers;
let deployer;

beforeEach(async function () {
  signers = await ethers.getSigners();
  [deployer] = signers;

  const SampleNFT = await ethers.getContractFactory('SampleNFT');
  sampleNFT = await upgrades.deployProxy(SampleNFT, []);
  await sampleNFT.deployed();
});

describe('Sample NFT', function () {
  it('Should return the name and symbol', async function () {
    expect(await sampleNFT.name()).to.equal('Sample NFT');
    expect(await sampleNFT.symbol()).to.equal('SAMPLENFT');
  });
  it('Should allow admin to mint a token', async function () {
    const tokenId = 0;
    await expect(sampleNFT.safeMint(deployer.address, tokenId))
      .to.emit(sampleNFT, 'Transfer')
      .withArgs(ethers.constants.AddressZero, deployer.address, tokenId);
    expect(await sampleNFT.ownerOf(tokenId)).to.equal(deployer.address);
  });
});
