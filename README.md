# SignExample
Check provided signature on chain

Decrypt - simple contract provided two functions that returns signer wallet

contract deployed at [mumubai testnet](https://mumbai.polygonscan.com/address/0xC6e7AeB68aa2A5158d9397Ce3986BBC95932E3DB#readContract)

## proofSignedWalletString

```solidity
function proofSignedWalletString(
    address wallet,
    string memory data_string,
    bytes memory sig
) public pure returns (address wallet_recovered)
```
### example request
```cmd
Passed params
 0x70997970C51812dc3A010C7d01b50e0d17dc79C8 
 some_text_string_to_pass_in 
 0xe80bf0feec8a030c12f2d76599032a514f50e4007a567230306e35da6a2907853516d19a19cae194a7ebc9470a9c353a9f2d1c1942e3f281ebdd3d09a18d40491b

returns
 wallet recovered.. 0x1415D1B0Cfa1C51c162C7Fc7E2FFaF073A3cf7B2
```
## proofSignedWallet
```solidity
function proofSignedWallet(address wallet, bytes memory sig)
public
pure
returns (address wallet_recovered)
```
### example request
```cmd
Passed params
 0x70997970C51812dc3A010C7d01b50e0d17dc79C8 
 0xc5f96f553ad7facc14d7e561eeba11aaa82168e2b27349275dc83f0b98f57b2c07ecebc281bb377abdd9370a0553784f8f0161b5b03f368801584212dcac50831b

returns
 wallet recovered.. 0xBB3F99C7162BCEe3452aCe6A0c801C693cF753B8
```

## Install project
```cmd
yarn
```

## Run test
```cmd
npx hardhat test
```