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
  const [formData, setFormData] = useState(event || {});
  const toast = useToast();

  useEffect(() => {
    setFormData(event || {});
  }, [event]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      const res = await fetch(`http://localhost:3000/events/${event.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error('Failed to update event');

      const updatedEvent = await res.json();
      onSave(updatedEvent);
      toast({ title: 'Event updated.', status: 'success', duration: 3000 });
      onClose();
    } catch (err) {
      toast({ title: 'Error updating event.', status: 'error', duration: 3000 });
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
            <FormLabel>Title</FormLabel>
            <Input name="title" value={formData.title || ''} onChange={handleChange} />
          </FormControl>
          <FormControl mb={3}>
            <FormLabel>Description</FormLabel>
            <Textarea name="description" value={formData.description || ''} onChange={handleChange} />
          </FormControl>
          <FormControl mb={3}>
            <FormLabel>Date</FormLabel>
            <Input name="date" type="date" value={formData.date || ''} onChange={handleChange} />
          </FormControl>
          <FormControl mb={3}>
            <FormLabel>Start Time</FormLabel>
            <Input name="startTime" type="time" value={formData.startTime || ''} onChange={handleChange} />
          </FormControl>
          <FormControl mb={3}>
            <FormLabel>End Time</FormLabel>
            <Input name="endTime" type="time" value={formData.endTime || ''} onChange={handleChange} />
          </FormControl>
          <FormControl mb={3}>
            <FormLabel>Location</FormLabel>
            <Input name="location" value={formData.location || ''} onChange={handleChange} />
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button onClick={onClose} mr={3}>Cancel</Button>
          <Button onClick={handleSubmit}>Save</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default EditEventModal;
