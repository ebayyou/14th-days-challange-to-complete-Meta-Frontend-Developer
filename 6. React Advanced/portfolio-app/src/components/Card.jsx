import {
  Avatar,
  Box,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  IconButton,
  Image,
  Text,
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const Card = ({ title, description, imageSrc }) => {
  return (
    <Card maxW="md">
      <CardHeader>
        <Flex spacing="4">
          <Flex
            flex="1"
            gap="4"
            alignItems="center"
            flexWrap="wrap"
          >
            <Avatar
              name="Segun Adebayo"
              src="https://bit.ly/sage-adebayo"
            />

            <Box>
              <Heading size="sm">Ebayyou Anggoro</Heading>
              <Text>Software Engineer</Text>
            </Box>
          </Flex>
          <IconButton
            variant="ghost"
            colorScheme="gray"
            aria-label="See menu"
            icon={<FontAwesomeIcon icon={faArrowRight} />}
          />
        </Flex>
      </CardHeader>
      <CardBody>
        <Heading
          as="h3"
          size="xl"
        >
          {title}
        </Heading>

        <Text>{description}</Text>
      </CardBody>
      <Image
        objectFit="cover"
        src={imageSrc}
        alt={title}
      />
    </Card>
  );
};

export default Card;
