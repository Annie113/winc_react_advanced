import React, { useRef, useState } from 'react';
import {
  Button,
  useDisclosure,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
} from '@chakra-ui/react';

const DeleteEventButton = ({ eventId, onDeleteSuccess }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    const API = (import.meta.env.VITE_API_URL || '').replace(/\/+$/, '');

    if (!API) {
      console.error('VITE_API_URL is not set. Add it in Netlify env vars (and .env locally).');
      return;
    }

    setIsDeleting(true);
    try {
      const res = await fetch(`${API}/events/${eventId}`, { method: 'DELETE' });
      if (!res.ok) throw new Error(`HTTP ${res.status} ${res.statusText}`);

      // Update parent list
      if (typeof onDeleteSuccess === 'function') onDeleteSuccess(eventId);

      onClose();
    } catch (err) {
      console.error('Error deleting event:', err);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <>
      <Button colorScheme="white" size="sm" onClick={onOpen}>
        Delete
      </Button>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isCentered
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete Event
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure you want to delete this event? This action cannot be undone.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose} isDisabled={isDeleting}>
                Cancel
              </Button>
              <Button colorScheme="red" onClick={handleDelete} ml={3} isLoading={isDeleting}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export default DeleteEventButton;
