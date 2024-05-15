#!/bin/bash

# Install Node.js if not already installed
if ! command -v node &> /dev/null; then
    echo "Node.js is not installed. Please install it first."
    exit 1
fi

# Install npm packages if not already installed
if ! command -v npm &> /dev/null; then
    echo "npm is not installed. Please install it first."
    exit 1
fi

# Check if Hardhat is installed, if not, install it
if ! npm list -g hardhat &>/dev/null; then
    npm install -g hardhat
fi

# install project dependencies
echo $(npm install)

# run the tests
echo $(npx hardhat test)

#Deploy contract to sepolia testnet
echo $(npx hardhat run scripts/deploy.js --network sepolia)
