import {
  Box,
  Heading,
  Text,
  Stack,
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
      {/* Image Section */}
      <Box
        bgImage="url('https://github.com/Annie113/winc_react_advanced/blob/main/public/images/aboutus.jpg?raw=true')"
        bgSize="cover"
        bgPosition="center"
        h="20vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        color="white"
        textAlign="center"
        px={4}
      >
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
