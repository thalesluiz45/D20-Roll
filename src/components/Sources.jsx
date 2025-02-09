import { Box, Link } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";

function Sources() {
  return (
    <Box position="fixed" bottom="20px" left="20px">
      <Link
        href="https://github.com/thalesluiz45"
        target="_blank"
        fontSize="2rem"
      >
        <FaGithub />
      </Link>
    </Box>
  );
}

export default Sources;
