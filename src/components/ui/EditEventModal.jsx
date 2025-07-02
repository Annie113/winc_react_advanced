import React, { useState, useEffect } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  Button,
  Input,
  Textarea,
  FormControl,
  FormLabel,
  useToast,
  Image,
} from '@chakra-ui/react';

const EditEventModal = ({ isOpen, onClose, event, onSave }) => {
  const [formData, setFormData] = useState({
    author: '',
    title: '',
    description: '',
    date: '',
    startTime: '',
    endTime: '',
    location: '',
    image: '',
    categories: '', // now a string
  });

  const [loading, setLoading] = useState(false);
  const toast = useToast();

  useEffect(() => {
    if (event) {
      setFormData({
        author: event.author || '',
        title: event.title || '',
        description: event.description || '',
        date: event.date || '',
        startTime: event.startTime || '',
        endTime: event.endTime || '',
        location: event.location || '',
        image: event.image || '',
        categories: (event.categories || []).join(', '), // join array to string
      });
    }
  }, [event]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const payload = {
        ...formData,
        categories: formData.categories
          .split(',')
          .map((cat) => cat.trim())
          .filter((cat) => cat !== ''),
      };

      const res = await fetch(`http://localhost:3000/events/${event.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error('Failed to update event');

      const updatedEvent = await res.json();
      onSave(updatedEvent);
      toast({ title: 'Event updated.', status: 'success', duration: 3000 });
      onClose();
    } catch {
      toast({ title: 'Error updating event.', status: 'error', duration: 3000 });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit Event</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl mb={3}>
            <FormLabel>Author</FormLabel>
            <Input
              name="author"
              value={formData.author}
              onChange={handleChange}
              focusBorderColor="#b8bfb8"
              variant="filled"
            />
          </FormControl>

          <FormControl mb={3}>
            <FormLabel>Title</FormLabel>
            <Input
              name="title"
              value={formData.title}
              onChange={handleChange}
              focusBorderColor="#b8bfb8"
              variant="filled"
            />
          </FormControl>

          <FormControl mb={3}>
            <FormLabel>Description</FormLabel>
            <Textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              focusBorderColor="#b8bfb8"
              variant="filled"
            />
          </FormControl>

          <FormControl mb={3}>
            <FormLabel>Date</FormLabel>
            <Input
              name="date"
              type="date"
              value={formData.date}
              onChange={handleChange}
              focusBorderColor="#b8bfb8"
              variant="filled"
            />
          </FormControl>

          <FormControl mb={3}>
            <FormLabel>Start Time</FormLabel>
            <Input
              name="startTime"
              type="time"
              value={formData.startTime}
              onChange={handleChange}
              focusBorderColor="#b8bfb8"
              variant="filled"
            />
          </FormControl>

          <FormControl mb={3}>
            <FormLabel>End Time</FormLabel>
            <Input
              name="endTime"
              type="time"
              value={formData.endTime}
              onChange={handleChange}
              focusBorderColor="#b8bfb8"
              variant="filled"
            />
          </FormControl>

          <FormControl mb={3}>
            <FormLabel>Location</FormLabel>
            <Input
              name="location"
              value={formData.location}
              onChange={handleChange}
              focusBorderColor="#b8bfb8"
              variant="filled"
            />
          </FormControl>

          <FormControl mb={3}>
            <FormLabel>Image URL</FormLabel>
            <Input
              name="image"
              value={formData.image}
              onChange={handleChange}
              focusBorderColor="#b8bfb8"
              variant="filled"
            />
            {formData.image && (
              <Image
                src={formData.image}
                alt="Event preview"
                mt={3}
                borderRadius="md"
                maxHeight="200px"
                objectFit="cover"
              />
            )}
          </FormControl>

          <FormControl mb={3}>
            <FormLabel>Categories (comma-separated)</FormLabel>
            <Input
              name="categories"
              value={formData.categories}
              onChange={handleChange}
              placeholder="e.g. Music, Outdoor, Family"
              focusBorderColor="#b8bfb8"
              variant="filled"
            />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button onClick={onClose} mr={3} isDisabled={loading}>
            Cancel
          </Button>
          <Button onClick={handleSubmit} colorScheme="teal" isLoading={loading}>
            Save
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default EditEventModal;
