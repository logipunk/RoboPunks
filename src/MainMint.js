import { useState } from "react";
import { ethers, BigNumber } from "ethers";
import roboPunksNFT from './RoboPunksNFT.json';
import { Box, Button, color, Flex, Input, Text } from "@chakra-ui/react";

//Rinkeby contract address
const roboPunksNFTaddress = "0x4095E59d0203513ad7B28cA90Db3721dd06C15e2";

const MainMint = ({ accounts, setAccounts }) => {
    const [mintAmount, setMintAmount] = useState(1);
    const isConnected = Boolean(accounts[0]);


    async function handleMint() {
        if (window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum); //this line lets ethers connect to blockchain 
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
                roboPunksNFTaddress,
                roboPunksNFT.abi,
                signer
            );//this variable connects to the contract 

            try {
                const response = await contract.mint(BigNumber.from(mintAmount),
                {
                    value: ethers.utils.parseEther((0.001 * mintAmount).toString())
                }); //here we call the contract mint function
                console.log('response: ', response);
            } catch (err) {
                console.log("error: ", err);
            }

        }
    };

    const handleDecrement = () => {
        if (mintAmount <= 1) return;
        setMintAmount(mintAmount - 1);
    };

    const handleIncrement = () => {
        if (mintAmount >= 3) return;
        setMintAmount(mintAmount + 1);
    };

    return (
        <Flex justify={"center"} align={"center"}  paddingBottom={"150px"} paddingTop={"200px"}>
            <Box width={"520px"}>
                <div>
                    <Text fontSize="48px" textShadow="0 5px #000000">Get Your Green Pill</Text>
                    <Text fontSize={"30px"}
                        letterSpacing={"-5.5%"}
                        fontFamily={"VT323"}
                        textShadow={"0 2px 2px #000000"}>It's 2078. Can the RoboPunks NFT save humans from 
                        destructive rampant NFT speculation? Mint Robopunks to find out.
                        vIt's 2078. Can the RoboPunks NFT save humans from 
                        destructive rampant NFT speculation? Mint Robopunks to find out.
                        It's 2078. Can the RoboPunks NFT save humans from 
                        destructive rampant NFT speculation? Mint Robopunks to find out.
                        It's 2078. Can the RoboPunks NFT save humans from 
                        destructive rampant NFT speculation? Mint Robopunks to find out.
                        It's 2078. Can the RoboPunks NFT save humans from 
                        destructive rampant NFT speculation? Mint Robopunks to find out.
                        It's 2078. Can the RoboPunks NFT save humans from 
                        destructive rampant NFT speculation? Mint Robopunks to find out.</Text>
                </div>
                {isConnected ? (
                    <div>
                        <Flex justify={"center"} align={"center"} >
                            <Button backgroundColor={"#D6517D"}
                                borderRadius={"5px"}
                                boxShadow={"0px 2px 2px 1px #0F0F0F"}
                                color={"white"}
                                cursor={"pointer"}
                                fontFamily={"inherit"}
                                padding={"15px"}
                                margin={"0 15px"}
                                onClick={handleDecrement}
                                position={"static"}>-</Button>
                            <Input
                                readOnly
                                fontFamily={"inherit"}
                                width={"100px"}
                                height={"40px"}
                                textAlign={"center"}
                                paddingLeft={"19px"}
                                marginTop={"10px"}
                                type="number"
                                value={mintAmount} />
                            <Button backgroundColor={"#D6517D"}
                                borderRadius={"5px"}
                                boxShadow={"0px 2px 2px 1px #0F0F0F"}
                                color={"white"}
                                cursor={"pointer"}
                                fontFamily={"inherit"}
                                padding={"15px"}
                                margin={"0 15px"}
                                onClick={handleIncrement}
                                position={"static"}>+</Button>
                        </Flex>
                        <Button backgroundColor={"#D6517D"}
                            borderRadius={"5px"}
                            boxShadow={"0px 2px 2px 1px #0F0F0F"}
                            color={"white"}
                            cursor={"pointer"}
                            fontFamily={"inherit"}
                            padding={"15px"}
                            margin={"0 15px"} 
                            onClick={handleMint}
                            position={"static"}>Mint Your GreenPill</Button>
                    </div>
                ) : (
                    <Text 
                    marginTop={"70px"}
                    fontSize={"30px"}
                    letterSpacing={"-5.5%"}
                    fontFamily={"VT323"}
                    textShadow={"0 3px #000000"}
                    color={"#D6517D"}>You must be connected to Mint.</Text>
                )}
            </Box>
        </Flex>
    );
};

export default MainMint;
