import React from 'react';
import { Avatar, AvatarBadge, Box, Button, Heading, Text } from '@chakra-ui/react';
import FullScreenSection from './FullScreenSection';
import avatar from '../assets/image/avatar.png';
const greeting = 'Hello, I am Bayu Anggoro!';
const bio1 = 'I am junior frontend developer';
const bio2 = 'specialised in React';

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="whiteAlpha.500"
  >
    <Box
      display="grid"
      gridTemplateColumns="repeat(2,minmax(0,1fr))"
      gridGap={8}
      placeItems="center"
    >
      <Box
        color="blackAlpha.800"
        maxW="28rem"
      >
        <Heading mb={4}>{greeting}</Heading>
        <Text fontSize="xl">
          {bio1} - {bio2}
        </Text>
        <Button
          size="lg"
          bgColor="indigo"
          color="whiteAlpha.800"
          mt="24px"
        >
          Getting Started
        </Button>
      </Box>

      <Avatar
        name="Ebayyou Anggoro"
        src={avatar}
        size="2xl"
      >
        <AvatarBadge
          borderColor="purple.300"
          bg="indigo"
          boxSize="1.25em"
        />
      </Avatar>
    </Box>
  </FullScreenSection>
);

export default LandingSection;
