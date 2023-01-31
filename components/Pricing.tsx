"use client";

import React from 'react';
import { Button, Box, Flex, Text, Heading, HStack, Icon } from '@chakra-ui/react';
import CheckmarkIcon from '@/app/Icon/CheckmarkIcon';

export default function Pricing() {
  return (
    <Box maxW='950px'
      //mx='auto'
      mt='-110px'
      mx={{ base: '20px', lg: 'auto' }}
      bg='white'
      borderRadius='10px'
      overflow='hidden'
      boxShadow='0px 20px 25px -5px rgba(0, 0, 0, 0.1), 
    0px 10px 10px -5px rgba(0, 0, 0, 0.04)'>

      <Flex direction={{ base: 'column', md: 'column', lg: 'row' }}>
       {/* left side box */}
        <Box bg='#D6E4E5' textAlign='center' px='60px' w='378px' h='300px'>

          <Text fontWeight="bold" fontSize="24px" mt='40px'>Premium PRO</Text>
          <Heading fontSize='60px'>$329</Heading>
          <Text>billed just once</Text>
          <Button mt='20px' w='285px' borderRadius='10px' bg='#805AD5' textColor='white'>Get Started</Button>
        </Box>

        {/* right side box */}

        <Box pt='50px' p='25px'>

          <Text mb='20px' mt='20px'>Access these features when you get this pricing package for your business.</Text>

          <HStack mb='15px'>
            <Icon as={CheckmarkIcon} />
            <Text>International calling and messaging API</Text>
          </HStack>

          <HStack mb='15px'>
            <Icon as={CheckmarkIcon} />
            <Text>Additional phone numbers</Text>
          </HStack>

          <HStack mb='15px'>
            <Icon as={CheckmarkIcon} />
            <Text>Automated messages via Zapier</Text>
          </HStack>

          <HStack mb='15px'>
            <Icon as={CheckmarkIcon} />
            <Text>24/7 support and consulting</Text>
          </HStack>
        </Box>
      </Flex>
    </Box>
  );
}
