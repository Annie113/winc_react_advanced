import { Link as RouterLink } from "react-router-dom";
import {
  Flex,
  Image,
  Button,
  Box,
  Stack,
  IconButton,
  Collapse,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

export const Navigation = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
     {/* --------NAVIGATION FLEXBOX------- */}
      <Flex
        as="nav"
        bg="white"
        boxShadow="md"
        top={0}
        left={0}
        right={0}
        zIndex={10}
        px={{ base: 5, md: 4 }}
        py={{ base: 3, md: 4 }}
      >
     {/* --------TABLET/DESKTOP NAVIGATION FLEXBOX------- */}
      <Flex
        maxW="1200px"
        mx="auto"
        w="100%"
        align="center"
        justify="space-between"
        direction={{ base: "column", md: "row" }}
        gap={{ base: 4, md: 0 }}
      >
      <Flex
        w={{ base: "100%", md: "auto" }}
        align="center"
        justify="space-between"
      >
      {/* --------LOGO------- */}       
      <RouterLink to="/">
        <Image
          src="/images/wildlotuslogo.png"
          alt="Wild Lotus Yoga Logo"
          maxH={{ base: "100px", md: "120px" }}
          pl={{ base: 0, xl: 3 }}
         />
      </RouterLink>

      {/* --------HAMBURGER MENU-------- */}
      <IconButton
         display={{ base: "flex", md: "none" }}
         aria-label="Open menu"
         icon={
           isOpen ? (
            <CloseIcon boxSize={3.5} />
          ) : (
            <HamburgerIcon boxSize={6} />
          )
        }
        variant="ghost"
        color="#245B41"
        onClick={onToggle}
        h="44px"
        w="44px"
        _hover={{ bg: "transparent" }}
        _active={{ bg: "transparent" }}
        _focus={{ boxShadow: "none" }}
        />
      </Flex>
      {/* --------DESKTOP NAVIGATION MENU------- */}      
          <Stack
            direction={{ base: "column", md: "row" }}
            spacing={{ base: 2, md: 4 }}
            align="center"
            display={{ base: "none", md: "flex" }}
          >
            <Button as={RouterLink} to="/" variant="ghost" fontSize="lg" color="#245B41" _hover={{ bg: "transparent", color: "#88A179" }}>
              Home
            </Button>
            <Button as={RouterLink} to="/about-us" variant="ghost" fontSize="lg" color="#245B41" _hover={{ bg: "transparent", color: "#88A179" }}>
              About us
            </Button>
            <Button as={RouterLink} to="/events" variant="ghost" fontSize="lg" color="#245B41" _hover={{ bg: "transparent", color: "#88A179" }}>
              Events
            </Button>
            <Button as={RouterLink} to="/contact" variant="ghost" fontSize="lg" color="#245B41" _hover={{ bg: "transparent", color: "#88A179" }}>
              Contact
            </Button>
          </Stack>

       {/* --------MOBILE NAVIGATION BUTTONS-------- */}

<Collapse in={isOpen} animateOpacity style={{ width: "100%" }}>
  <Stack
    display={{ base: "flex", md: "none" }}
    direction="column"
    spacing={2}
    w="100%"
    align="flex-start"
    pl={0}
  >
    <Button
      as={RouterLink}
      to="/"
      variant="ghost"
      fontSize="lg"
      color="#245B41"
      onClick={onToggle}
      px={0}
      justifyContent="flex-start"
    >
      Home
    </Button>

    <Button
      as={RouterLink}
      to="/about-us"
      variant="ghost"
      fontSize="lg"
      color="#245B41"
      onClick={onToggle}
      px={0}
      justifyContent="flex-start"
    >
      About us
    </Button>

    <Button
      as={RouterLink}
      to="/events"
      variant="ghost"
      fontSize="lg"
      color="#245B41"
      onClick={onToggle}
      px={0}
      justifyContent="flex-start"
    >
      Events
    </Button>

    <Button
      as={RouterLink}
      to="/contact"
      variant="ghost"
      fontSize="lg"
      color="#245B41"
      onClick={onToggle}
      px={0}
      justifyContent="flex-start"
    >
      Contact
    </Button>
  </Stack>
</Collapse>
        </Flex>
      </Flex>

      <Box />
    </>
  );
};