const main = async () => {
  //compile contract
  const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
  //create local blockchain and deploy
  const gameContract = await gameContractFactory.deploy(
    ["Meowth", "Charizard", "Bulbasaur"],       // Names
    ["https://i.imgur.com/Q90mY2o.gif", // Images
      "https://i.imgur.com/ycKfK3x.gif",
      "https://i.imgur.com/jwub4R5.gif"],
    [100, 200, 300],                    // HP values
    [100, 50, 25],                       // Attack damage values
    "Bob Sponge", // Boss name
    "https://i.imgur.com/XqQ2Wps.gif", // Boss image
    10000, // Boss hp
    50 // Boss attack damage
  );
  //mine and deploy contract
  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);

  let txn;
  txn = await gameContract.mintCharacterNFT(2);
  await txn.wait();

  txn = await gameContract.attackBoss();
  await txn.wait();

  txn = await gameContract.attackBoss();
  await txn.wait();

  // Get the value of the NFT's URI. // meta deta
  let returnedTokenUri = await gameContract.tokenURI(1);
  console.log("Token URI:", returnedTokenUri);

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