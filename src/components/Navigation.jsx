import { Link as RouterLink } from "react-router-dom";
import {
  Flex,
  Image,
  Button,
  Box,
  Stack,
} from "@chakra-ui/react";

export const Navigation = () => {

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
          {/* Logo */}
          <RouterLink to="/">
            <Image
              src="/images/wildlotuslogo.png"
              alt="Wild Lotus Yoga Logo"
              maxH="80px"
              mx={{ base: "auto", md: "0" }}
            />
          </RouterLink>

          {/* Nav Buttons */}
          <Stack
            direction={{ base: "column", md: "row" }}
            spacing={{ base: 2, md: 4 }}
            align="center"
          >
            <Button
              as={RouterLink}
              to="/"
              variant="ghost"
              fontSize="lg"
              color="#245B41"
              _hover={{ bg: "transparent", color: "#88A179" }}
            >
              Home
            </Button>
            <Button
              as={RouterLink}
              to="/about-us"
              variant="ghost"
              fontSize="lg"
              color="#245B41"
              _hover={{ bg: "transparent", color: "#88A179" }}
            >
              About us
            </Button>
            <Button
              as={RouterLink}
              to="/events"
              variant="ghost"
              fontSize="lg"
              color="#245B41"
              _hover={{ bg: "transparent", color: "#88A179" }}
            >
              Events
            </Button>
            <Button
              as={RouterLink}
              to="/contact"
              variant="ghost"
              fontSize="lg"
              color="#245B41"
              _hover={{ bg: "transparent", color: "#88A179" }}
              pr={{ base: 0, md: 10 }}
            >
              Contact
            </Button>
          </Stack>
        </Flex>
      </Flex>

      {/* Spacer to avoid content under fixed nav */}
      <Box/>
    </>
  );
};
