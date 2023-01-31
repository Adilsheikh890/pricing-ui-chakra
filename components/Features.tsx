import Icon1 from '@/app/Icon/Icon1';
import Icons2 from '@/app/Icon/Icons2';
import Icons3 from '@/app/Icon/Icons3';

import { HStack, Box, Icon, Text, Flex } from '@chakra-ui/react';
import React from 'react'

export default function Features() {
  return (

    <Box maxW='780px' m='auto' mt='20px' px='50px'>
      <Flex direction={{base:'column', lg:'row'}}>
        <HStack mb='20px'>
          <Icon as={Icon1} />
          <Text>30 days money back Guarantee</Text>
        </HStack>

        <HStack mb='20px'>
          <Icon as={Icons2} />
          <Text>No setup fees 100% hassle-free</Text>
        </HStack>

        <HStack mb='20px'>
          <Icon as={Icons3} />
          <Text>No monthly subscription Pay once and for all</Text>
        </HStack>

      </Flex>
    </Box>


  )
}
