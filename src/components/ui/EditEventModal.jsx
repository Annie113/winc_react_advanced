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
    categories: [],
  });
  const [isSaving, setIsSaving] = useState(false);
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
        categories: event.categories || [],
      });
    }
  }, [event]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        name === 'categories'
          ? value
              .split(',')
              .map((cat) => cat.trim())
              .filter((cat) => cat !== '')
          : value,
    }));
  };

  const handleSubmit = async () => {
    const API = (import.meta.env.VITE_API_URL || '').replace(/\/+$/, '');

    if (!event?.id) {
      toast({ title: 'No event selected.', status: 'error', duration: 3000 });
      return;
    }
    if (!API) {
      toast({
        title: 'Missing API URL',
        description: 'VITE_API_URL is not set (Netlify env vars / .env).',
        status: 'error',
        duration: 3000,
      });
      return;
    }

    setIsSaving(true);
    try {
      const res = await fetch(`${API}/events/${event.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error(`HTTP ${res.status} ${res.statusText}`);
      }

      const updatedEvent = await res.json();
      if (typeof onSave === 'function') onSave(updatedEvent);

      toast({ title: 'Event updated.', status: 'success', duration: 3000 });
      onClose();
    } catch (err) {
      console.error('Error updating event:', err);
      toast({ title: 'Error updating event.', status: 'error', duration: 3000 });
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
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
          </FormControl>

          <FormControl mb={3}>
            <FormLabel>Categories (comma-separated)</FormLabel>
            <Input
              name="categories"
              value={formData.categories.join(', ')}
              onChange={handleChange}
              placeholder="e.g. Music, Outdoor, Family"
              focusBorderColor="#b8bfb8"
              variant="filled"
            />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button onClick={onClose} mr={3} isDisabled={isSaving}>
            Cancel
          </Button>
          <Button onClick={handleSubmit} isLoading={isSaving}>
            Save
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default EditEventModal;
