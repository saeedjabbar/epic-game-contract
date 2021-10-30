const main = async () => {
  //compile contract
  const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
  //create local blockchain and deploy
  const gameContract = await gameContractFactory.deploy(
    ["Meowth", "Charizard", "Bulbasaur"],       // Names
    ["https://i.imgur.com/Q90mY2o.gif", // Images
      "https://i.imgur.com/ycKfK3x.gif",
      "https://i.imgur.com/jwub4R5.gif"],
    [100, 100, 100],                    // HP values
    [3, 2, 4],                       // Attack damage values
    "Bob Sponge", // Boss name
    "https://i.imgur.com/XqQ2Wps.gif", // Boss image
    100, // Boss hp
    3 // Boss attack damage
  );
    //mine and deploy contract
    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);

    // Get the value of the NFT's URI. // meta deta
    // let returnedTokenUri = await gameContract.tokenURI(1);
    // console.log("Token URI:", returnedTokenUri);

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