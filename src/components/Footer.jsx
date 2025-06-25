import { Box, Flex, Text, Link, HStack } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <Box height="64px" />
      <Box
        as="footer"
        bg="#245b41"
        paddingX={6}
        paddingY={6}
        mt="auto"
      >
        <Flex
          maxW="1200px"
          px="4"
          mx="auto"
          width="100%"
          justify="space-between"
          align="center"
          wrap="wrap"
        >
          <Text fontSize="sm" color="#fff">
            &copy; {new Date().getFullYear()} Wild Lotus Yoga. All rights reserved.
          </Text>

          <HStack spacing={4}>
            {/* Social Media Icons */}
            <Link
              href="https://facebook.com"
              isExternal
              color="#fff"
              _hover={{ color: "#dadbdd" }}
            >
              <FaFacebookF size="16px" />
            </Link>
            <Link
              href="https://instagram.com"
              isExternal
              color="#fff"
              _hover={{ color: "#dadbdd" }}
            >
              <FaInstagram size="16px" />
            </Link>
            <Link
              href="https://linkedin.com"
              isExternal
              color="#fff"
              _hover={{ color: "#dadbdd" }}
              pr={15}
            >
              <FaLinkedinIn size="16px" />
            </Link>

            {/* Footer Navigation Links */}
            <Link
              as={RouterLink}
              to="/privacy"
              fontSize="sm"
              color="#fff"
              _hover={{ color: "#dadbdd" }}
            >
              Privacy
            </Link>
            <Link
              as={RouterLink}
              to="/terms"
              fontSize="sm"
              color="#fff"
              _hover={{ color: "#dadbdd" }}
            >
              Terms
            </Link>
          </HStack>
        </Flex>
      </Box>
    </>
  );
};

export default Footer;
