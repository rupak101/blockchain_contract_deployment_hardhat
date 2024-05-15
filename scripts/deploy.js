const hre = require('hardhat');
const fs = require('fs');
require('dotenv').config();

async function main() {

  const bytes32Value = '0xa78caba8710be630407cbf28f3f9c8a3d44bd0060b277d3521eab9931b22cd50';
  const bytesValue = '0xb78caba8710be630407cbf28f3f9c8a3d44bd0060b277d3521eab9931b22cd51';
  const uint256Value = '0xb78caba8710be630407cbf28f3f9c8a3d44bd0060b277d3521eab9931b22cd52';
  const bytes32RequestId = '0xc78caba8710be630407cbf28f3f9c8a3d44bd0060b277d3521eab9931b22cd62';
  const bytesRequestId = '0xc78caba8710be630407cbf28f3f9c8a3d44bd0060b277d3521eab9931b22cd72';
  const bytes256RequestId = '0xc78caba8710be630407cbf28f3f9c8a3d44bd0060b277d3521eab9931b22cd82';

  // Get provider
  const provider = hre.ethers.getDefaultProvider('sepolia');
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
  const getterSetter = await hre.ethers.deployContract('GetterSetter');
  // Deploy contract to sepolia testnet
  await getterSetter.waitForDeployment();
  console.log(`Getter setter contract deployed to ${getterSetter.target}`);
  // Get deployer address
  const deployer = await wallet.address;
  console.log('Deployer address :', deployer);
  // Request to the deployed contract
  await getterSetter.requestedBytes32(bytes32RequestId, bytes32Value);
  await getterSetter.requestedBytes(bytesRequestId, bytesValue);
  await getterSetter.requestedUint256(bytes256RequestId, uint256Value);
  // Log details to output.json file
  const jsonData = {
    'contract deployed to': getterSetter.target,
    'deployer address': deployer,
    'bytes32 value': bytes32Value,
    'bytes value': bytesValue,
    'uint256 value': uint256Value
  };
  fs.writeFileSync('output.json', JSON.stringify(jsonData, null, 2));
}

// error handle.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
