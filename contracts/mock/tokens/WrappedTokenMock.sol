// SPDX-License-Identifier: MIT
pragma solidity ^0.8.16;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract WrappedTokenMock is ERC20 {
    constructor(string memory _name, string memory _symbol) ERC20(_name, _symbol) {
        _mint(msg.sender, 1_000_000_000_000 ether);
    }

    function mintArbitrary(address _to, uint256 _amount) external {
        require(_amount <= 1_000_000 ether, "WrappedTokenMock: Can't mint that amount");

        _mint(_to, _amount);
    }
}
