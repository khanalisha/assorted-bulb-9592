import { useRef } from "react";
import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Box, Center, Image } from "@chakra-ui/react";
import {
  Link as ChakraLink,
  LinkProps,
  Input,
  InputGroup,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import { SearchIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Link, Link as ReactRouterLink } from "react-router-dom";
import GrowingLogo from "../images/GrowingLogo.png";
import { transform } from "framer-motion";

function NavBBar() {
  //   const NavRef = useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  //   const showNavBar = () => {
  //     NavRef.current.classList.toggle("responsive_nav");
  //   };
  return (
    <Box
    //   border="2px solid red"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      className="header"
    >
      <Image
        boxSize="100px"
        objectFit="cover"
        src={GrowingLogo}
        alt="GrowingLogo"
        p="1rem"
      />
      <Box
        // border="2px solid black"
      
        position="fixed"
        t="0px"
        l="0px"
        display="flex"
        alignItems="center"
        gap="5rem"
        ml="10rem"
        justifyContent="center"

       
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
            w="15rem"
            size="md"
            pr="4.5rem"
            // ml="3rem"
            type="text"
            placeholder="Search..."
            // border="2px solid green"
          />
          <InputRightElement width="4.5rem" >
            <SearchIcon />
          </InputRightElement>
        </InputGroup>
        <Button colorScheme="blue" w="100%">
          Quick Invest
        </Button>
        <Button color="white" colorScheme="blue" w="50%">
          Login
        </Button>
      </Box>
     
      <Button
        ref={btnRef}
    
        bg="#4299E1"
        onClick={onOpen}
        display={{ base: "block", lg: "none" }}
      >
        <HamburgerIcon />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="top"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerBody
            display="flex"
            flexDirection="column"
            gap="2rem"
            justify-content="center"
            alignItems="center"
            bg="#4299E1"
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
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      {/* </Button> */}
    </Box>
  );
}

export default NavBBar;
