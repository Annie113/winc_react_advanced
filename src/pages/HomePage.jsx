import { Flex, Heading, Text, VStack } from '@chakra-ui/react';
import GoToEventsButton from '/src/components/Buttons/GoToEventsButton.jsx';

export const HomePage = () => {
  return (
    <Flex
      minH="100vh"
      justify="center"
      align="flex-start"  
      px={2}
      pt={{ base: 20, md: 20, lg: 150 }}  
      bgImage="url('/images/bg-home.jpg')"
      bgSize="cover"
      bgPosition={{ base: "70% 70%", md: "center" }}
      bgRepeat="no-repeat"
    >
      <VStack spacing={1}>
        {/* --------SUB TEXT ABOVE HEADING-------- */}
        <Text
          color="#646257"
          textAlign="center"
          fontSize={{ base: "sm", md: "md" }}
          fontWeight="600"
          textTransform="uppercase"
          letterSpacing="0.18em"
          fontSize="1.3rem"
         >
    Come join us at
  </Text>
        {/* --------HEADING-------- */}
        <Heading
          fontFamily="'Roboto', system-ui, sans-serif"
          as="h1"
          fontSize={{ base: '4xl', md: '6xl', lg: '7xl' }}
          color="#245B41"
          textTransform="uppercase"
          textAlign="center"
          fontWeight="bold"
          pb={3}
        >
          Wild Lotus Yoga
        </Heading>
        <GoToEventsButton />
      </VStack>
    </Flex>
  );
};
