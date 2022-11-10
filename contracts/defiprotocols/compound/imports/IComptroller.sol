// SPDX-License-Identifier: MIT
pragma solidity ^0.8.16;

interface IComptroller {
    function claimComp(address holder) external;

    function getCompAddress() external view returns (address);
}
