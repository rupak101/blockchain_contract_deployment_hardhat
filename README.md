# Deployment of contract using hardhat

This project have single file bash script that deploys a contract using hardhat and dockerize the project.

# Tools, Framework, Programming Language used:

- Hardhat, solidity, Javascript, mocha, chai, npm, nodejs

# Development environment :

- All development and execution done on Mac OS. It should work on other OS as well.

## Dependencies

To run the tests, please ensure you have the following installed:

- Node
- NPM
- Hardhat
- Docker (for running in container)

## Installation

- Clone the repo and Install the project dependencies

```
npm install
```

## Deploy the contract and run the tests

### Standard Mode
- Deploy the contract and run tests.

```
npm run ci:deployment
```

### Bash Mode
- Run the bash file that runs all scripts .

```
bash bash.sh
```

### Deploy the contract and run the tests in Docker container

* build docker image 
```
npm run image:build
```
* run docker compose file for deployment of contract and run tests
```
npm run docker:deployment
```

## Eslint

- Check the code style and format using eslint

```
npm run eslint
```

# Offical Documents links:

- Hardhat Docs: https://hardhat.org/
- Sepolia Faucet: https://sepoliafaucet.com/
