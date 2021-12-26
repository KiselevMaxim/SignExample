require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-web3");
require("dotenv").config();

const ALCHEMY_API_KEY_MUMBAI = process.env.ALCHEMY_API_KEY_MUMBAI || "";
const MUMBAI_PRIVATE_KEY = process.env.MUMBAI_PRIVATE_KEY || "";

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

const exportNetworks = {
  hardhat: {},
  ganache: {
    url: "http://127.0.0.1:8545",
    gasLimit: 6000000000,
    defaultBalanceEther: 10
  },
}

if (ALCHEMY_API_KEY_MUMBAI != "" && MUMBAI_PRIVATE_KEY != "") {
  exportNetworks["mumbai"] = {
    url: `https://polygon-mumbai.g.alchemy.com/v2/${ALCHEMY_API_KEY_MUMBAI}`,
    accounts: [`${MUMBAI_PRIVATE_KEY}`]
  }
}

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.6.2",
  settings: {
    optimizer: {
      enabled: true,
      runs: 200,
    },
  },
  networks: exportNetworks,
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
};
