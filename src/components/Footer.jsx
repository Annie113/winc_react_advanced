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
          direction={{ base: 'column', md: 'row' }}
          justify="space-between"
          align={{ base: 'flex-start', md: 'center' }}
        >
          <Text fontSize="sm" color="white" mb={{ base: 4, md: 0 }}>
            &copy; {new Date().getFullYear()} Wild Lotus Yoga. All rights reserved.
          </Text>

          <Stack
            direction={{ base: 'column', sm: 'row' }}
            spacing={{ base: 2, sm: 4 }}
            align={{ base: 'flex-start', sm: 'center' }}
          >
            <HStack spacing={4}>
              <Link href="https://facebook.com" isExterna color="white">
                <FaFacebookF size="16px" />
              </Link>
              <Link href="https://instagram.com" isExternal color="white">
                <FaInstagram size="16px" />
              </Link>
              <Link href="https://linkedin.com" isExternal color="white">
                <FaLinkedinIn size="16px" />
              </Link>
            </HStack>

            <HStack spacing={4} pt={{ base: 2, sm: 0 }}>
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
