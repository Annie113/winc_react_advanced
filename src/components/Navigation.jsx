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
      <Flex
        as="nav"
        bg="white"
        boxShadow="md"
        top={0}
        left={0}
        right={0}
        zIndex={10}
        px={4}
        py={4}
      >

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
            <RouterLink to="/">
              <Image
                src="/images/wildlotuslogo.png"
                alt="Wild Lotus Yoga Logo"
                maxH="120px"
              />
            </RouterLink>

            {/* --------HAMBURG MENU-------- */}

            <IconButton
                display={{ base: "flex", md: "none" }}
                aria-label="Open menu"
                icon={
                  isOpen ? (
                    <CloseIcon boxSize={4} />
                  ) : (
                    <HamburgerIcon boxSize={7} />
                  )
                }
                variant="ghost"
                color="#245B41"
                onClick={onToggle}
                h="56px"
                w="56px"
            />
          </Flex>

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

          <Collapse in={isOpen} animateOpacity>
            <Stack
              display={{ base: "flex-start", md: "none" }}
              direction="column"
              spacing={2}
              w="50%"
              pl={5}
            >
              <Button as={RouterLink} to="/" variant="ghost" fontSize="lg" color="#245B41" onClick={onToggle}>
                Home
              </Button>
              <Button as={RouterLink} to="/about-us" variant="ghost" fontSize="lg" color="#245B41" onClick={onToggle}>
                About us
              </Button>
              <Button as={RouterLink} to="/events" variant="ghost" fontSize="lg" color="#245B41" onClick={onToggle}>
                Events
              </Button>
              <Button as={RouterLink} to="/contact" variant="ghost" fontSize="lg" color="#245B41" onClick={onToggle}>
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