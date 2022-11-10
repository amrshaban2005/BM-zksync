// SPDX-License-Identifier: MIT
pragma solidity ^0.8.16;

import "../PolicyQuote.sol";

contract PolicyQuoteMock is PolicyQuote {
    uint256 public mockQuote;

    function setQuote(uint256 _quote) external {
        mockQuote = _quote;
    }

    function getQuotePredefined(
        uint256,
        uint256,
        uint256,
        uint256,
        uint256,
        bool
    ) external view override returns (uint256, uint256) {
        return (mockQuote, 0);
    }

    function getQuote(
        uint256,
        uint256,
        address
    ) external view override returns (uint256) {
        return mockQuote;
    }
}
