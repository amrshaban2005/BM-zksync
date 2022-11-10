// SPDX-License-Identifier: MIT
pragma solidity ^0.8.16;

import "./AbstractLPTokenMock.sol";

contract LpBmiEthMock is AbstractLPTokenMock {
    constructor(string memory _name, string memory _symbol) AbstractLPTokenMock(_name, _symbol) {}
}
