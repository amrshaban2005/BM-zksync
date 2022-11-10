// SPDX-License-Identifier: MIT
pragma solidity ^0.8.16;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract CompMock is ERC20("comp", "COMP") {
    function mint(address to, uint256 amount) public {
        _mint(to, amount);
    }

    function transfer(address recipient, uint256 amount) public override returns (bool) {
        require(amount > 0, "ERC20Mock: amount 0");
        _transfer(_msgSender(), recipient, amount);
        return true;
    }
}
