import { Link as RouterLink } from "react-router-dom";
import { Flex, Image, HStack, Button, Box, Link } from "@chakra-ui/react";

export const Navigation = () => {
  return (
    <>
      <Flex
        as="nav"
        bg="white"
        boxShadow="md"
        position="fixed"
        top={0}
        left={0}
        right={0}
        zIndex={10}
        paddingX={4}
        paddingY={4}
      >
        <Flex
          maxW="1200px"
          mx="auto"
          width="100%"
          align="center"
          justify="space-between"
          wrap="wrap"
        >
          {/* Logo wrapped in RouterLink */}
            <Image
              src="/images/wildlotuslogo.png"
              alt="Wild Lotus Yoga Logo"
              maxH="100px"
              cursor="pointer"
            />

          {/* Navigation Buttons */}
          <HStack spacing={4}>
            <Button
              as={RouterLink}
              to="/"
              variant="ghost"
              color="#245B41"
              _hover={{ bg: "transparent", color: "#88A179" }}
            >
              Home
            </Button>
            <Button
              as={RouterLink}
              to="/"
              variant="ghost"
              color="#245B41"
              _hover={{ bg: "transparent", color: "#88A179" }}
            >
              About us
            </Button>
            <Button
              as={RouterLink}
              to="/events"
              variant="ghost"
              color="#245B41"
              _hover={{ bg: "transparent", color: "#88A179" }}
            >
              Events
            </Button>
            <Button
              as={RouterLink}
              to="/"
              variant="ghost"
              color="#245B41"
              _hover={{ bg: "transparent", color: "#88A179" }}
              pr={10}
            >
              Contact
            </Button>
          </HStack>
        </Flex>
      </Flex>

      <Box height="64px" />
    </>
  );
};
