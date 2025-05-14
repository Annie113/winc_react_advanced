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
  Input,
  Select,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import AddEventButton from '../components/Buttons/AddEventButton';
import DeleteEventButton from '../components/Buttons/DeleteEventButton';

const EventsPage = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

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
    <Container maxW="1200px" mx="auto" p={6}>
      <Flex justify="space-between" align="center" mb={6}>
        <Heading>List of Events</Heading>
        <AddEventButton />
      </Flex>

      {/* Search and Filter Controls */}
      <Flex mb={6} gap={4} direction={{ base: 'column', md: 'row' }}>
        <Input
          placeholder="Search events..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Select
          placeholder="Filter by category"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {allCategories.map((cat, idx) => (
            <option key={idx} value={cat}>
              {cat}
            </option>
          ))}
        </Select>
      </Flex>

      {loading ? (
        <Center>
          <Spinner size="xl" />
        </Center>
      ) : (
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
          {filteredEvents.map((event) => (
            <Link to={`/event/${event.id}`} key={event.id}>
              <Box
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

                <Flex justify="flex-end" mt={4}>
                  <DeleteEventButton
                    eventId={event.id}
                    onDeleteSuccess={handleDeleteSuccess}
                  />
                </Flex>
              </Box>
            </Link>
          ))}
        </SimpleGrid>
      )}
    </Container>
  );
};

export default EventsPage;
