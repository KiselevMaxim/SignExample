# SignExample
Check provided signature on chain

Decrypt - simple contract provided two functions that returns signer wallet and function for returning hash

contract deployed at [mumubai testnet](https://mumbai.polygonscan.com/address/0x030253f8A171D4056474783982d61717cbE65a14#code)
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
## hashWalletsAmounts
```solidity
function hashWalletsAmounts(
    address wallet,
    uint256 amount,
    uint256 amount2,
    address wallet2
) public pure returns (bytes32 hash)
```
### example request
```cmd
Passed params
 0x70997970C51812dc3A010C7d01b50e0d17dc79C8 
 1 
 1 
 0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0
Returns
 hash............. 0x53648d253decaa70452d72a899a0072318bd92a31eabae6c2905d5a3f17ed19b
```
## hashProofWalletsAmounts
```solidity
function hashProofWalletsAmounts(
    address wallet,
    uint256 amount,
    uint256 amount2,
    address wallet2,
    bytes memory sig
) public pure returns (bytes32 hash, address wallet_recovered)
```
### example request
```cmd
Passed params
 0x70997970C51812dc3A010C7d01b50e0d17dc79C8 
 1 
 1 
 0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9 
 0x895d3dd482b959d0576dbd7776eb61da2479b46434c699fcfd2b4bad7ca4f91a2ab38a2be40362f2f53f28b8beb91ccf17998599f2bb6cdd4abf27098f8ecfb81b
Returns
 hash.............. 0xab2c1a25ec80727ea327a03779dd327b6990d7a90be2947b3995ffbfe72d7444
 wallet_recovered.. 0xEdC74321fa6aa81D2D4A8182e30f1A22D61337aD
```

## Install project
```cmd
yarn
```

## Run test
```cmd
npx hardhat test
```