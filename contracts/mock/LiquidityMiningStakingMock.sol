// SPDX-License-Identifier: MIT
pragma solidity ^0.8.16;

import "../LiquidityMiningStakingETH.sol";

contract LiquidityMiningStakingMock is LiquidityMiningStakingETH {
    function rewards(address staker) external view returns (uint256) {
        return _applySlashing(_rewards[staker]);
    }
}
