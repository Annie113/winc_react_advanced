import React from 'react';
import { Button } from '@chakra-ui/react';

const EditEventButton = ({ onClick }) => {
  return (
    <Button size="sm" colorScheme="#7F8F8" onClick={onClick}>
      Edit
    </Button>
  );
};

export default EditEventButton;
