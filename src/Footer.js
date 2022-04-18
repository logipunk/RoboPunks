import React from "react";
import { Box, Button, Flex, Image, Link, Spacer  } from "@chakra-ui/react";
import Facebook from "./assets/social-media-icons/facebook_32x32.png"

const Footer = ({accounts, setAccounts}) =>{

    return(

        <Flex className="footer"  align="flex-end" padding={"30px"}>
            {/*./NavBar Left side - Social Media Icons */}
            <Flex justify={"space-around"} width={"100%"} padding={"0 5px"}>
                <Spacer/>
                <Link href="https://www.facebook.com">
                    <Image src={Facebook} boxSize={"42px"} margin={"0 15px"}/>
                </Link>
                </Flex>
               
        </Flex>
    )



}

export default Footer;