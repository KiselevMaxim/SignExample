const hre = require("hardhat");

function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
  const CHAINID = await hre.network.provider.send("eth_chainId");

  // hardhat => 800
  // mumbai => 6000
  const TIME_OUT = CHAINID == 0x7a69 ? 800 : 10000;

  const DECRYPT = await hre.ethers.getContractFactory("decrypt");
  const Decrypt = await DECRYPT.deploy();

  await timeout(TIME_OUT);

  await Decrypt.deployed();

  console.log("decrypt deployed to:", Decrypt.address);

  //verification
  if (CHAINID != 0x7a69) {
    await hre.run("verify:verify", {
      address: Decrypt.address,
      constructorArguments: [],
    });
  }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
