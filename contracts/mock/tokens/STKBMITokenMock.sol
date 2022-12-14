// SPDX-License-Identifier: MIT
pragma solidity ^0.8.16;

import "../../tokens/STKBMIToken.sol";

contract STKBMITokenMock is STKBMIToken {
    function mintArbitrary(address _to, uint256 _amount) external {
        _mint(_to, _amount);
    }
}
