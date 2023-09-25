/** Replace the values below with the addresses of your smart contracts. */

// 1. Set up the network your smart contracts are deployed to.
// First, import the chain from the package, then set the NETWORK variable to the chain.
import { BeanecoSmartchain } from "@thirdweb-dev/chains";
export const NETWORK = BeanecoSmartchain;

// 2. The address of the marketplace V3 smart contract.
// Deploy your own: https://thirdweb.com/thirdweb.eth/MarketplaceV3
export const MARKETPLACE_ADDRESS = "0xe578229Cd6b1d01038E1415a569B9FFf74976AE5";

// 3. The address of your NFT collection smart contract.
export const NFT_COLLECTION_ADDRESS =
  "0x7FDF294BE54c5967C3531fDf49c3B2990456a5e0";

// (Optional) Set up the URL of where users can view transactions on
// For example, below, we use Mumbai.polygonscan to view transactions on the Mumbai testnet.
// export const ETHERSCAN_URL = "https://bescscan.io";
