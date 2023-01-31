
"use client";

import Header from '@/components/Header';
import Pricing from '@/components/Pricing';
import CheckmarkIcon from './Icon/CheckmarkIcon';
import Features from '@/components/Features';

import React from 'react'

import { ChakraProvider } from '@chakra-ui/react';

function ChakraWrapper({children}: {
  
  children: React.ReactNode}){
  return (
    <ChakraProvider>
    {children}
                <Header/>
                <Pricing />
                <CheckmarkIcon />
                <Features />
                
    </ChakraProvider>
  )
}

export default ChakraWrapper


