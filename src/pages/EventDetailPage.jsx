import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Container,
  Heading,
  Text,
  Spinner,
  Center,
  Image,
  Wrap,
  WrapItem,
  Tag,
} from '@chakra-ui/react';

export const EventDetailPage = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3000/events/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setEvent(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Failed to fetch event:', error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <Center>
        <Spinner size="xl" />
      </Center>
    );
  }

  if (!event) {
    return <Text textAlign="center">Event not found.</Text>;
  }

  return (
    <Container maxW="800px" p={6}>
      <Heading mb={4}>{event.title || event.name}</Heading>

      {event.image && (
        <Image
          src={event.image}
          alt={event.title || event.name}
          borderRadius="md"
          mb={4}
          maxH="400px"
          objectFit="cover"
        />
      )}

      <Text fontSize="lg" mb={2}>
        <strong>Date:</strong> {event.date}
      </Text>
      <Text fontSize="lg" mb={2}>
        <strong>Time:</strong> {event.startTime} - {event.endTime}
      </Text>
      <Text fontSize="lg" mb={2}>
        <strong>Location:</strong> {event.location}
      </Text>

      {event.description && (
        <Text color="gray.700" mb={4}>
          {event.description}
        </Text>
      )}

      {event.categories && (
        <Wrap>
          {event.categories.map((cat, idx) => (
            <WrapItem key={idx}>
              <Tag colorScheme="blue">{cat}</Tag>
            </WrapItem>
          ))}
        </Wrap>
      )}
    </Container>
  );
};
