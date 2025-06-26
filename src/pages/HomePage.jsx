import { Flex, Image, VStack } from '@chakra-ui/react';
import GoToEventsButton from '/src/components/Buttons/GoToEventsButton.jsx';

export const HomePage = () => {
  return (
    <Flex
      minH="100vh"
      justify="center"
      align="flex-start"  
      px={2}
      pt={{ base: 20, md: 20, lg: 150 }}  
      bgImage="url('/images/backgroundsand.jpg')"
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
    >
      <VStack spacing={6}>
        <Image
          src="/images/wildlotuslogo.png"
          alt="Wild Lotus Yoga Logo"
          maxW="500px"
          mx="auto"
        />
        <GoToEventsButton />
      </VStack>
    </Flex>
  );
};
