import { Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const AddEventButton = () => {
  return (
    <Button as={Link} to="/add-event" colorScheme="teal">
      Add Event
    </Button>
  );
};

export default AddEventButton;
