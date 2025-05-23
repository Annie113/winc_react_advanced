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

const EventSearchBar = ({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  allCategories,
}) => {
  return (
    <Flex mb={6} pb={4} pt={6} gap={6} direction={{ base: 'column', md: 'row' }} align="start">
      <Input
        width={{ base: '100%', md: '49%' }}
        placeholder="Search events..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
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
          {allCategories.map((cat, idx) => (
            <MenuItem
              key={idx}
              onClick={() => setSelectedCategory(cat)}
              bg={selectedCategory === cat ? '#dbdbdb' : 'white'}
              color="black"
              _hover={{ bg: '#fff' }}
              _focus={{ bg: '#dbdbdb' }}
            >
              {cat}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default EventSearchBar;
