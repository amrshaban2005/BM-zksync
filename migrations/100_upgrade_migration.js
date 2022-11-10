const UserLeveragePool = artifacts.require("UserLeveragePool");
const { toBN } = require("./helpers/utils.js");
const { logTransaction, logAddress } = require("./helpers/logger.js");
const Proxy = artifacts.require("TransparentUpgradeableProxy");
const ContractsRegistry = artifacts.require("ContractsRegistry");
const CapitalPool = artifacts.require("CapitalPool");
const PolicyBook = artifacts.require("PolicyBook");
const PolicyBookFacade = artifacts.require("PolicyBookFacade");
const PolicyQuote = artifacts.require("PolicyQuote");
const PolicyBookFabric = artifacts.require("PolicyBookFabric");
const PolicyBookAdmin = artifacts.require("PolicyBookAdmin");
const PolicyBookRegistry = artifacts.require("PolicyBookRegistry");
const TetherToken = artifacts.require("TetherToken");
const CompoundProtocol = artifacts.require("CompoundProtocol");
const AaveProtocol = artifacts.require("AaveProtocol");
const YearnProtocol = artifacts.require("YearnProtocol");
const ReinsurancePool = artifacts.require("ReinsurancePool");
const YieldGenerator = artifacts.require("YieldGenerator");
const ClaimingRegistry = artifacts.require("ClaimingRegistry");
const BMIStaking = artifacts.require("BMIStaking");
const ShieldMining = artifacts.require("ShieldMining");
const LeveragePortfolioView = artifacts.require("LeveragePortfolioView");
const RewardsGenerator = artifacts.require("RewardsGenerator");
const LiquidityRegistry = artifacts.require("LiquidityRegistry");
const BMICoverStaking = artifacts.require("BMICoverStaking");
const LiquidityMiningStakingETH = artifacts.require("LiquidityMiningStakingETH");
const BigNumber = require("bignumber.js");
const LendingPoolMock = artifacts.require("LendingPoolMock");
const LendingPoolAddressesProviderMock = artifacts.require("LendingPoolAddressesProviderMock");
const CTokenMock = artifacts.require("CERC20Mock");
const VaultMock = artifacts.require("VaultMock");

const PRECISION = toBN(10).pow(25);
const wei = web3.utils.toWei;
const contractRegistryAddress = "0xF8490D9CA62d3daa79285c24c040A131292358FF"; //goerli
//const contractRegistryAddress = "0xeEEDAc8F8dC9Dd31c29BBCc7FD8Ac215d56C3d4b"; //bsc test
//const contractRegistryAddress = "0x8F8FE267DE0a926c2E19EC1990A6fb32a93Dd862"; // pol test
const ownerAddress = "0xaa5e721A6a8B1F61e5976a30B908D7F7f0798677";
// test
// const contractRegistryAddress = "0x9EFC3401B5351683CF1b733c2dCf55ecd8266dAd";
// const ownerAddress = "0xaa5e721A6a8B1F61e5976a30B908D7F7f0798677";

