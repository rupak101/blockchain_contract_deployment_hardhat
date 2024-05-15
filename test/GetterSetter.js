const { loadFixture } = require('@nomicfoundation/hardhat-toolbox/network-helpers');
const { expect } = require('chai');

describe('Test for Getter Setter solidity contract', function () {
  async function deployOneYearLockFixture () {
    
    const bytes32Value = '0xa78caba8710be630407cbf28f3f9c8a3d44bd0060b277d3521eab9931b22cd50';
    const bytesValue = '0xb78caba8710be630407cbf28f3f9c8a3d44bd0060b277d3521eab9931b22cd51';
    const uint256Value = '0xb78caba8710be630407cbf28f3f9c8a3d44bd0060b277d3521eab9931b22cd52';
    const bytes32RequestId = '0xc78caba8710be630407cbf28f3f9c8a3d44bd0060b277d3521eab9931b22cd62';
    const bytesRequestId = '0xc78caba8710be630407cbf28f3f9c8a3d44bd0060b277d3521eab9931b22cd72';
    const bytes256RequestId = '0xc78caba8710be630407cbf28f3f9c8a3d44bd0060b277d3521eab9931b22cd82';

    // Deploy getter setter contract
    const GetterSetter = await ethers.getContractFactory('GetterSetter');
    const getterSetter = await GetterSetter.deploy();
    console.log(`Getter setter contract deployed to ${getterSetter.target}`);
    // Request to the deployed contract
    await getterSetter.requestedBytes32(bytes32RequestId, bytes32Value);
    await getterSetter.requestedBytes(bytesRequestId, bytesValue);
    await getterSetter.requestedUint256(bytes256RequestId, uint256Value);
    return { getterSetter, bytes32Value, bytesValue, uint256Value };
  }

  it('Verify set the byte 32 value', async function () {
    const { getterSetter, bytes32Value } = await loadFixture(deployOneYearLockFixture);
    expect(await getterSetter.getBytes32()).to.equal(bytes32Value);
  });

  it('Verify set the byte value', async function () {
    const { getterSetter, bytesValue } = await loadFixture(deployOneYearLockFixture);
    expect(await getterSetter.getBytes()).to.equal(bytesValue);
  });

  it('Verify set the uint 256 value', async function () {
    const { getterSetter, uint256Value } = await loadFixture(deployOneYearLockFixture);
    expect(await getterSetter.getUint256()).to.equal(uint256Value);
  });
});
