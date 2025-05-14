import React from 'react';
import { Button } from '@chakra-ui/react';

const EditEventButton = ({ onClick }) => {
  return (
    <Button size="sm" colorScheme="yellow" onClick={onClick}>
      Edit
    </Button>
  );
};

export default EditEventButton;
