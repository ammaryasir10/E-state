require("babel-register");
require("babel-polyfill");

const POLYGON_TESTNET_RPC_URL =
  process.env.POLYGON_TESTNET_RPC_URL ||
  "https://rpc-mumbai.maticvigil.com/v1/eb66dd269ef531b4cf7d450b2810a19d7f0db45a";

const POLYGONSCAN_API_KEY =
  process.env.POLYGONSCAN_API_KEY || "JK7GMQCZSSWYKC55YGUQ7AGYB2RTJ4794P";

const PRIVATE_KEY =
  process.env.PRIVATE_KEY ||
  "35a608d258e9904654f6b23d57c308d6008f2f4c17dfbc6ab62826e92964753a";
module.exports = {
  networks: {
    polygon: {
      url: POLYGON_TESTNET_RPC_URL,
      accounts: PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : [],
      saveDeployments: true,
      chainId: 80001,
      network_id: "*",
    },
  },
  etherscan: {
    // npx hardhat verify --network <NETWORK> <CONTRACT_ADDRESS> <CONSTRUCTOR_PARAMETERS>
    apiKey: {
      polygonMumbai: POLYGONSCAN_API_KEY,
    },
  },
  contracts_directory: "./src/contracts/",
  contracts_build_directory: "./src/abis/",
  compilers: {
    solc: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
