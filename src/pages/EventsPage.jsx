import React, { useEffect, useState } from 'react';
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
  SimpleGrid,
  Flex,
} from '@chakra-ui/react';
import AddEventButton from '../components/Buttons/AddEventButton'; // ✅ Imported AddEventButton
import DeleteEventButton from '../components/Buttons/DeleteEventButton'; // ✅ Imported DeleteEventButton

const EventsPage = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3001/events')
      .then((res) => res.json())
      .then((data) => {
        setEvents(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Failed to fetch events:', error);
        setLoading(false);
      });
  }, []);

  // Handle successful deletion by updating the state
  const handleDeleteSuccess = (deletedId) => {
    setEvents((prev) => prev.filter((event) => event.id !== deletedId));
  };

  return (
    <Container maxW="1200px" mx="auto" p={6}>
      {/* Header with Add Event Button */}
      <Flex justify="space-between" align="center" mb={6}>
        <Heading>List of Events</Heading>
        <AddEventButton /> {/* AddEventButton */}
      </Flex>

      {loading ? (
        <Center>
          <Spinner size="xl" />
        </Center>
      ) : (
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
          {events.map((event) => (
            <Box
              key={event.id}
              p={4}
              borderWidth="1px"
              borderRadius="lg"
              boxShadow="md"
              bg="white"
            >
              {event.image && (
                <Image
                  src={event.image}
                  alt={event.title || event.name}
                  width="100%"
                  height="200px"
                  objectFit="cover"
                  borderTopRadius="md"
                  mb={4}
                />
              )}

              <Text fontSize="2xl" fontWeight="bold" mb={2}>
                {event.title || event.name}
              </Text>

              {event.description && (
                <Text color="gray.600" mb={2}>
                  {event.description}
                </Text>
              )}

              <Text>
                <strong>Date:</strong> {event.date}
              </Text>
              <Text>
                <strong>Time:</strong> {event.startTime} - {event.endTime}
              </Text>
              <Text>
                <strong>Location:</strong> {event.location}
              </Text>

              {event.categories && event.categories.length > 0 && (
                <Wrap mt={3}>
                  {event.categories.map((cat, idx) => (
                    <WrapItem key={idx}>
                      <Tag colorScheme="blue">{cat}</Tag>
                    </WrapItem>
                  ))}
                </Wrap>
              )}

              {/* Delete Event Button */}
              <Flex justify="flex-end" mt={4}>
                <DeleteEventButton
                  eventId={event.id}
                  onDeleteSuccess={handleDeleteSuccess}
                />
              </Flex>
            </Box>
          ))}
        </SimpleGrid>
      )}
    </Container>
  );
};

export default EventsPage;
