// Footer.jsx
import { Box, Flex, Text, Link, HStack } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <Box height="64px" />
      <Box as="footer" bg="customGreen.500" paddingX={6} paddingY={6} mt="auto">
        <Flex
          maxW="1200px"
          px="4"
          mx="auto"
          width="100%"
          justify="space-between"
          align="center"
          wrap="wrap"
        >
          <Text fontSize="sm" color="white">
            &copy; {new Date().getFullYear()} Wild Lotus Yoga. All rights reserved.
          </Text>

          <HStack spacing={4}>
            <Link href="https://facebook.com" isExternal variant="social">
              <FaFacebookF size="16px" />
            </Link>
            <Link href="https://instagram.com" isExternal variant="social">
              <FaInstagram size="16px" />
            </Link>
            <Link href="https://linkedin.com" isExternal variant="social" pr={4}>
              <FaLinkedinIn size="16px" />
            </Link>

            <Link as={RouterLink} to="/privacy" fontSize="sm" variant="social">
              Privacy
            </Link>
            <Link as={RouterLink} to="/terms" fontSize="sm" variant="social">
              Terms
            </Link>
          </HStack>
        </Flex>
      </Box>
    </>
  );
};

export default Footer;
