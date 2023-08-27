import { Stack, HStack, VStack, Image, Box } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";

function Investment() {
  return (
    <>
      <Box>
        <Heading as="h2" size="xl" color="gray">
          Invest In Popular Categories
        </Heading>
      </Box>
      <Box border="3px solid blue" h="200px" display="flex">
        <Box border="2px solid red" h="90px" ></Box>
        <Box border="2px solid purple" h="90px" ></Box>
      </Box>
    </>
  );
}
export default Investment;
