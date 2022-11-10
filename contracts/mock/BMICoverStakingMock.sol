// SPDX-License-Identifier: MIT
pragma solidity ^0.8.16;

import "../BMICoverStaking.sol";

contract BMICoverStakingMock is BMICoverStaking {
    function nftMintId() external view returns (uint256) {
        return _nftMintId;
    }
}
