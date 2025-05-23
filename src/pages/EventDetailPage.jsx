import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Container,
  Heading,
  Box,
  Text,
  Image,
  Tag,
  Wrap,
  WrapItem,
  Spinner,
  Center,
} from '@chakra-ui/react';

const EventDetails = () => {
  const { eventId } = useParams(); // Get the eventId from the URL
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3000/events/${eventId}`)
      .then((res) => res.json())
      .then((data) => {
        setEvent(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Failed to fetch event:', error);
        setLoading(false);
      });
  }, [eventId]); // Re-fetch when eventId changes

  if (loading) {
    return (
      <Center>
        <Spinner size="xl" />
      </Center>
    );
  }

  if (!event) {
    return <Text>No event found.</Text>;
  }

  return (
    <Container maxW="800px" mt="80px"> {/* Increased top margin to avoid navbar overlap */}
      <Heading pt={4} mb={6}>{event.title || event.name}</Heading>
      {event.image && (
        <Image
          src={event.image}
          alt={event.title || event.name}
          width="100%"
          height="400px"
          objectFit="cover"
          mb={4}
        />
      )}
      <Box>
        <Text fontSize="lg" mb={2}>
          <strong>Description:</strong> {event.description}
        </Text>
        <Text fontSize="lg" mb={2}>
          <strong>Date:</strong> {event.date}
        </Text>
        <Text fontSize="lg" mb={2}>
          <strong>Time:</strong> {event.startTime} - {event.endTime}
        </Text>
        <Text fontSize="lg" mb={2}>
          <strong>Location:</strong> {event.location}
        </Text>

        {event.categories && event.categories.length > 0 && (
          <Wrap mt={3}>
            {event.categories.map((cat, idx) => (
              <WrapItem key={idx}>
                <Tag bg="#DADBDD" color="#5B605E" pl={2} pb={1}>{cat}</Tag>
              </WrapItem>
            ))}
          </Wrap>
        )}
      </Box>
    </Container>
  );
};

export default EventDetails;
