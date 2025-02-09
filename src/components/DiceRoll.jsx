import { useState } from "react";
import { Flex, Box, Button, Center } from "@chakra-ui/react";
import { FaDiceD20 } from "react-icons/fa";
import "@fontsource/poppins";

function DiceRoll() {
  const [number, setNumber] = useState();
  const generateRandomNumber = () => {
    setNumber(Math.floor(Math.random() * 20) + 1);
  };
  return (
    <Flex height="100vh" align="center" justify="center">
      <Box>
        <Box>
          <Center margin="5rem" fontSize="18rem">
            <FaDiceD20 />
          </Center>
        </Box>

        <Box
          position="absolute"
          top="49%"
          left="50%"
          transform="translate(-50%, -50%)"
        >
          <Center
            color="gray.950"
            fontFamily="Poppins"
            fontSize="2rem"
            fontWeight="bold"
          >
            <p>{number}</p>
          </Center>
        </Box>
        <Center>
          <Button variant="outline" onClick={generateRandomNumber}>
            Rolar Dado!
          </Button>
        </Center>
      </Box>
    </Flex>
  );
}

export default DiceRoll;
