import React from 'react';
import NavBar from '../header';
import { Heading, Text } from '@chakra-ui/react';

const prizes = () => {
  return (
    <div>
      <NavBar />

      <style>
      @import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&display=swap');
      </style>
          
      <br />
      <br />

      <Heading fontFamily = 'Comfortaa'>Prizes</Heading>
          
      <br />
      <br />

      <Text
      fontFamily = 'Comfortaa'
      margin = 'auto 23%'> Drawings will be held at the main stage every 45 minutes starting at 9pm until midnight. </Text>
    </div>
  )
};

export default prizes;