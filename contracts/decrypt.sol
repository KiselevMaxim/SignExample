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

    function proofSignedWallet(address wallet, bytes memory sig)
        public
        pure
        returns (address wallet_recovered)
    {
        bytes32 message = _prefixed(keccak256(abi.encodePacked(wallet)));

        wallet_recovered = _recoverSigner(message, sig);
    }
}
