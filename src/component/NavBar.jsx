import { Stack, HStack, VStack, Image, Box, Center } from "@chakra-ui/react";
import GrowingLogo from "../component/images/GrowingLogo.png";

import { Link, Link as ReactRouterLink } from "react-router-dom";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { Link as ChakraLink, LinkProps } from "@chakra-ui/react";
import { IconName, DiApple } from "react-icons/di";
import { extendTheme } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

// const breakpoints = {
//   base: '0em',
//   sm: '30em',
//   md: '48em',
//   lg: '62em',
//   xl: '80em',
//   '2xl': '96em',
// }

function NavBar() {
  return (
    <Box border="2px solid red" display="flex" h="6rem">
      <Box border="2px solid Black" w="80px" ml="20px">
        <Image src={GrowingLogo} alt="GrowingLogo" />
      </Box>
      <Box
        border="2px solid blue"
        display="flex"
        // justifyContent="space-between"
        mt="2rem"
        gap="60px"
        ml="129px"
        mb="18px"
      >
        <Link as={ReactRouterLink} to="/">
          DASHBOARD
        </Link>

        <Link as={ReactRouterLink} to="/investment">
          INVESTMENTS
        </Link>
        <Link as={ReactRouterLink} to="/insurance">
          INSURANCE
        </Link>
        <Link as={ReactRouterLink} to="/loans">
          LOANS
        </Link>
        <InputGroup size="md">
          <Input
            // w="300px"
            size="md"
            pr="4.5rem"
            type="text"
            placeholder="Search..."
            border="2px solid green"
          />
          <InputRightElement
            width="4.5rem"
            // mr="1.2rem"
            border="2px solid blue"
          >
            <SearchIcon />
          </InputRightElement>
        </InputGroup>

        <Stack direction="row" spacing={4}>
          <Button colorScheme="teal" variant="solid" size="md" w="9rem">
            Quick Invest
          </Button>
          <Button color="white" colorScheme="blue" w="5rem">
            Login
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}
export default NavBar;
