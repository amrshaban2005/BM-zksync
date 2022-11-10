const { logTransaction } = require("../helpers/logger.js");
const { loadAccount } = require("../helpers/loadAccount.js");

const { Wallet, Contract } = require("zksync-web3");
const hre = require("hardhat");
const { Deployer } = require("@matterlabs/hardhat-zksync-deploy");
const { ethers } = require("ethers");

module.exports = async () => {
  let pk = await loadAccount();
 
  const wallet = new Wallet(pk);

  const deployer = new Deployer(hre, wallet);

  const ContractsRegistry = await deployer.loadArtifact("ContractsRegistry");
  const contractsRegistry = await deployer.deploy(ContractsRegistry);
  console.log("ContractsRegistry ",contractsRegistry.address);
  

   const ClaimingRegistry = await deployer.loadArtifact("ClaimingRegistry");
  const claimingRegistry = await deployer.deploy(ClaimingRegistry);
  console.log("ClaimingRegistry ", claimingRegistry.address);

  const BMICoverStaking = await deployer.loadArtifact("BMICoverStaking");
  const bmiCoverStaking = await deployer.deploy(BMICoverStaking);
  console.log("BMICoverStaking ", bmiCoverStaking.address);

  const ClaimVoting = await deployer.loadArtifact("ClaimVoting");
  const claimVoting = await deployer.deploy(ClaimVoting);
  console.log("ClaimVoting ", claimVoting.address);


  const PolicyBook = await deployer.loadArtifact("PolicyBook");
  const policyBook = await deployer.deploy(PolicyBook);
  console.log("PolicyBook ", policyBook.address);


  const UserLeveragePool = await deployer.loadArtifact("UserLeveragePool");
  const userLeveragePool =  await deployer.deploy(UserLeveragePool);
  console.log("UserLeveragePool ",userLeveragePool.address);
};
