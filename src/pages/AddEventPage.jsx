import React, { useState } from 'react';
import {
  Container,
  Heading,
  Input,
  Textarea,
  Button,
  FormControl,
  FormLabel,
  VStack,
  Text,
  Image,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export const AddEventPage = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    startTime: '',
    endTime: '',
    location: '',
    image: '',
    categories: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    const { title, date, startTime, endTime, location } = formData;

    if (!title || !date || !startTime || !endTime || !location) {
      setError('Please fill in all required fields.');
      return;
    }

    const newEvent = {
      ...formData,
      categories: formData.categories
        .split(',')
        .map((c) => c.trim())
        .filter((c) => c !== ''),
    };

    try {
      const response = await fetch(`${API}/events`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newEvent),
      });

      if (!response.ok) {
        throw new Error('Failed to add event');
      }

      const data = await response.json();
      console.log('Event added:', data);

      setSuccess('Event added successfully!');
      setFormData({
        author: '',
        title: '',
        description: '',
        date: '',
        startTime: '',
        endTime: '',
        location: '',
        image: '',
        categories: '',
      });

      // Redirect after short delay (optional)
      setTimeout(() => navigate('/events'), 1000);
    } catch (error) {
      console.error('Error adding event:', error);
      setError('An error occurred while adding the event.');
    }
  };

  return (
    <Container maxW="600px">
      <Heading mb={6}>Add New Event</Heading>

      {error && <Text color="red.500" mb={2}>{error}</Text>}
      {success && <Text color="green.500" mb={2}>{success}</Text>}

      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <FormControl isRequired>
            <FormLabel>Author</FormLabel>
            <Input
              name="author"
              value={formData.title}
              onChange={handleChange}
              focusBorderColor="#b8bfb8"
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Title</FormLabel>
            <Input
              name="title"
              value={formData.title}
              onChange={handleChange}
              focusBorderColor="#b8bfb8"
            />
          </FormControl>

          <FormControl>
            <FormLabel>Description</FormLabel>
            <Textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              focusBorderColor="#b8bfb8"
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Date</FormLabel>
            <Input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              focusBorderColor="#b8bfb8"
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Start Time</FormLabel>
            <Input
              type="time"
              name="startTime"
              value={formData.startTime}
              onChange={handleChange}
              focusBorderColor="#b8bfb8"
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>End Time</FormLabel>
            <Input
              type="time"
              name="endTime"
              value={formData.endTime}
              onChange={handleChange}
              focusBorderColor="#b8bfb8"
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Location</FormLabel>
            <Input
              name="location"
              value={formData.location}
              onChange={handleChange}
              focusBorderColor="#b8bfb8"
            />
          </FormControl>

          <FormControl>
            <FormLabel>Image URL</FormLabel>
            <Input
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="https://example.com/image.jpg"
              focusBorderColor="#b8bfb8"
            />
          </FormControl>

          {formData.image && (
            <Image
              src={formData.image}
              alt="Event"
              borderRadius="md"
              objectFit="cover"
              width="100%"
              maxH="200px"
            />
          )}

          <FormControl>
            <FormLabel>Categories (comma separated)</FormLabel>
            <Input
              name="categories"
              value={formData.categories}
              onChange={handleChange}
              focusBorderColor="#b8bfb8"
              mb={5}
            />
          </FormControl>

          <Button
            type="submit"
            width="full"
          >
            Submit Event
          </Button>
        </VStack>
      </form>
    </Container>
  );
};
