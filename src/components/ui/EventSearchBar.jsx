import {
  Flex,
  Input,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { useRef } from 'react';

const EventSearchBar = ({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  allCategories,
}) => {
  const debounceTimeout = useRef(null);

  const handleSearchChange = (e) => {
    const value = e.target.value;

    if (debounceTimeout.current) clearTimeout(debounceTimeout.current);

    debounceTimeout.current = setTimeout(() => {
      setSearchTerm(value);
    }, 300);
  };

  return (
    <Flex mb={6} pb={4} pt={6} gap={6} direction={{ base: 'column', md: 'row' }} align="start">
      <Input
        aria-label="Search events"
        width={{ base: '100%', md: '49%' }}
        placeholder="Search events..."
        _placeholder={{ color: '#7F8F88' }} 
        defaultValue={searchTerm}
        onChange={handleSearchChange}
        focusBorderColor="#7F8F88"
        bg="white"
        color="black"
        borderColor="gray.300"
        _hover={{ borderColor: 'gray.500' }}
        borderRadius="md"
        fontSize="md"
        variant="outline"
      />
      <Menu>
        <MenuButton
          as={Button}
          aria-label="Filter by category"
          rightIcon={<ChevronDownIcon />}
          bg="white"
          color="black"
          border="1px solid"
          borderColor="gray.300"
          _hover={{ borderColor: '#7F8F88', bg: 'white' }}
          _expanded={{ bg: '#dbdbdb' }}
          borderRadius="md"
          fontSize="md"
        >
          {selectedCategory || 'Filter by category'}
        </MenuButton>
        <MenuList bg="white" borderColor="#dbdbdb">
          <MenuItem
            onClick={() => setSelectedCategory('')}
            bg={!selectedCategory ? '#dbdbdb' : 'white'}
            color="black"
            _hover={{ bg: '#fff' }}
            _focus={{ bg: '#dbdbdb' }}
          >
            All Categories
          </MenuItem>
          {allCategories.length === 0 ? (
            <MenuItem isDisabled>No categories available</MenuItem>
          ) : (
            allCategories.map((cat) => (
              <MenuItem
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                bg={selectedCategory === cat ? '#dbdbdb' : 'white'}
                color="black"
                _hover={{ bg: '#fff' }}
                _focus={{ bg: '#dbdbdb' }}
              >
                {cat}
              </MenuItem>
            ))
          )}
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default EventSearchBar;
