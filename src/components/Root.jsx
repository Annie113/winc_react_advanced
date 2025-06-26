import { Outlet } from 'react-router-dom';
import { Navigation } from './Navigation';
import Footer from './Footer'; 
import { Box, Flex } from '@chakra-ui/react';

export const Root = () => {
  return (
    <Flex direction="column" minHeight="100vh">
      <Navigation />
      <Box flex="1">
        <Outlet />
      </Box>
      <Footer />
    </Flex>
  );
};
