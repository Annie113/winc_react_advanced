import { Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const GoToEventsButton = () => {
  const navigate = useNavigate();

  return (
    <Button
      colorScheme="teal"
      size="lg"
      onClick={() => navigate('/events')}
      _hover={{ bg: '#7F8F88' }}
      rounded="full"
      px={8}
      shadow="md"
    >
      View Upcoming Events
    </Button>
  );
};

export default GoToEventsButton;