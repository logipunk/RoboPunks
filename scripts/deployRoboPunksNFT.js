const hre = require("hardhat");

async function main() {
 
  const RoboPunksNFT = await hre.ethers.getContractFactory("RoboPunksNFT");
  const roboPunks = await RoboPunksNFT.deploy();

  await roboPunks.deployed();

  console.log("RoboPunksNFT deployed to:", roboPunks.address);
}

//contract address on Rinkeby
//0x4095E59d0203513ad7B28cA90Db3721dd06C15e2

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
