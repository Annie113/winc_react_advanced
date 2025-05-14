import { Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const ViewEventButton = ({ eventId }) => {
  return (
    <Link to={`/event/${eventId}`}>
      <Button colorScheme="teal" size="sm">
        View Event
      </Button>
    </Link>
  );
};

export default ViewEventButton;
