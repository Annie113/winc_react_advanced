import React from 'react';
import { Button } from '@chakra-ui/react';

const DeleteEventButton = ({ eventId, onDeleteSuccess }) => {
  const handleDelete = async () => {
    const confirm = window.confirm('Are you sure you want to delete this event? This action cannot be undone.');
    if (!confirm) return;

    try {
      const response = await fetch(`http://localhost:3000/events/${eventId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        onDeleteSuccess(eventId); // Notify parent to remove the event from state
      } else {
        console.error('Failed to delete event');
      }
    } catch (error) {
      console.error('Error deleting event:', error);
    }
  };

  return (
    <Button colorScheme="red" size="sm" onClick={handleDelete}>
      Delete
    </Button>
  );
};

export default DeleteEventButton;
