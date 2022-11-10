// SPDX-License-Identifier: MIT
pragma solidity ^0.8.16;

import "../defiprotocols/yearn/YearnProtocol.sol";

contract YearnProtocolMock is YearnProtocol {
    function updatePriceAndBlock() public {
        _updatePriceAndBlock();
    }
}
