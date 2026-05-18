import { Box, Flex, Text, Link, HStack, Stack } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <Box/>
      <Box as="footer" bg="customGreen.500" px={6} py={6} mt="auto">
<Flex
  maxW="1200px"
  px={4}
  mx="auto"
  w="100%"
  direction={{ base: "column", md: "row" }}
  justify="space-between"
  align={{ base: "center", md: "center" }}
  gap={{ base: 5, md: 0 }}
>
  <Text
    fontSize="sm"
    color="white"
    textAlign={{ base: "center", md: "left" }}
    mb={0}
  >
    &copy; {new Date().getFullYear()} Wild Lotus Yoga. All rights reserved.
  </Text>

      <Stack
        direction="row"
        align="center"
        justify={{ base: "center", md: "flex-end" }}
        spacing={{ base: 8, md: 4 }}
        w={{ base: "100%", md: "auto" }}
      >
      <HStack spacing={4}>
        <Link href="https://facebook.com" isExternal color="white">
          <FaFacebookF size="18px" />
        </Link>
        <Link href="https://instagram.com" isExternal color="white">
          <FaInstagram size="18px" />
        </Link>
        <Link href="https://linkedin.com" isExternal color="white">
          <FaLinkedinIn size="18px" />
        </Link>
      </HStack>

      <HStack spacing={5}>
        <Link as={RouterLink} to="/privacy" fontSize="sm" color="white">
          Privacy
        </Link>
        <Link as={RouterLink} to="/terms" fontSize="sm" color="white">
          Terms
        </Link>
       </HStack>
      </Stack>
  </Flex>
      </Box>
    </>
  );
};

export default Footer;
