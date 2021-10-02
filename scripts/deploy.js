const main = async () => {
    const [deployer] = await hre.ethers.getSigners();
    const accountBalance = await deployer.getBalance();

    console.log('Deploying contracts with account: ', deployer.address);
    console.log('Account balance ', accountBalance.toString());

    const Token = await hre.ethers.getContractFactory('WavePortal');
    const portal = await Token.deploy();

    console.log('WavePortal adress: ', portal.address);
};

const runMain = async () => {
    try {
        await main();
        process.exit();
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

runMain();