// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

// Import ERC20 token implementation from OpenZeppelin
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Token1 is ERC20 {
    constructor() ERC20("Token 1", "TKN1") {
        _mint(msg.sender, 1000000 * 10 ** decimals());
    }
}