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
  useDisclosure,
} from '@chakra-ui/react';

import AddEventButton from '../components/Buttons/AddEventButton';
import DeleteEventButton from '../components/Buttons/DeleteEventButton';
import ViewEventButton from '../components/Buttons/ViewEventButton';
import EditEventButton from '../components/Buttons/EditEventButton';
import EditEventModal from '../components/ui/EditEventModal';
import EventSearchBar from '../components/ui/EventSearchBar'; // ✅ NEW

const EventsPage = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedEvent, setSelectedEvent] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    fetch('http://localhost:3000/events')
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

  const handleDeleteSuccess = (deletedId) => {
    setEvents((prev) => prev.filter((event) => event.id !== deletedId));
  };

  const handleEditClick = (event) => {
    setSelectedEvent(event);
    onOpen();
  };

  const handleSave = (updatedEvent) => {
    setEvents((prev) =>
      prev.map((evt) => (evt.id === updatedEvent.id ? updatedEvent : evt))
    );
  };

  const filteredEvents = events.filter((event) => {
    const matchesSearch =
      event.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.description?.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      !selectedCategory || event.categories?.includes(selectedCategory);

    return matchesSearch && matchesCategory;
  });

  const allCategories = [...new Set(events.flatMap((e) => e.categories || []))];

  return (
    <Container maxW="1200px" mx="auto" p={6} mt={20}>
      <Flex justify="space-between" align="center" mb={6}>
        <Heading>List of Events</Heading>
        <AddEventButton />
      </Flex>

      {/* ✅ Search and Filter Bar */}
      <EventSearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        allCategories={allCategories}
      />

      {loading ? (
        <Center>
          <Spinner size="xl" />
        </Center>
      ) : (
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
          {filteredEvents.map((event) => (
            <Flex
              key={event.id}
              direction="column"
              p={4}
              borderWidth="1px"
              borderRadius="lg"
              boxShadow="md"
              bg="white"
              height="100%"
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

              <Box flex="1">
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
                        <Tag bg="#DADBDD" color="#5B605E" pl={2} pb={1}>
                          {cat}
                        </Tag>
                      </WrapItem>
                    ))}
                  </Wrap>
                )}
              </Box>

              <Flex justify="space-between" mt={4}>
                <ViewEventButton eventId={event.id} />
                <Flex gap={2}>
                  <EditEventButton onClick={() => handleEditClick(event)} />
                  <DeleteEventButton
                    eventId={event.id}
                    onDeleteSuccess={handleDeleteSuccess}
                  />
                </Flex>
              </Flex>
            </Flex>
          ))}
        </SimpleGrid>
      )}

      {selectedEvent && (
        <EditEventModal
          isOpen={isOpen}
          onClose={onClose}
          event={selectedEvent}
          onSave={handleSave}
        />
      )}
    </Container>
  );
};

export default EventsPage;
