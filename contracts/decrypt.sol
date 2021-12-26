// SPDX-License-Identifier: MIT

pragma solidity ^0.6.2;

import "./Sign.sol";

contract decrypt is Sign {
    function proofSignedWalletString(
        address wallet,
        string memory data_string,
        bytes memory sig
    ) public pure returns (address wallet_recovered) {
        bytes32 message = _prefixed(keccak256(abi.encodePacked(wallet, data_string)));

        wallet_recovered = _recoverSigner(message, sig);
    }

    function proofSignedWallet(address wallet, bytes memory sig) public pure returns (address wallet_recovered) {
        bytes32 message = _prefixed(keccak256(abi.encodePacked(wallet)));

        wallet_recovered = _recoverSigner(message, sig);
    }

    function hashWalletsAmounts(
        address wallet,
        uint256 amount,
        uint256 amount2,
        address wallet2
    ) public pure returns (bytes32 hash) {
        hash = keccak256(abi.encodePacked(wallet, amount, amount2, wallet2));
    }

    function hashProofWalletsAmounts(
        address wallet,
        uint256 amount,
        uint256 amount2,
        address wallet2,
        bytes memory sig
    ) public pure returns (bytes32 hash, address wallet_recovered) {
        hash = keccak256(abi.encodePacked(wallet, amount, amount2, wallet2));
        bytes32 message = _prefixed(hash);
        wallet_recovered = _recoverSigner(message, sig);
    }
}