module.exports = async (deployer) => {
  const owner = web3.utils.toChecksumAddress(ownerAddress.toLowerCase());
  const contractsRegistry = await ContractsRegistry.at(contractRegistryAddress);

  // await deployer.deploy(LendingPoolMock, await contractsRegistry.getAaveATokenContract());
  // const lendingPoolMock = await LendingPoolMock.deployed();

  // await deployer.deploy(LendingPoolAddressesProviderMock, lendingPoolMock.address);
  // const lendingPoolAddressesProviderMock = await LendingPoolAddressesProviderMock.deployed();

  // await deployer.deploy(CTokenMock, await contractsRegistry.getUSDTContract());
  // const cTokenMock = await CTokenMock.deployed();

  // logTransaction(
  //   await contractsRegistry.addContract(await contractsRegistry.COMPOUND_CTOKEN_NAME(), cTokenMock.address, {
  //     from: owner,
  //   }),
  //   "Add CToken"
  // );

  // logTransaction(
  //   await contractsRegistry.addContract(
  //     await contractsRegistry.AAVE_LENDPOOL_ADDRESS_PROVIDER_NAME(),
  //     lendingPoolAddressesProviderMock.address,
  //     {
  //       from: owner,
  //     }
  //   ),
  //   "Add LendingPoolAddressesProvider"
  // );

  // //inject aave
  // logTransaction(
  //   await contractsRegistry.injectDependencies(await contractsRegistry.AAVE_PROTOCOL_NAME(), {
  //     from: owner,
  //   }),
  //   "Inject aave"
  // );

  // //inject compound
  // logTransaction(
  //   await contractsRegistry.injectDependencies(await contractsRegistry.COMPOUND_PROTOCOL_NAME(), {
  //     from: owner,
  //   }),
  //   "Inject compound"
  // );

  // const policybookFacade = await PolicyBookFacade.at("0xcec17A109C12887caac7E5fCfFCe9352D75f037F");
  // await policybookFacade.withdrawLiquidity({ from: owner });
  // process.exit(0);
  // LiquidityRegistry contract
  // await deployer.deploy(LiquidityRegistry);
  // const liquidityRegistry = await LiquidityRegistry.deployed();

  // logAddress("liquidityRegistry", liquidityRegistry.address);
  // logAddress("liquidityRegistryName", await contractsRegistry.LIQUIDITY_REGISTRY_NAME());

  // logTransaction(
  //   await contractsRegistry.upgradeContract(
  //     await contractsRegistry.LIQUIDITY_REGISTRY_NAME(),
  //     liquidityRegistry.address,
  //     {
  //       from: owner,
  //     }
  //   ),
  //   "Upgrade liquidityRegistry"
  // );
  // process.exit(0);
  // const liquidityRegistryProxy = await LiquidityRegistry.at(await contractsRegistry.getLiquidityRegistryContract());
  // console.log(liquidityRegistryProxy.address);

  // const tx = await liquidityRegistryProxy.getAllPendingWithdrawalRequestsAmount();

  // let event = await liquidityRegistryProxy.getPastEvents("CollectWothdrawAmount");
  // let total = toBN(0);
  // for (let i = 0; i < event.length; i++) {
  //   console.log("event ", i);
  //   total = total.plus(event[i].returnValues.amount);
  //   console.log(event[i].returnValues.amount);
  //   console.log(event[i].returnValues.duration);
  //   console.log(event[i].returnValues.policybook);
  //   console.log(event[i].returnValues.user);
  //   console.log("**************");
  // }
  // console.log(total.toFixed());
  // //console.log(event);
  // process.exit(0);

  // yieldGenerator contract
  // await deployer.deploy(YieldGenerator);
  // const yieldGenerator = await YieldGenerator.deployed();

  // logAddress("yieldGenerator", yieldGenerator.address);
  // logAddress("yieldGeneratorName", await contractsRegistry.YIELD_GENERATOR_NAME());

  // logTransaction(
  //   await contractsRegistry.upgradeContract(await contractsRegistry.YIELD_GENERATOR_NAME(), yieldGenerator.address, {
  //     from: owner,
  //   }),
  //   "Upgrade yieldGenerator"
  // );

  // capitalPool contract
  await deployer.deploy(CapitalPool, { nonce: 262 });
  const capitalPool = await CapitalPool.deployed();

  logAddress("capitalPool", capitalPool.address);
  logAddress("capitalPoolName", await contractsRegistry.CAPITAL_POOL_NAME());

  logTransaction(
    await contractsRegistry.upgradeContract(await contractsRegistry.CAPITAL_POOL_NAME(), capitalPool.address, {
      from: owner,
    }),
    "Upgrade capitalPool"
  );

  // Aave contract
  // await deployer.deploy(AaveProtocol);
  // const aaveProtocol = await AaveProtocol.deployed();

  // logAddress("aaveProtocol", aaveProtocol.address);
  // logAddress("aaveProtocolName", await contractsRegistry.AAVE_PROTOCOL_NAME());

  // logTransaction(
  //   await contractsRegistry.upgradeContract(await contractsRegistry.AAVE_PROTOCOL_NAME(), aaveProtocol.address, {
  //     from: owner,
  //   }),
  //   "Upgrade aaveProtocol"
  // );

  // // Compound contract
  // await deployer.deploy(CompoundProtocol);
  // const compoundProtocol = await CompoundProtocol.deployed();

  // logAddress("compoundProtocol", compoundProtocol.address);
  // logAddress("compoundProtocolName", await contractsRegistry.COMPOUND_PROTOCOL_NAME());

  // logTransaction(
  //   await contractsRegistry.upgradeContract(
  //     await contractsRegistry.COMPOUND_PROTOCOL_NAME(),
  //     compoundProtocol.address,
  //     { from: owner }
  //   ),
  //   "Upgrade compoundProtocol"
  // );

  // process.exit(0);
  // logTransaction(
  //   await contractsRegistry.upgradeContract(
  //     await contractsRegistry.COMPOUND_PROTOCOL_NAME(),
  //     "0xe660709f03d813ada3197d146b20bc1da584f77c",
  //     { from: owner }
  //   ),
  //   "Upgrade compoundProtocol"
  // );
  // process.exit(0);

  // // Yearn contract
  // await deployer.deploy(YearnProtocol);
  // const yearnProtocol = await YearnProtocol.deployed();

  // logAddress("yearnProtocol", yearnProtocol.address);
  // logAddress("yearnProtocolName", await contractsRegistry.YEARN_PROTOCOL_NAME());

  // logTransaction(
  //   await contractsRegistry.upgradeContract(await contractsRegistry.YEARN_PROTOCOL_NAME(), yearnProtocol.address, {
  //     from: owner,
  //   }),
  //   "Upgrade yearnProtocol"
  // );

  // await deployer.deploy(VaultMock, await contractsRegistry.getUSDTContract());
  // const vaultMock = await VaultMock.deployed();

  // logTransaction(
  //   await contractsRegistry.addContract(await contractsRegistry.YEARN_VAULT_NAME(), vaultMock.address),
  //   "Add Vault"
  // );

  // logTransaction(
  //   await contractsRegistry.injectDependencies(await contractsRegistry.YEARN_PROTOCOL_NAME(), {
  //     from: owner,
  //   }),
  //   "Inject yearnProtocol"
  // );

  // logTransaction(
  //   await contractsRegistry.upgradeContract(
  //     await contractsRegistry.YEARN_PROTOCOL_NAME(),
  //     "0xe660709f03d813ada3197d146b20bc1da584f77c",
  //     { from: owner }
  //   ),
  //   "Upgrade compoundProtocol"
  // );
  // process.exit(0);

  // const capitalPoolProxy = await CapitalPool.at(await contractsRegistry.getCapitalPoolContract());

  // const aaveProxy = await AaveProtocol.at(await contractsRegistry.getAaveProtocolContract());
  // const compoundProxy = await CompoundProtocol.at(await contractsRegistry.getCompoundProtocolContract());
  // const yearnProxy = await YearnProtocol.at(await contractsRegistry.getYearnProtocolContract());
  //const yieldGeneratorProxy = await YieldGenerator.at(await contractsRegistry.getYieldGeneratorContract());

  // logTransaction(await capitalPoolProxy.setMaintainer(owner, { from: owner }), "setMaintainer");

  // const tx1 = await capitalPoolProxy.rebalanceLiquidityCushion({ from: owner });

  // console.log(tx1);
  // console.log((await capitalPoolProxy.liquidityCushionBalance()).toString());

  // let event = await yieldGeneratorProxy.getPastEvents("updateRebalanceWeight");
  // for (let i = 0; i < event.length; i++) {
  //   console.log(event[i]);
  // }

  // event = await yieldGeneratorProxy.getPastEvents("DefiWithdrawn");
  // for (let i = 0; i < event.length; i++) {
  //   console.log(event[i]);
  // }

  // event = await capitalPoolProxy.getPastEvents("WithdrawAmount");
  // console.log(event);

  // event = await aaveProxy.getPastEvents("AaveWithdrawn");
  // console.log(event);

  // event = await compoundProxy.getPastEvents("CompoundWithdrawn");
  // console.log(event);

  // event = await yearnProxy.getPastEvents("YearnWithdrawn");
  // console.log(event);

  // bmiCoverStaking contract
  // await deployer.deploy(BMICoverStaking,{nonce: 112});
  // const bmiCoverStaking = await BMICoverStaking.deployed();

  // logAddress("bmiCoverStaking", bmiCoverStaking.address);
  // logAddress("bmiCoverStakingName", await contractsRegistry.BMI_COVER_STAKING_NAME());

  // logTransaction(
  //   await contractsRegistry.upgradeContract(await contractsRegistry.BMI_COVER_STAKING_NAME(), bmiCoverStaking.address, {
  //     from: owner,
  //   }),
  //   "Upgrade bmiCoverStaking"
  // );

  // bmiStaking contract
  //  await deployer.deploy(BMIStaking);
  //  const bmiStaking = await BMIStaking.deployed();

  //  logAddress("bmiStaking", bmiStaking.address);
  //  logAddress("bmiStakingName", await contractsRegistry.BMI_STAKING_NAME());

  //  logTransaction(
  //    await contractsRegistry.upgradeContract(await contractsRegistry.BMI_STAKING_NAME(), bmiStaking.address, {
  //      from: owner,
  //    }),
  //    "Upgrade bmiStaking"
  //  );

  // liquidityMiningStakingETH contract
  // await deployer.deploy(LiquidityMiningStakingETH);
  // const liquidityMiningStakingETH = await LiquidityMiningStakingETH.deployed();

  // logAddress("liquidityMiningStakingETH", liquidityMiningStakingETH.address);
  // logAddress("liquidityMiningStakingETHName", await contractsRegistry.LIQUIDITY_MINING_STAKING_ETH_NAME());

  // logTransaction(
  //   await contractsRegistry.upgradeContract(
  //     await contractsRegistry.LIQUIDITY_MINING_STAKING_ETH_NAME(),
  //     liquidityMiningStakingETH.address,
  //     {
  //       from: owner,
  //     }
  //   ),
  //   "Upgrade liquidityMiningStakingETH"
  // );

  // LeveragePortfolioView contract
  // await deployer.deploy(LeveragePortfolioView);
  // const leveragePortfolioView = await LeveragePortfolioView.deployed();

  // logAddress("leveragePortfolioView", leveragePortfolioView.address);
  // logAddress("leveragePortfolioViewName", await contractsRegistry.LEVERAGE_PORTFOLIO_VIEW_NAME());

  // logTransaction(
  //   await contractsRegistry.upgradeContract(
  //     await contractsRegistry.LEVERAGE_PORTFOLIO_VIEW_NAME(),
  //     leveragePortfolioView.address,
  //     {
  //       from: owner,
  //     }
  //   ),
  //   "Upgrade leveragePortfolioView"
  // );

  // ReinsurancePool contract
  // await deployer.deploy(ReinsurancePool);
  // const reinsurancePool = await ReinsurancePool.deployed();

  // logAddress("reinsurancePool", reinsurancePool.address);
  // logAddress("reinsurancePoolName", await contractsRegistry.REINSURANCE_POOL_NAME());

  // logTransaction(
  //   await contractsRegistry.upgradeContract(await contractsRegistry.REINSURANCE_POOL_NAME(), reinsurancePool.address, {
  //     from: owner,
  //   }),
  //   "Upgrade reinsurancePool"
  // );

  //UserLeveragePool contract
  // await deployer.deploy(UserLeveragePool);
  // const userLeveragePool = await UserLeveragePool.deployed();

  // logAddress("userLeveragePool", userLeveragePool.address);

  // const policyBookAdminProxy = await PolicyBookAdmin.at(await contractsRegistry.getPolicyBookAdminContract());

  // logTransaction(
  //   await policyBookAdminProxy.upgradeUserLeveragePools(userLeveragePool.address, 0, 1, {
  //     from: owner,
  //   }),
  //   "Upgrade userLeveragePool"
  // );

  //process.exit(1);
  // logTransaction(
  //   await contractsRegistry.injectDependencies(await contractsRegistry.BMI_COVER_STAKING_NAME(), {
  //     from: owner,
  //   }),
  //   "Inject bmiCoverStaking"
  // );

  // claimingRegistry contract
  // await deployer.deploy(ClaimingRegistry);
  // const claimingRegistry = await ClaimingRegistry.deployed();

  // logAddress("claimingRegistry", claimingRegistry.address);

  // logAddress("claimingRegistryName", await contractsRegistry.CLAIMING_REGISTRY_NAME());

  // logTransaction(
  //   await contractsRegistry.upgradeContract(
  //     await contractsRegistry.CLAIMING_REGISTRY_NAME(),
  //     claimingRegistry.address,
  //     {
  //       from: owner,
  //     }
  //   ),
  //   "Upgrade claimingRegistry"
  // );
  // process.exit(0)

  // shieldMining contract
  // await deployer.deploy(ShieldMining);
  // const shieldMining = await ShieldMining.deployed();

  // logAddress("shieldMining", shieldMining.address);
  // logAddress("shieldMiningName", await contractsRegistry.SHIELD_MINING_NAME());

  // logTransaction(
  //   await contractsRegistry.upgradeContract(await contractsRegistry.SHIELD_MINING_NAME(), shieldMining.address, {
  //     from: owner,
  //   }),
  //   "Upgrade shieldMining"
  // );

  // logTransaction(
  //   await contractsRegistry.injectDependencies(await contractsRegistry.SHIELD_MINING_NAME(), {
  //     from: owner,
  //   }),
  //   "Inject shieldMining"
  // );

  // policybook contract
  // await deployer.deploy(PolicyBook);
  // const policyBook = await PolicyBook.deployed();
  // logAddress("policyBook", policyBook.address);

  // policybookFacade contract
  // await deployer.deploy(PolicyBookFacade);
  // const policyBookFacade = await PolicyBookFacade.deployed();

  // logAddress("policyBookFacade", policyBookFacade.address);

  // UserLeveragePool contract
  // await deployer.deploy(UserLeveragePool);
  // const userLeveragePool = await UserLeveragePool.deployed();

  // logAddress("userLeveragePool", userLeveragePool.address);

  // const policyBookAdminProxy = await PolicyBookAdmin.at(await contractsRegistry.getPolicyBookAdminContract());

  // logTransaction(
  //   await policyBookAdminProxy.setupPricingModel(
  //     PRECISION.times(85),
  //     PRECISION.times(80),
  //     PRECISION.times(1.8),
  //     PRECISION.times(2),
  //     wei("10"),
  //     PRECISION.times(10),
  //     PRECISION.times(50),
  //     PRECISION.times(10),
  //     PRECISION.times(30)
  //   ),
  //   "setup pricing model"
  // );

  // logTransaction(
  //   await policyBookAdminProxy.upgradeUserLeveragePools(userLeveragePool.address, 0, 1, {
  //     from: owner,
  //   }),
  //   "Upgrade userLeveragePool"
  // );
  //0x2C7AB5be6d45f66cF5fc5869Fb7e94707BC42d7d eth
  //0xBE07a240f618878889676666fc8c14A7CbEF7FDD
  // logTransaction(
  //   await policyBookAdminProxy.upgradePolicyBooks("0x2C7AB5be6d45f66cF5fc5869Fb7e94707BC42d7d", 0, 100, {
  //     from: owner,
  //   }),
  //   "Upgrade policyBook"
  // );

  // logTransaction(
  //   await policyBookAdminProxy.upgradePolicyBookFacades(policyBookFacade.address, 0, 5, {
  //     from: owner,
  //   }),
  //   "Upgrade policyBookFacade"
  // );
  // let usdtAddress = "0xdac17f958d2ee523a2206206994597c13d831ec7";
  // let tether = await TetherToken.at(usdtAddress);
  // const policybookFacade1 = await PolicyBookFacade.at("0x290c4b815f598e29e080080826b6a384a8ce907e");
  //const policyBook1 = await PolicyBook.at("");

  // await tether.approve("0xBc9F6e7cBBD188bC4118df34a5B8b6B06cf2F824", wei("100"), { from: user });
  // logTransaction(await policybookFacade1.addLiquidityFromDistributorFor(user, wei("100"), { from: user }), "add liq");
};
