const { expect } = require("chai");
const { ethers } = require("hardhat");
const Wallet = require("ethereumjs-wallet");

const StringData = "some_text_string_to_pass_in";

describe("Decrypt samples", function () {
  let Decrypt, SigWallet, SigWallet_PrivateKey, hash, SigObject, SigWallet_recovered, res;
  beforeEach(async () => {
    [deployer, Alice] = await ethers.getSigners();

    const wallet = Wallet.generate();
    SigWallet = wallet.getAddressString();
    SigWallet_PrivateKey = wallet.getPrivateKeyString();

    const DECRYPT = await hre.ethers.getContractFactory("decrypt");
    Decrypt = await DECRYPT.deploy();
    await Decrypt.deployed();
  });

  it("Should return wallet from signature of wallet and string", async function () {
    hash = await web3.utils.soliditySha3(Alice.address, StringData);
    SigObject = await web3.eth.accounts.sign(hash, SigWallet_PrivateKey);
    SigWallet_recovered = await web3.eth.accounts.recover(SigObject);
    res = await Decrypt.proofSignedWalletString(Alice.address, StringData, SigObject.signature);
    console.log("Passed params\n", Alice.address, "\n", StringData, "\n", SigObject.signature);
  });

  it("Should return wallet from signature of wallet", async function () {
    hash = await web3.utils.soliditySha3(Alice.address);
    SigObject = await web3.eth.accounts.sign(hash, SigWallet_PrivateKey);
    SigWallet_recovered = await web3.eth.accounts.recover(SigObject);
    res = await Decrypt.proofSignedWallet(Alice.address, SigObject.signature);
    console.log("Passed params\n", Alice.address, "\n", SigObject.signature);
  });
  afterEach(async () => {
    expect(SigWallet_recovered.toUpperCase()).to.be.equal(SigWallet.toUpperCase());
    console.log("SigWallet.............", SigWallet);
    console.log("SigWallet recovered...", SigWallet_recovered);
    console.log("res wallet recovered..", res);
  });
});

describe("Hash prepare", function () {
  let Decrypt, SigWallet, SigWallet_PrivateKey, hash, res;
  beforeEach(async () => {
    [deployer, Alice] = await ethers.getSigners();

    const wallet = Wallet.generate();
    SigWallet = wallet.getAddressString();
    SigWallet_PrivateKey = wallet.getPrivateKeyString();

    const DECRYPT = await hre.ethers.getContractFactory("decrypt");
    Decrypt = await DECRYPT.deploy();
    await Decrypt.deployed();
  });
  it("Should return hash by wallets amounts", async function () {
    hash = await web3.utils.soliditySha3(Alice.address, 1, 1, Decrypt.address);
    res = await Decrypt.hashWalletsAmounts(Alice.address, 1, 1, Decrypt.address);

    console.log("Passed params\n", Alice.address, "\n", 1, "\n", 1, "\n", Decrypt.address);
    console.log("Returns\n", "hash.............", res);
    expect(hash.toUpperCase()).to.be.equal(res.toUpperCase());
  });
  it("Should return hash and wallet from signature by wallets amounts", async function () {
    hash = await web3.utils.soliditySha3(Alice.address, 1, 1, Decrypt.address);

    SigObject = await web3.eth.accounts.sign(hash, SigWallet_PrivateKey);
    SigWallet_recovered = await web3.eth.accounts.recover(SigObject);

    res = await Decrypt.hashProofWalletsAmounts(Alice.address, 1, 1, Decrypt.address, SigObject.signature);

    console.log("Passed params\n", Alice.address, "\n", 1, "\n", 1, "\n", Decrypt.address, "\n", SigObject.signature);
    console.log("Returns\n", "hash..............", res.hash);
    console.log(" wallet_recovered..", res.wallet_recovered);
    expect(SigWallet_recovered.toUpperCase()).to.be.equal(res.wallet_recovered.toUpperCase());
  });
});
