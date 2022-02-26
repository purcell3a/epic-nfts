const main = async () => {

    // This will actually compile our contract and generate the necessary files we need to work with our contract under the artifacts directory.
    const nftContractFactory = await hre.ethers.getContractFactory('MyEpicNFT');

    // Hardhat will create a local Ethereum network for us, but just for this contract.
    const nftContract = await nftContractFactory.deploy();
    await nftContract.deployed();

    // Our constructor runs when we actually are fully deployed!
    console.log("Contract deployed to:", nftContract.address);


    // Call the function.
    let txn = await nftContract.makeAnEpicNFT()
    // Wait for it to be mined.
    await txn.wait()

    // Mint another NFT for fun.
    txn = await nftContract.makeAnEpicNFT()
    // Wait for it to be mined.
    await txn.wait()
  };

const runMain = async () => {
try {
    await main();
    process.exit(0);
} catch (error) {
    console.log(error);
    process.exit(1);
}
};

runMain();