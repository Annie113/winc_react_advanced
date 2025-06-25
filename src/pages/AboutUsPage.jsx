import {
  Box,
  Heading,
  Text,
  Stack,
  Image,
  SimpleGrid,
  Avatar,
  Container,
  Divider,
} from '@chakra-ui/react';

const instructors = [
  {
    name: 'Aria Patel',
    role: 'Lead Instructor',
    image: 'https://i.pravatar.cc/150?img=32',
  },
  {
    name: 'Liam Chen',
    role: 'Vinyasa Expert',
    image: 'https://i.pravatar.cc/150?img=45',
  },
  {
    name: 'Sophia Martinez',
    role: 'Hatha Yoga Instructor',
    image: 'https://i.pravatar.cc/150?img=56',
  },
];

const AboutUsPage = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        bgImage="url('https://images.unsplash.com/photo-1554311889-cf84b8b2ff29?auto=format&fit=crop&w=1950&q=80')"
        bgSize="cover"
        bgPosition="center"
        h="60vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        color="white"
        textAlign="center"
        px={4}
      >
        <Box bg="rgba(0, 0, 0, 0.6)" p={6} rounded="md">
          <Heading fontSize={['3xl', '4xl', '5xl']}>Welcome to ZenFlow Yoga Studio</Heading>
          <Text mt={4} fontSize="xl">
            Where breath meets movement and minds find peace.
          </Text>
        </Box>
      </Box>

      {/* About Section */}
      <Container maxW="6xl" py={12}>
        <Stack spacing={6} textAlign="center">
          <Heading size="xl">Our Story</Heading>
          <Text fontSize="lg">
            Wild Lotus was founded with a vision to create a sanctuary where people could reconnect with
            their bodies, minds, and spirits. Our instructors are passionate about guiding you through
            mindful movement, breathwork, and inner exploration.
          </Text>
          <Text fontSize="lg">
            Whether you're a beginner or an experienced yogi, our studio offers a welcoming and supportive
            space for everyone.
          </Text>
        </Stack>

        <Divider my={12} />

        {/* Team Section */}
        <Box textAlign="center">
          <Heading size="lg" mb={8}>Meet Our Instructors</Heading>
          <SimpleGrid columns={[1, 2, 3]} spacing={10}>
            {instructors.map((instructor, index) => (
              <Box key={index} textAlign="center">
                <Avatar size="2xl" src={instructor.image} mb={4} />
                <Text fontWeight="bold" fontSize="lg">{instructor.name}</Text>
                <Text color="gray.600">{instructor.role}</Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutUsPage;
