// SPDX-License-Identifier: MIT
pragma solidity ^0.8.16;

import "./abstract/AbstractLiquidityMiningStaking.sol";

contract LiquidityMiningStakingUSDT is AbstractLiquidityMiningStaking {
    function __LiquidityMiningStakingUSDT_init() external initializer {
        __LiquidityMiningStaking_init();
    }

    function setDependencies(IContractsRegistry _contractsRegistry)
        external
        override
        onlyInjectorOrZero
    {
        rewardsToken = IERC20(_contractsRegistry.getBMIContract());
        bmiStaking = IBMIStaking(_contractsRegistry.getBMIStakingContract());
        stakingToken = _contractsRegistry.getAMMBMIToUSDTPairContract();
        nftStakingAddress = _contractsRegistry.getNFTStakingContract();
        sushiswapMasterChefV2Address = _contractsRegistry.getSushiSwapMasterChefV2Contract();
    }
}
