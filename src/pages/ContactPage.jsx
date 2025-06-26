import {
  Box,
  Heading,
  Text,
  Stack,
  Input,
  Textarea,
  Button,
  FormControl,
  FormLabel,
  Container,
  SimpleGrid,
  Icon,
} from '@chakra-ui/react';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';

const ContactPage = () => {
  return (
    <Box minH="100vh" py={16}>
      <Container maxW="6xl">
        <Stack spacing={10} textAlign="center" mb={10}>
          <Heading size="2xl">Contact Us</Heading>
          <Text fontSize="lg" color="gray.600">
            We'd love to hear from you. Feel free to reach out with questions, feedback, or just to say hi!
          </Text>
        </Stack>

        <SimpleGrid columns={[1, null, 2]} spacing={10}>
          {/* Contact Form */}
          <Box bg="white" p={8} rounded="lg" boxShadow="0 10px 25px rgba(0, 0, 0, 0.1)">
            <Stack spacing={6}>
              <FormControl isRequired>
                <FormLabel>Name</FormLabel>
                <Input placeholder="Your full name" focusBorderColor="#b8bfb8" />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input type="email" placeholder="your@email.com" focusBorderColor="#b8bfb8" />
              </FormControl>
              <FormControl>
                <FormLabel>Message</FormLabel>
                <Textarea rows={5} placeholder="Write your message here..." focusBorderColor="#b8bfb8" />
              </FormControl>
              <Button size="lg">Send Message</Button>
            </Stack>
          </Box>

          {/* Contact Info */}
          <Box p={8}>
            <Stack spacing={6} fontSize="lg" color="gray.700">
              <Stack direction="row" align="center">
                <Icon as={MdLocationOn} boxSize={6} color="customGreen.500" />
                <Text>123 Zen Street, Tranquility City, CA 90210</Text>
              </Stack>
              <Stack direction="row" align="center">
                <Icon as={MdPhone} boxSize={6} color="customGreen.500" />
                <Text>+1 (555) 123-4567</Text>
              </Stack>
              <Stack direction="row" align="center">
                <Icon as={MdEmail} boxSize={6} color="customGreen.500" />
                <Text>info@wildlotusyoga.com</Text>
              </Stack>
            </Stack>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default ContactPage;
