import React from 'react';
import FullScreenSection from './FullScreenSection';
import { Box, Heading, Image } from '@chakra-ui/react';
import Card from './Card';
import { Fragment } from 'react';

const projects = [
  {
    title: 'TROOVA - Travel Agent Mobile',
    description: 'TROOVA is A mobile application for Travel Agent Mobile in other world',
    getImageSrc: () => require('../assets/image/Troova_TravelAgent.png'),
  },
  {
    title: 'Neona E-Commerce',
    description:
      'Neona E-Commerce app, the Fashion trendy in the world with a modern stylish UI&UX',
    getImageSrc: () => require('../assets/image/Neona_E-commerce.jpg',)
  },
  {
    title: 'Brainwave - AI iOS UI Kit',
    description:
      'Introducing the Brainwave AI iOS UI Kit — a revolutionary Figma UI kit designed to transform the way you interact with ChatGPTof income',
    getImageSrc: () => require('../assets/image/Brainwave_UI-Kit.webp'),
  },
  {
    title: 'MyDeen - Mobile Muslim App',
    description:
      'MyDeen is a Mobile Muslim App and is easy to use with clean, neat, and modern design. Available Light & Dark theme in application.',
    getImageSrc: () => require('../assets/image/MyDeen_Mobile-Muslim-App.png'),
  },
];

const ProjectsSection = () => {
  return (
      <FullScreenSection
        backgroundColor="purple.400"
        isDarkBackground
        p={8}
        alignItems="center"
        spacing={8}
        id="project-section"
      >
        <Heading
          as="h1"
          id="projects-section"
        >
          Project Portfolio's
        </Heading>
        <Box
          display="grid"
          gridTemplateColumns="repeat(2,minmax(0,1fr))"
          gridGap={8}
        >
          {projects.map(({title, description, getImageSrc}) => (
            <Fragment key={title}>
              <Card 
                title={title}
                description={description}
                getImageSrc={getImageSrc()}
              />
              <Image src={getImageSrc()} alt={title} borderRadius="lg" />
            </Fragment>
          ))}
        </Box>
      </FullScreenSection>
  );
};

export default ProjectsSection;
