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
    image: '', // ✅ now stores image URL
    categories: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newEvent = {
      ...formData,
      categories: formData.categories.split(',').map((c) => c.trim()),
    };

    try {
      const response = await fetch('http://localhost:3000/events', {
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

      navigate('/events');
    } catch (error) {
      console.error('Error adding event:', error);
    }
  };

  return (
    <Container maxW="600px" mt={8}>
      <Heading mb={6}>Add New Event</Heading>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <FormControl isRequired>
            <FormLabel>Title</FormLabel>
            <Input name="title" value={formData.title} onChange={handleChange} />
          </FormControl>

          <FormControl>
            <FormLabel>Description</FormLabel>
            <Textarea name="description" value={formData.description} onChange={handleChange} />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Date</FormLabel>
            <Input type="date" name="date" value={formData.date} onChange={handleChange} />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Start Time</FormLabel>
            <Input type="time" name="startTime" value={formData.startTime} onChange={handleChange} />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>End Time</FormLabel>
            <Input type="time" name="endTime" value={formData.endTime} onChange={handleChange} />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Location</FormLabel>
            <Input name="location" value={formData.location} onChange={handleChange} />
          </FormControl>

          {/* ✅ Image URL Input */}
          <FormControl>
            <FormLabel>Image URL</FormLabel>
            <Input name="image" value={formData.image} onChange={handleChange} placeholder="https://example.com/image.jpg" />
          </FormControl>

          <FormControl>
            <FormLabel>Categories (comma separated)</FormLabel>
            <Input name="categories" value={formData.categories} onChange={handleChange} />
          </FormControl>

          <Button type="submit" colorScheme="teal" width="full">
            Submit
          </Button>
        </VStack>
      </form>
    </Container>
  );
};
