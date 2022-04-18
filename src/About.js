
import { useState } from "react";
import { Box, Button, Flex, Image, Link, Spacer,Text  } from "@chakra-ui/react";



const About = ({ accounts, setAccoutns }) => {

    return (
        <Flex justify={"center"} align={"center"} paddingBottom={"250px"} paddingTop={"200px"}>
            <Box width={"520px"}>
                <div>
         <Text fontSize={"30px"}
                        letterSpacing={"-5.5%"}
                        fontFamily={"VT323"}
                        textShadow={"0 2px 2px #000000"} id="About">Only One Dependency
            Your app only needs one build dependency. We test Create React
            App to make sure that all of its underlying pieces work together seamlessly – no complicated version mismatches.</Text>
            </div>
        </Box>
        </Flex>
    )

}

export default About;